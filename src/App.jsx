// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import LoginFormData from './Component/LoginFormData'
// import Uncontrolledcomponent from './Component/Uncontrolledcomponent'
// import Homepage from './Component/Homepage'
// import About from './Component/About'
// import Contact from './Component/Contact'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import ReactListKeyExample from './Component/ReactListKeyExample'

// import Adding from "./Component/Adding.jsx"

// import Toggle from "./Component/Toggle.jsx"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <LoginFormData/> */}
//        {/* <Uncontrolledcomponent/>  */}
//      {/* <BrowserRouter>
//      <Routes>
//       <Route path="/Homepage" element={<Homepage/>}/>
//       <Route path="/contact" element={<Contact/>}/>
//       <Route path="/About" element={<About/>}/>
//      </Routes>
//      </BrowserRouter> */}
//      <ReactListKeyExample/>
     
  
//     </>
  
//   )
// }

// export default App


// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Homepage from "./Component/Homepage"

// function App(){
//   return (
//    <BrowserRouter>
//    <Routes>
//     <Route path="/" element={<Homepage/>} />
//    </Routes>
//    </BrowserRouter>   
//   )
// }
// export default App

// import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'

// import ComponentDidMountMethod from './Component/LieCycleDidMount'
// import Array from './Component/Array'
// import Cool from './Component/Cool'
// import Count from './Component/Count'
// import Counter from './Component/Counter'
// import LifecycleComponentDidUpdate from './Component/LifecycleComponentDidUpdate'
// import Name from './Component/Name'
// import Nameform from './Component/Nameform'
// import Nameformone from './Component/Nameformone'
// import Counters from './Component/Counters'
// import Counting from './Component/Counting'

// import { Regform } from './Component/Regform'
// import UserForm from './Component/Userform'

import Adding from "./Component/Adding.jsx"
import Character from "./Component/Character.jsx"

import Parentone from "./Component/Parentone.jsx"
import Parent from "./Component/Parent.jsx"
import Submit from "./Component/Submit.jsx"
import Sum from "./Component/Sum.jsx"
import Count from "./Component/Count.jsx"
import Counting from "./Component/Counting.jsx"


    







function App(){
  return (
    <>
    
    {/* <BrowserRouter>
      <Link to="/" >Home</Link> 
      <Link to="/About">About</Link>
      <Link to="Contact">Contact</Link>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>s
    </BrowserRouter> */}
    {/* <Regform/> */}
    {/* <ComponentDidMountMethod/> */}
    {/* <Cool/> */}
    {/* <Array/> */}
    {/* <Count/> */}
     {/* <LifecycleComponentDidUpdate/> */}
     {/* <Nameform/> */}
    {/* <Nameformone/> */}
    {/* <Counter/> */}
    {/* <Count/> */}
    {/* <Name/> */}
    {/* <UserForm/> */}
    {/* <Counters/> */}
    {/* <Counting/> */}
    {/* <Toggle/> */}
    {/* <Adding/> */}
    {/* <Character/> */}
     {/* <Submit/>  */}
    
    
    {/* <Parentone/> */}
    <Sum/> 
    {/* <Parent/>  */}
  </>
  )
}
function Home(){
 return <h1>This is my Homepage</h1>

}

function About(){
  return <h1>This is my About page</h1>
}

function Contact(){
  return <h1>This is my Contact page</h1>
}
export default App


