// Style : sass/layout/_adminpage.scss

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import AdminNav from '../components/AdminNav';
import Tabmenu from '../components/TabMenu';
import ContentsTopMenu from '../components/TabMenu/ContentsTopMenu';
import Inventory from '../components/Inventory';
// import AddNewProduct from "../components/AddNewProduct";

const AdminPage: React.FC = () => {
     // Dummy Graph Data
     // TODO: retrieve data (DataType : Objects inside Array) for analyzing graph from DB
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
    const dateRange = 'Jan 01 ~ Dec 31, 2021';

    // AdminTab menu data
    // TODO: Calculating secondRow ( Total amount depending on the range Date)
    const tabMenuInformation = [
        { 
            title: 'REVENUE',
            secondRow: 23400,
            secondRowUnit: '$',
            contentsTopMenu: <ContentsTopMenu title={'Revenue'} rangeDate={dateRange} secondRowUnit={'$'} secondRow={23400} />,
            contents: revenueContents,
        },
        { 
            title: 'UNITS SOLD',
            secondRow: 74,
            contentsTopMenu: <ContentsTopMenu title={'Units Sold'} rangeDate={dateRange} secondRow={74}/>,
            contents: unitSoldContents,

        },
        { 
            title: 'ORDERS',
            secondRow: 47,
            contentsTopMenu: <ContentsTopMenu title={'Orders'} rangeDate={dateRange} secondRow={47} />,
            contents: ordersContents,
        },
        { 
            title: 'AOV',
            secondRow: 350,
            secondRowUnit: '$',
            contentsTopMenu: <ContentsTopMenu title={'Average Order Value'} rangeDate={dateRange} secondRowUnit={'$'} secondRow={350} />,
            contents: aovContents,
        }
    ]

    return <Router>
            <AdminNav />
            <Switch>
                <Route exact path="/adminPage">
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
                </Route>
                <Route exact path="/adminPage/marketing">
                    <p>Marketing Page</p>
                </Route>
                <Route exact path="/adminPage/inventory">
                    {/* <AddNewProduct /> */}
                    <Inventory />
                </Route>
                <Route exact path="/adminPage/orderHistory">
                    <p>orderHistory Page</p>
                </Route>
                <Route exact path="/adminPage/messages">
                    <p>messages Page</p>
                </Route>
                <Route exact path="/adminPage/printReports">
                    <p>printReports Page</p>
                </Route>
            </Switch>
        </Router>
}

export default AdminPage;