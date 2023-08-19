import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar.js";
import Textform from "./components/Textform.js";
import About from "./components/About.js";
import { useState } from "react";
import Alert from "./components/Alert.js";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  const [Mode, setMode] = useState("light"); //whether dark mode enabled or not

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042745";
      showAlert("Dark mode has been Enabled", "success");
      document.title = "Textutils-Dark Mode";

      // setInterval(()=>{
      //   document.title="Textutils-Dark Mode";
      // },1000)
      // setInterval(()=>{
      //   document.title="Textutils is Amazing";
      // },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");

      document.title = "Textutils-Light  Mode";
    }
  };
  return (
    <>
    <Router>
      <NavBar
        title="TextUtils"
        mode={Mode}
        toggleMode={toggleMode}
        about="About me"
      ></NavBar>

      <Alert alert={alert}></Alert>

      <div className="container">
      <Routes>
          <Route path="/about" element={<About/>}/>
         
          <Route path="/" element={<Textform showAlert={showAlert}   mode={Mode} heading="Enter the text to Anylaze"></Textform>}/>
        
      </Routes> 
       {/* <About></About>
       {/* <Textform showAlert={showAlert}   mode={Mode} heading="Enter the text to Anylaze"></Textform> */}
        
      </div>
      </Router>
    </>
  );
}

export default App;
