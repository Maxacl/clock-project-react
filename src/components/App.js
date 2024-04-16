import React, {useState} from "react";

function App() {

  let now = new Date().toLocaleTimeString(); //create the initial time object that will set the initial "state"
  let [time, setTime] = useState(now); // "time" gets the "now" variables value


  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
    
  setInterval(updateTime, 1000);

  return ( 
    <div className="container">
      <h1>{time}</h1>
      <button>What Time Is It?  </button>
    </div>
  );
}

export default App;
