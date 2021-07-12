import NumberComma from '../../NumberComma';

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