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

            // pass Checked Categories to NewAddProduct Component(Parent)
            pullCategories(event.target.dataset.name, event.target.checked);
        }else{
            amount--;
            setAmountOfCategory(amount);

            // pass Unchecked Categories to NewAddProduct Component(Parent)
            pullCategories(event.target.dataset.name, event.target.checked);
        }
    }

    function clickDoneBtn() {
        const modalEl = document.getElementById('admin-modal')!;
        modalEl.style.display = 'none';
    }

    // Search Function - Filter
    function handleInputChange (event: any) {
        const value = event.target.value.trim();
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

    }, [filteredAllCategories])

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
                                <button id="add-btn-category">ADD</button>
                            </div>
                        </form>
                        {filteredAllCategories? filteredAllCategories.map(category => {
                            return (
                            <div className="modal-content-lists" key={category}>
                                <label>{category}</label>
                                <div className="checkbox">
                                <input type="checkbox" data-name={category} onClick={countCategories} />
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