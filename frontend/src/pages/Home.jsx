import React ,{useState}from 'react'
import Navigations from '../components/Sidebar/Navigations'
import './pages.css'
import Dashboard from '../components/Dashboard/Dashboard'
import Incomes from '../components/Income/Incomes'
import Expenses from '../components/Expenses/Expenses'
import { useGlobalContext } from '../context/GlobalContext'

const Home = () => {

  const [active, setActive] = React.useState(1);
 
    const global = useGlobalContext();
    console.log(global);
  const displaydata = () => {
    switch (active) {
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Incomes/>
      case 4:
        return <Expenses/>
    
      default:
        return <Dashboard/>
    }

  }


  return (
    <div className="home">
    <div className="container">
        <Navigations  active={active} setActive={setActive}/>
       <main>
    
     {displaydata()}
          
       </main>
        
    </div>
    </div>
    
  )
}

export default Home
