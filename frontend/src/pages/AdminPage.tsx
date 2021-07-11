import AdminNav from '../components/AdminNav';
import Tabmenu from '../components/TabMenu';
import TabMenuBody from '../components/TabMenu/TabMenuBody';
import SalesGraph from '../components/SalesGraph';

const AdminPage: React.FC = () => {

    const tablinksButton = [
        { 
            title: 'REVENUE',
            secondRow: 23400,
            contents: <SalesGraph />,
            contentBody: <TabMenuBody />
        },
        { 
            title: 'UNITS SOLD',
            secondRow: 74,
            contents: <SalesGraph />,
            // contentBody: contentsHTML

        },
        { 
            title: 'ORDERS',
            secondRow: 47,
            contents: <SalesGraph />,
            // contentBody: contentsHTML
        },
        { 
            title: 'AOV',
            secondRow: 350,
            contents: <SalesGraph />,
            // contentBody: contentsHTML
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