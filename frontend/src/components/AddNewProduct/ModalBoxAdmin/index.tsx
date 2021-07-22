import { useState } from 'react';

const ModalBoxAdmin: React.FC = () => {
    // Display amount of seleted categories when checking them by using state.
    const [ amountOfCategory, setAmountOfCategory ] = useState(0);

    function countCategories(event: any) {
        let amount: number = amountOfCategory;
        if(event.target.checked){
            amount++;
            setAmountOfCategory(amount);
        }else{
            amount--;
            setAmountOfCategory(amount);
        }
    }

    function clickDoneBtn() {
        const modalEl = document.getElementById('admin-modal')!;
        modalEl.style.display = 'none';
    }

    // TODO: When clicking a category, then add the category as a button in Categories Element in New ADD Product
    // TODO: Search Function and Add Categories

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
                                <input type="checkbox" onClick={countCategories} />
                            </div>
                        </div>
                        <div className="modal-content-lists">
                            <label>Shirts</label>
                            <input type="checkbox" onClick={countCategories} />
                        </div>
                        <div className="modal-content-lists">
                            <label>Clothing</label>
                            <input type="checkbox" onClick={countCategories} />
                        </div>
                        <div className="modal-content-lists">
                            <label>Watches</label>
                            <input type="checkbox" onClick={countCategories} />
                        </div>
                        <div className="modal-content-lists">
                            <label>Accessories</label>
                            <input type="checkbox" onClick={countCategories} />
                        </div>
                        <div className="modal-content-lists">
                            <label>Shoes</label>
                            <input type="checkbox" onClick={countCategories} />
                        </div>
                    </div>
            </div>
        </div>

    )

}

export default ModalBoxAdmin;