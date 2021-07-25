// Style : sass/3_components/_modalBoxAdmin.scss

import { useState, useEffect } from 'react';

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
   const [newCategories, setNewCategories] = useState<string[] | undefined>(undefined);

   // To store the status of categories checked or unchecked
   const [isChecked, setIsChecked] = useState<{[k: string]: boolean}>({});

    // To store UserInput from Search Form
    const [userInput, setUserInput] = useState<string>('');

     // TODO: Build useEffect to fetch categories data from DB (Categories). and Pass Categories to ModalBox to display.
     useEffect(() => {
        setAllCategories(['Men', 'Shirts', 'Clothing', 'Watches', 'Accessories', 'Shoes']);
        setFilteredAllCategories(['Men', 'Shirts', 'Clothing', 'Watches', 'Accessories', 'Shoes']);
    }, [])

    // When clicking a category, Increase or Decrease amount of category on the top in this Modal
    // Also pass Checked or Unchecked Categories to NewAddProduct Component(Parent) to add the category as a button in Categories Element
    function countCategories(event: any) {
        let amount: number = amountOfCategory;
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
    function addCategoryBtn(event:any) {
        event.preventDefault();
        
        // Updates categories state with new category
        if(allCategories !== undefined){
            setAllCategories([...allCategories, userInput]);
            setFilteredAllCategories([...allCategories, userInput]);
        }else{
            setAllCategories([userInput]);
            setFilteredAllCategories([userInput]);
        }

        // Collect new categories to store DB after clicking DONE btn
        if(newCategories !== undefined){
            setNewCategories([...newCategories, userInput]);
        }else{
            setNewCategories([userInput]);
        }

        // Make Input-value empty
        const inputValue = document.getElementById('category-search-form') as HTMLInputElement  // ERROR FIX : The property 'value' does not exist on value of type 'HTMLElement'
        inputValue.value = '';
    }

    // TODO: Delete a category function

    // TODO: When Click DONE btn on Category Modal, if newCategories state has a new Category, Add the new category to DB 
    function clickDoneBtn() {
        const modalEl = document.getElementById('admin-modal')!;
        modalEl.style.display = 'none';

        // Check if there is a newCategory
        if(newCategories){
            console.log('Add new Category to DB');
        }
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
        // console.log(filteredAllCategories);
        if(filteredAllCategories.length === 0){
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

    }, [filteredAllCategories, isChecked])

    return (
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
                                <input type="checkbox" className="category-input-checkbox" data-name={category} onClick={countCategories} />
                            </div>
                        </div>
                            )
                        })
                         : ""}
                    </div>
            </div>
        </div>

    )

}

export default ModalBoxAdmin;