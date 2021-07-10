import AdminNav from '../components/AdminNav';
import Tabmenu from '../components/TabMenu';
import SalesGraph from '../components/SalesGraph';

const AdminPage: React.FC = () => {

    const revenuContent = () => {
        return (<div className="row">
        <div className="tabcontent-title">
            <div>
                <div>Revenue</div>
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
        <div>
            <SalesGraph />
        </div>
    </div>)
    }

    const tablinksButton = [
        { 
            title: 'REVENUE',
            secondRow: 23400,
            contents: <SalesGraph />
        },
        { 
            title: 'UNITS SOLD',
            secondRow: 74,
            contents: <SalesGraph />
        },
        { 
            title: 'ORDERS',
            secondRow: 47,
            contents: <SalesGraph />
        },
        { 
            title: 'AOV',
            secondRow: 350,
            contents: <SalesGraph />
        }
    ]

    return <>
        <AdminNav />
        
        <main className="adminPage-row">
            <Tabmenu header="Sales" tablinksButton={tablinksButton}/>

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