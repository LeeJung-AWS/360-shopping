import AdminNav from '../components/AdminNav';
import Tabmenu from '../components/TabMenu';
import ContentsTopMenu from '../components/TabMenu/ContentsTopMenu';
import SalesGraph from '../components/SalesGraph';

const AdminPage: React.FC = () => {

    const tablinksButton = [
        { 
            title: 'REVENUE',
            secondRow: 23400,
            secondRowUnit: '$',
            contentsTopMenu: <ContentsTopMenu title={'Revenue'} />,
            contents: <SalesGraph />,
        },
        { 
            title: 'UNITS SOLD',
            secondRow: 74,
            contentsTopMenu: <ContentsTopMenu title={'Units Sold'} />,
            contents: <SalesGraph />,

        },
        { 
            title: 'ORDERS',
            secondRow: 47,
            contentsTopMenu: <ContentsTopMenu title={'Orders'} />,
            contents: <SalesGraph />,
        },
        { 
            title: 'AOV',
            secondRow: 350,
            secondRowUnit: '$',
            contentsTopMenu: <ContentsTopMenu title={'Average Order Value'} />,
            contents: <SalesGraph />,
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