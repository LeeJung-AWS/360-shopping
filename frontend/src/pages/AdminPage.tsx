// import { useState } from 'react';

import AdminNav from '../components/AdminNav';

const AdminPage: React.FC = () => {
    const amdinTabMenuClick = (event: any) => {
        // The exclamation mark means a developer knows there is a button element.( The value is not null )
        const adminTablinks = document.querySelectorAll('.admin-tablinks')!;
        const tabcontent = document.getElementsByClassName("tabcontent") as HTMLCollectionOf<HTMLElement>;

        // console.log(tabcontent);
        // All contents none-display
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Remove tabmenu-active ClassName
        for (let i = 0; i < adminTablinks.length; i++) {
            adminTablinks[i].className = adminTablinks[i].className.replace(" tabmenu-active", "");
          }
        
        // Checking the tab and Create ID for content
        // console.log(event.currentTarget.textContent.toLowerCase().replace(" ","-") + "-content");
        const seletedContentId = event.currentTarget.textContent.toLowerCase().replace(" ","-") + "-content";

        // Display seletedContent
        const seletedContent = document.getElementById(`${seletedContentId}`)!;
        seletedContent.style.display = "block";

        // Add tabmenu-active ClassName
        event.currentTarget.className += ' tabmenu-active';

    }


    return <>
        <AdminNav />
        <main className="adminPage-row">
            <section className="adminPage-col card">
                <div className="card-header">
                    <h4>Sales</h4>
                </div>
                <div className="admin-tab-card-body">
                    <div className="admin-tab">
                        <button className="admin-tablinks tabmenu-active" onClick={amdinTabMenuClick}>REVENUE</button>
                        <button className="admin-tablinks" onClick={amdinTabMenuClick}>UNITS SOLD</button>
                        <button className="admin-tablinks" onClick={amdinTabMenuClick}>ORDERS</button>
                        <button className="admin-tablinks" onClick={amdinTabMenuClick}>AOV</button>
                    </div>
                    <div className="admin-tab-body">
                        <div id="revenue-content" className="tabcontent">
                            <p>Revenue Graph</p>
                            <p>Revenue Graph</p>
                            <p>Revenue Graph</p>
                        </div>
                        <div id="units-sold-content" className="tabcontent">
                            <p>Units Sold Graph</p>
                        </div>
                        <div id="orders-content" className="tabcontent">
                            <p>Orders Graph</p>
                        </div>
                        <div id="aov-content" className="tabcontent">
                            <p>AOV Graph</p>
                        </div>
                    </div>
                    {/* <p>Graph</p>
                    <p>Graph</p>
                    <p>Graph</p>
                    <p>Graph</p> */}
                </div>
            </section>
            <section className="adminPage-col card">
                <div className="card-header">
                    <h4>Awaiting Shipments</h4>
                </div>
                <div className="card-body">
                    <p>Shipments information</p>
                </div>
            </section>
            <section className="adminPage-col card">
                <div className="card-header">
                    <h4>Messages</h4>
                </div>
                <div className="card-body">
                    <p>Messages</p>
                    <p>Messages</p>
                    <p>Messages</p>
                </div>
            </section>
        </main>

        </>
}

export default AdminPage;