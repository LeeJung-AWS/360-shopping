const ModalBoxAdmin: React.FC = () => {

    function clickDoneBtn() {
        const modalEl = document.getElementById('admin-modal')!;
        modalEl.style.display = 'none';
    }

    return (

        <div className="modal" id='admin-modal'>
            <div className="modal-content">
                <button onClick={clickDoneBtn}>DONE</button>
                    <div className="modal-content-body">
                        <div id="seleted-category">Select a Category</div>
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
                                <input type="checkbox" />
                            </div>
                        </div>
                        <div className="modal-content-lists">
                            <label>Shirts</label>
                            <input type="checkbox" />
                        </div>
                        <div className="modal-content-lists">
                            <label>Clothing</label>
                            <input type="checkbox" />
                        </div>
                        <div className="modal-content-lists">
                            <label>Watches</label>
                            <input type="checkbox" />
                        </div>
                        <div className="modal-content-lists">
                            <label>Accessories</label>
                            <input type="checkbox" />
                        </div>
                        <div className="modal-content-lists">
                            <label>Shoes</label>
                            <input type="checkbox" />
                        </div>
                    </div>
            </div>
        </div>

    )

}

export default ModalBoxAdmin;