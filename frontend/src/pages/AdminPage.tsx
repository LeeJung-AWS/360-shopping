// import { useState } from 'react';

import AdminNav from '../components/AdminNav';

const AdminPage: React.FC = () => {

    return <>
        <AdminNav />
        <section className="adminPage-row">
            <h4>Sales</h4>
        </section>
        <section className="adminPage-row">
            <div className="adminPage-col">
                <h4>Awaiting Shipments</h4>
            </div>
            <div className="adminPage-col">
                <h4>Messages</h4>
            </div>
        </section>

        </>
}

export default AdminPage;