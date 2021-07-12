import { useState, ReactNode } from 'react';
import NumberComma from '../NumberComma';
import SalesGraph from '../SalesGraph';

interface tabMenuInformation {
    title: string; 
    secondRow: number; 
    secondRowUnit?: string; 
    contentsTopMenu?: ReactNode; 
    contents: {months: Array<string>, yAxis: Array<number>, yAixsTickprefix: string};
}

interface ChildProps {
    header: string;
    tabMenuInformation: Array<tabMenuInformation>;
}

const TabMenu: React.FC<ChildProps> = ({header, tabMenuInformation}) => {
    
    const [ graphContent, setGraphContent ] = useState<{months: Array<string>; yAixsTickprefix: string; yAxis: Array<number>}>(
        {
            months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            yAxis: [4500, 1500, 4350, 4510, 1500, 1500, 4550, 3500, 5500, 2500, 3600, 4300],
            yAixsTickprefix: '$'
        }
    );


    const amdinTabMenuClick = (event: any) => {
        // The exclamation mark means a developer knows there is a button element.( The value is not null )
        const adminTablinks = document.querySelectorAll('.admin-tablinks')!;
        // In order to use style property, use HTMLCollectionOf<HTMLElement>
        const tabcontent = document.getElementsByClassName("tabcontent") as HTMLCollectionOf<HTMLElement>;

        // All contents none-display
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Remove tabmenu-active ClassName
        for (let i = 0; i < adminTablinks.length; i++) {
            adminTablinks[i].className = adminTablinks[i].className.replace(" tabmenu-active", "");
          }
        
        // Checking the tab and Create ID for content
        // console.log(event.currentTarget.children[0].textContent.toLowerCase().replace(" ","-") + "-content");
        const seletedContentId = event.currentTarget.children[0].textContent.toLowerCase().replace(" ","-") + "-content";

        // Display seletedContent
        const seletedContent = document.getElementById(`${seletedContentId}`)!;
        seletedContent.style.display = "block";

        // Add tabmenu-active ClassName
        event.currentTarget.className += ' tabmenu-active';

        // Update Graph contents Information
        // console.log(event.currentTarget.children[0].textContent);
        for(let i = 0; i < tabMenuInformation.length; i++){
            if(event.currentTarget.children[0].textContent === tabMenuInformation[i].title){
                // console.log(tabMenuInformation[i].contents);
                setGraphContent(tabMenuInformation[i].contents)
            }

        }
       
        
    }


    return <section className="adminPage-col card">
        <div className="card-header">
            <h4>{header}</h4>
        </div>
        <div className="admin-tab-card-body">
            <div className="admin-tab">
                {tabMenuInformation.map((tabMenu, index) => {
                    return(
                        /* ternary operator to check if the index is first, then add tabmenu-active class */
                        index===0 ? <button key={index} className="admin-tablinks tabmenu-active" onClick={amdinTabMenuClick}>
                        <div className="admin-tablinks-title">{tabMenu.title}</div>
                        {/* ternary operator to check Unit, ex) $  */}
                        {tabMenu.secondRowUnit ? <div className="admin-tablinks-price">{tabMenu.secondRowUnit+NumberComma(tabMenu.secondRow)}</div>:
                        <div className="admin-tablinks-price">{tabMenu.secondRow}</div>}</button> 
                        : <button key={index} className="admin-tablinks" onClick={amdinTabMenuClick}> <div className="admin-tablinks-title">{tabMenu.title}</div>
                        {tabMenu.secondRowUnit ? <div className="admin-tablinks-price">{tabMenu.secondRowUnit+NumberComma(tabMenu.secondRow)}</div>:
                        <div className="admin-tablinks-price">{tabMenu.secondRow}</div>}</button>
                    )
                })}
            </div>
            <div className="admin-tab-body">
                {
                    tabMenuInformation.map((tabMenu, index) => {
                        return (<div key={index} id={`${tabMenu.title.split(" ").join("-").toLowerCase()}-content`} className="tabcontent">
                                    {tabMenu.contentsTopMenu}
                                </div>
                        )
                    })
                }
                {/* Add Graph for Content console.log(tabMenuInformation) */ }
                <SalesGraph months={graphContent.months} yAxis={graphContent.yAxis} yAixsTickprefix={graphContent.yAixsTickprefix} />
            </div>
        </div>
    </section>
    
}

export default TabMenu;