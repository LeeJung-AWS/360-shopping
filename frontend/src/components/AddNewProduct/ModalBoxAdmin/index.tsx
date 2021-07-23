import { useState } from 'react';

interface ChildProps{
    pullCategories: (pullCategories: string, checked: boolean) => void
}

const ModalBoxAdmin: React.FC<ChildProps> = ( {pullCategories} ) => {
    // Display amount of seleted categories when checking them by using state.
    const [ amountOfCategory, setAmountOfCategory ] = useState(0);

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

    // TODO: Search Function
    // TODO: When searching categories, if there is no the same category, then dispaly ADD button.

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
                            <input id="category-search-form" placeholder="Add or Search for a Category" />
                            <div className="btn-outbox">
                                <button>ADD</button>
                            </div>
                        </form>

                        <div className="modal-content-lists">
                            <label>Men</label>
                            <div className="checkbox">
                                <input type="checkbox" data-name={'Men'} onClick={countCategories} />
                            </div>
                        </div>
                        <div className="modal-content-lists">
                            <label>Shirts</label>
                            <input type="checkbox" data-name={'Shirts'} onClick={countCategories} />
                        </div>
                        <div className="modal-content-lists">
                            <label>Clothing</label>
                            <input type="checkbox" data-name={'Clothing'} onClick={countCategories} />
                        </div>
                        <div className="modal-content-lists">
                            <label>Watches</label>
                            <input type="checkbox" data-name={'Watches'} onClick={countCategories} />
                        </div>
                        <div className="modal-content-lists">
                            <label>Accessories</label>
                            <input type="checkbox" data-name={'Accessories'} onClick={countCategories} />
                        </div>
                        <div className="modal-content-lists">
                            <label>Shoes</label>
                            <input type="checkbox" data-name={'Shoes'} onClick={countCategories} />
                        </div>
                    </div>
            </div>
        </div>

    )

}

export default ModalBoxAdmin;