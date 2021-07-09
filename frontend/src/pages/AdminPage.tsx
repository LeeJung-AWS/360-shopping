import AdminNav from '../components/AdminNav';
import SalesGraph from '../components/SalesGraph';

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
        // console.log(event.currentTarget.children[0].textContent.toLowerCase())
        console.log(event.currentTarget.children[0].textContent.toLowerCase().replace(" ","-") + "-content");
        const seletedContentId = event.currentTarget.children[0].textContent.toLowerCase().replace(" ","-") + "-content";

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
                        <button className="admin-tablinks tabmenu-active" onClick={amdinTabMenuClick}>
                            <div className="admin-tablinks-title">REVENUE</div>
                            <div className="admin-tablinks-price">$23.4K</div>
                        </button>
                        <button className="admin-tablinks" onClick={amdinTabMenuClick}>
                            <div className="admin-tablinks-title">UNITS SOLD</div>
                            <div className="admin-tablinks-price">74</div>
                        </button>
                        <button className="admin-tablinks" onClick={amdinTabMenuClick}>
                            <div className="admin-tablinks-title">ORDERS</div>
                            <div className="admin-tablinks-price">47</div>
                        </button>
                        <button className="admin-tablinks" onClick={amdinTabMenuClick}>
                            <div className="admin-tablinks-title">AOV</div>
                            <div className="admin-tablinks-price">$350</div>
                        </button>
                    </div>
                    <div className="admin-tab-body">
                        <div id="revenue-content" className="tabcontent">
                            <div className="row">
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
                            </div>
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