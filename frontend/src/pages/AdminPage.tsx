import AdminNav from '../components/AdminNav';
import Tabmenu from '../components/TabMenu';
import ContentsTopMenu from '../components/TabMenu/ContentsTopMenu';
// import SalesGraph from '../components/SalesGraph';

const AdminPage: React.FC = () => {
     // Dummy Graph Data
    const revenueContents = {
        months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        yAxis: [4500, 1500, 4350, 4510, 1500, 1500, 4550, 3500, 5500, 2500, 3600, 4300],
        yAixsTickprefix: '$'
    }
    const unitSoldContents = {
        months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        yAxis: [45, 15, 43, 45, 15, 15, 45, 35, 55, 25, 36, 43],
        yAixsTickprefix: ''
    }
    const ordersContents = {
        months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        yAxis: [35, 20, 35, 35, 7, 6, 35, 23, 47, 18, 32, 39],
        yAixsTickprefix: ''
    }
    const aovContents = {
        months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        yAxis: [450, 150, 435, 451, 150, 150, 455, 350, 550, 250, 360, 430],
        yAixsTickprefix: '$'
    }

    const tabMenuInformation = [
        { 
            title: 'REVENUE',
            secondRow: 23400,
            secondRowUnit: '$',
            contentsTopMenu: <ContentsTopMenu title={'Revenue'} rangeDate={'Jan 01 ~ Dec 31, 2021'} secondRowUnit={'$'} secondRow={23400} />,
            contents: revenueContents,
        },
        { 
            title: 'UNITS SOLD',
            secondRow: 74,
            contentsTopMenu: <ContentsTopMenu title={'Units Sold'} rangeDate={'Jan 01 ~ Dec 31, 2021'} secondRow={74}/>,
            contents: unitSoldContents,

        },
        { 
            title: 'ORDERS',
            secondRow: 47,
            contentsTopMenu: <ContentsTopMenu title={'Orders'} rangeDate={'Jan 01 ~ Dec 31, 2021'} secondRow={47} />,
            contents: ordersContents,
        },
        { 
            title: 'AOV',
            secondRow: 350,
            secondRowUnit: '$',
            contentsTopMenu: <ContentsTopMenu title={'Average Order Value'} rangeDate={'Jan 01 ~ Dec 31, 2021'} secondRowUnit={'$'} secondRow={350} />,
            contents: aovContents,
        }
    ]

    return <>
        <AdminNav />
        
        <main className="adminPage-row">
            <Tabmenu header="Sales" tabMenuInformation={tabMenuInformation}/>

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