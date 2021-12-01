import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import useWindowDimensions from './WindowDim';
import { useState } from 'react';
import { useEffect } from 'react';
import { baseurl } from './constants';
const App = () =>  {
  const getCtr = () => {
    fetch(baseurl+"get")
    .then(resp => {
      if(resp.ok)
        return resp.json();
      else
        throw new Error("Some error");
    })
    .then(data => {
      setCtr(data);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  const inc = () => {
    setCtr("Loading");
    fetch(baseurl+"inc")
    .then(resp => {
      if(resp.ok)
        getCtr();
      else
        throw new Error("Some error");
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
  const dec = () => {
    setCtr("Loading");
    fetch(baseurl+"dec")
    .then(resp => {
      if(resp.ok)
        getCtr();
      else
        throw new Error("Some error");
    })
    .catch(err=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    getCtr();
  });
  const ratio = Math.floor(useWindowDimensions())>0?1:0;
  const [ctr, setCtr] = useState("Loading");
  return (
    <div className="App">
      <button onClick={inc}>+</button>
      {ctr}
      <button onClick={dec}>-</button>
    </div>
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/budget-finder">
    //         {ratio===1?<MobileView2/>:<DesktopView2/>}
    //       </Route>
    //       <Route path="/">
    //         {ratio===1?<MobileView1/>:<DesktopView1/>}
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
