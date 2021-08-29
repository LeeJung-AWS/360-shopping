import { useState, useEffect } from 'react';

import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';

function App() {
  const [ adminPage, setAdminPage ] = useState<boolean>(false);

  useEffect(() => {
    let temp = localStorage.getItem('isAdminPage');
    // console.log(temp === "true");
    setAdminPage(temp === "true")
  }, [])

  function setAdminPageState() {
    if(adminPage){
      setAdminPage(false)
      localStorage.setItem('isAdminPage', 'false');
    }else{
      setAdminPage(true)
      localStorage.setItem('isAdminPage', 'true');
    }
  }

  return (<>
    {adminPage ? <AdminPage setAdminPageState={setAdminPageState} /> : <HomePage setAdminPageState={setAdminPageState} /> }
  </>);
}

export default App;
