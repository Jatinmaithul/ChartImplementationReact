import React from "react";
import BarChart from "./components/BarChart";
import './App.css';
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart"; 
import RadarChart from "./components/RadarChart";

const App = () =>{
  return <div>
    <BarChart />
    <LineChart/>
    <PieChart/>
    <RadarChart/>
  </div>
}

export default App;
