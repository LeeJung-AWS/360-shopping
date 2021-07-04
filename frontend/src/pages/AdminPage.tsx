// import { useState } from 'react';

import AdminNav from '../components/AdminNav';

const AdminPage: React.FC = () => {
    const amdinTabMenuClick = () => {
        // The exclamation mark means a developer knows there is a button element.( The value is not null )
        const adminTablinks = document.querySelectorAll('.admin-tablinks')!;
        console.log(this);
        console.log(adminTablinks);

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
                        <button className="admin-tablinks" autoFocus onClick={amdinTabMenuClick}>REVENUE</button>
                        <button className="admin-tablinks" onClick={amdinTabMenuClick}>UNITS SOLD</button>
                        <button className="admin-tablinks" onClick={amdinTabMenuClick}>ORDERS</button>
                        <button className="admin-tablinks" onClick={amdinTabMenuClick}>AOV</button>
                    </div>
                    <div className="admin-tab-body">
                        <div id="revenue-tab" className="tabcontent">
                            <p>Revenue Graph</p>
                            <p>Revenue Graph</p>
                            <p>Revenue Graph</p>
                            {/* <p>Revenue Graph</p>
                            <p>Revenue Graph</p>
                            <p>Revenue Graph</p>
                            <p>Revenue Graph</p>
                            <p>Revenue Graph</p> */}
                        </div>
                        <div id="units-sold-tab" className="tabcontent">
                            <p>Units Sold Graph</p>
                        </div>
                        <div id="orders-tab" className="tabcontent">
                            <p>Orders Graph</p>
                        </div>
                        <div id="aov-tab" className="tabcontent">
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