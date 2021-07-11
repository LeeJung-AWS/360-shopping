const TabMenuBody: React.FC = () => {
        
        return(<div className="row">
            <div className="tabcontent-title">
                <div>
                    {/* <div>{button.title}</div> */}
                    <div id="range-date">Jan 01 ~ Dec 31, 2021 $23,950.00</div>
                </div>
                <div>
                <select id="select-date" name="date">
                    <option value="daily">Daily</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
                </div>
            </div>
        </div>);
    }

export default TabMenuBody;