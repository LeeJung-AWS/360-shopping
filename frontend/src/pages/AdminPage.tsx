// import { useState } from 'react';

import AdminNav from '../components/AdminNav';

const AdminPage: React.FC = () => {

    return <>
        <AdminNav />
        <main className="adminPage-row">
            <section className="adminPage-col card">
                <div className="card-header">
                    <h4>Sales</h4>
                </div>
                <div className="card-body">
                    <p>Tab Button</p>
                    <p>Graph</p>
                    <p>Graph</p>
                    <p>Graph</p>
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