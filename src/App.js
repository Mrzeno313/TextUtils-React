import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

// Dark mode
  const [mode, setMode] = useState('light');
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }

// Alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
     setAlert({
      msg: message,
      type:type
     })
     setTimeout(() => {
      setAlert(null); 
     },1000
     );
  }


  return (
    <>
    {/* <Router> */}

    <Navbar title="TextUtils" mode={mode} toggleMode ={toggleMode}></Navbar>

    <Alert alert={alert} />

        <div className="container my-3">

        <Textform  showAlert={showAlert} heading="Enter the text" mode={mode} />

            {/* <Routes>
                  <Route path="/about" element={<About/>} />
                  <Route path="/" element={} />
            </Routes> */}
            
        </div>

    {/* </Router> */}
    </>
  );
}

export default App;
