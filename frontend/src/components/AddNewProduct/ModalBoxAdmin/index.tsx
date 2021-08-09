// Style : sass/3_components/_modalBoxAdmin.scss

import { useState, useEffect } from 'react';

import { getCategories, addCategory, updateCategory, deleteCategory } from '../../../utils/API';

interface ChildProps{
    pullCategories: (pullCategories: string, checked: boolean) => void
}

const ModalBoxAdmin: React.FC<ChildProps> = ( {pullCategories} ) => {
    // Display amount of seleted categories when checking them by using state.
    const [ amountOfCategory, setAmountOfCategory ] = useState(0);

     // To store categories list after Fetching them from DB
   const [allCategories, setAllCategories] = useState<string[] | undefined>(undefined);
   const [filteredAllCategories, setFilteredAllCategories] = useState<string[]>([]);

   // To store new categories list
   // const [newCategories, setNewCategories] = useState<string[] | undefined>(undefined);

   // To store the status of categories checked or unchecked
   const [isChecked, setIsChecked] = useState<{[k: string]: boolean}>({});

    // To store UserInput from Search Form
    const [userInput, setUserInput] = useState<string>('');

    // Fetch Category DATA from DB (Categories)
    // Pass Categories to ModalBox to display.
    async function categoryData(){
        const res = await getCategories();
        let categories = [];
        for(let i = 0; i < res.length; i++){
            categories.push(res[i].name);
        }
        setAllCategories(categories);
        setFilteredAllCategories(categories);
    }

     // Build useEffect for fetch Categories DB
     useEffect(() => {
        categoryData();
    }, [])

    // When clicking a category, Increase or Decrease amount of category on the top in this Modal
    // Also pass Checked or Unchecked Categories to NewAddProduct Component(Parent) to add the category as a button in Categories Element
    function countCategories(event: any) {
        let amount: number = amountOfCategory;
        // console.log(event.target)
        // console.log(event.target.checked)
        if(event.target.checked){
            amount++;
            setAmountOfCategory(amount);

            // store the status of categories checked or unchecked
            setIsChecked({...isChecked, [event.target.dataset.name]: event.target.checked})

            // pass Checked Categories to NewAddProduct Component(Parent)
            pullCategories(event.target.dataset.name, event.target.checked);
        }else{
            amount--;
            setAmountOfCategory(amount);

            // pass Unchecked Categories to NewAddProduct Component(Parent)
            pullCategories(event.target.dataset.name, event.target.checked);

            // store the status of categories checked or unchecked
            setIsChecked({...isChecked, [event.target.dataset.name]: event.target.checked})
        }
    }

    // Add a category on the lists 
    // Add the new category to DB 
    function addCategoryBtn(event:any) {
        event.preventDefault();
        
        // Add new Category in Category DB
        addCategory({name: userInput});

        // Updates categories state with new category
        if(allCategories !== undefined){
            setAllCategories([...allCategories, userInput]);
            setFilteredAllCategories([...allCategories, userInput]);
        }else{
            setAllCategories([userInput]);
            setFilteredAllCategories([userInput]);
        }

        // Make Input-value empty
        const inputValue = document.getElementById('category-search-form') as HTMLInputElement  // ERROR FIX : The property 'value' does not exist on value of type 'HTMLElement'
        inputValue.value = '';
    }

    // When Click DONE btn on Category Modal, close the modal
    function clickDoneBtn() {
        const modalEl = document.getElementById('admin-modal')!;
        modalEl.style.display = 'none';

        // Active Scrollable Body
        document.body.style.overflowY = 'auto';

    }

    // Search Function - Filter
    function handleInputChange (event: any) {
        const value = event.target.value.trim();
        setUserInput(value);
        const originalCategoriesArr:string[]|undefined= allCategories?[...allCategories]:[];
        
        setFilteredAllCategories(
            originalCategoriesArr.filter(category => {
                // console.log(category);
                return(category.toLowerCase().includes(value.toLowerCase()))
            })
        );
    };

    // When searching categories, if there is no the same category, then dispaly ADD button.
    useEffect(() => {
        let isCheck: boolean;
        if(userInput === ""){
            isCheck = true;
        }else{
            isCheck = false;
        }
         // Check if there is a category that is the same as the category (that user input).
        allCategories?.forEach(category => {
            if(category.toLowerCase() === userInput.toLowerCase() && userInput !== ""){
                isCheck = true;
            }
        })

        // display ADD btn if the is no category that is the same as the category (that user input)
        if(filteredAllCategories.length === 0 || !isCheck){
            document.getElementById('add-btn-category')!.style.display = "block";
        }else{
            document.getElementById('add-btn-category')!.style.display = "none";
        }

        // Check isChecked box to remain the checkbox status which is the same as before clicking ADD (category) Btn
        const categoryInputCheckboxs = document.querySelectorAll<any>('.category-input-checkbox'); // querySelectorAll is generic so adding <HTMLElement> in the middle
        for(const checkbox of categoryInputCheckboxs){  // Set the target compiler option in tsconfig.json to es6 or higher for NodeListOf<T> to be iterable.
            let checkboxName: string | undefined = checkbox.dataset.name;
            if(checkboxName !== undefined && isChecked[checkboxName]){
                checkbox.checked = true;
                // console.log(checkboxName + " in if statement");
                // console.log(isChecked[checkboxName]);
            }
        }

    }, [allCategories, filteredAllCategories, userInput, isChecked])

    // Hendle Category Edit / Delete Button ( ... Btn )
    function handleCategoryOnClick(event: any){
        // Get the Category name that a user want to edit or delete
        let categoryName = event.target.parentNode.childNodes[1].dataset.name;
        // console.log(event.target.parentNode.childNodes[1].dataset.name)

        // Display Modal
        const modalInCategoryEl = document.getElementById('modal-in-category')!;
        modalInCategoryEl.style.display = 'block';

        // Get current position
        const modalInCategoryContentEl = document.getElementById('modal-in-category-content')!;
        let intCoordX = event.clientX;   // -40px 
        let intCoordY = event.clientY;   // +22px

        // Assign ModalInCategoryContents position
        modalInCategoryContentEl.style.left = (intCoordX - 40)+ 'px';
        modalInCategoryContentEl.style.top = (intCoordY + 22) + 'px';

        //Add category name in Dataset
        const editBtn = document.getElementById('edit-category')!;
        const deleteBtn = document.getElementById('delete-category')!;
        editBtn.dataset.name = categoryName;
        deleteBtn.dataset.name = categoryName;

        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener("click", function(event: any) {
            if (event.target === modalInCategoryEl) {
                modalInCategoryEl.style.display = "none";
            }
        });
    }

    // Delete a category
    // Delete the category from DB 
    function deleteCategoryBtn(event: any) {
        // Delete a category from DB by Category Name
        deleteCategory(event.target.dataset.name);

        // Take category Check-box element by Id to pass unchecked status to 'Categories' row in AddNewProduct Component
        const categoryElement = document.getElementById(`${event.target.dataset.name}-category-id`) as HTMLInputElement;

         // Update amount of Category on the Top of the Modal
         let amount: number = amountOfCategory;
         // if the category is checked before, then decrease amount
         if(categoryElement.checked){
             amount--;
             setAmountOfCategory(amount);
         }
        //  console.log(amountOfCategory)
        
        // Assign 'false' because it will be deleted.
        categoryElement.checked = false;
        // pass Unchecked Categories to NewAddProduct Component(Parent) to remove the category Btn on 'Categories' row
        pullCategories(event.target.dataset.name, categoryElement.checked);

        // Update Status for Categories List on the Modal
        let tempCategory = [...filteredAllCategories];
        let indexDeleting = tempCategory.indexOf(event.target.dataset.name);
        // Remove the Category that a user want to delete
        tempCategory.splice(indexDeleting, 1);
        setFilteredAllCategories([...tempCategory]);
        setAllCategories([...tempCategory])

        // Take Parent Node to close Edit/Delete Modal (display 'none')
        const parentNode = event.target.parentNode.parentNode; // id='modal-in-category'
        parentNode.style.display = 'none';
    }

    // TODO: Edit a category
    // TODO: Edit a category from DB 
    function editCategoryBtn(event: any) {
        // Take Parent Node to close Edit/Delete Modal (display 'none')
        const parentNode = event.target.parentNode.parentNode; // id='modal-in-category'
        parentNode.style.display = 'none';
        console.log("edit Category name")

        // Open Edit Category Modal with Category name
        console.log('Open Edit Category Modal with Category name')
        console.log(event.target.dataset.name)

        // Update State and DB
    }

    return (<>
        <div className="modal" id='admin-modal'>
            <div className="modal-content">
                <button onClick={clickDoneBtn}>DONE</button>
                    <div className="modal-content-body">
                        {amountOfCategory > 0 ? 
                            amountOfCategory === 1 ? <div id="seleted-category">{amountOfCategory} category selected </div> : <div id="seleted-category">{amountOfCategory} categories selected </div> 
                            : <div id="none-seleted-category">Select a Category</div>}
                        <form>
                            <div><i className="fas fa-search"></i></div>
                            <input id="category-search-form" placeholder="Add or Search for a Category" onChange={handleInputChange} />
                            <div className="btn-outbox">
                                <button id="add-btn-category" onClick={addCategoryBtn}>ADD</button>
                            </div>
                        </form>
                        {filteredAllCategories? filteredAllCategories.map(category => {
                            return (
                            <div className="modal-content-lists" key={category}>
                                <label>{category}</label>
                                
                                <div className="checkbox">
                                    <div id="category-delete-btn" onClick={handleCategoryOnClick}>...</div>
                                    
                                    <input type="checkbox" className="category-input-checkbox" id={category+"-category-id"} data-name={category} onClick={countCategories} />
                                </div>
                        </div>
                            )
                        })
                         : ""}
                    </div>
            </div>
        </div>

        <div id='modal-in-category'>
            <div id="modal-in-category-content">
                <div id="edit-category" onClick={editCategoryBtn}>EDIT</div>
                <div id="delete-category" onClick={deleteCategoryBtn}>DELETE</div>
            </div>
        </div>
        </>

    )

}

export default ModalBoxAdmin;