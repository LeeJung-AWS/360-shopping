// Style: sass/03_component/_tabmenu.scss
// This component export to AdminPage, then pass This component to tabMenu Component as a variable.

import NumberComma from '../../NumberComma'; // Create dot(.) every third numbers ex) if receiving 123123, then return 123.123

interface ChildProps {
    title: string;
    rangeDate: string;
    secondRowUnit?: string;
    secondRow: number;
}

const ContentsTopMenu: React.FC<ChildProps> = ({ title, rangeDate, secondRow, secondRowUnit }) => {
        
        return(<div className="row">
            <div className="tabcontent-title">
                <div>
                    <div>{title}</div>
                    {secondRowUnit? <div id="range-date">{rangeDate} / ${NumberComma(secondRow)}</div> : <div id="range-date">{rangeDate} / {secondRow}</div>}
                    
                </div>
                <div>
                <select id="select-date" name="date">
                    <option value="daily">Daily</option>
                    <option value="monthly">Monthly</option>
                </select>
                </div>
            </div>
        </div>);
    }

export default ContentsTopMenu;