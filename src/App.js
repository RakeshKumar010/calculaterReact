import React, { useState } from 'react'
import './App.css'
import BackspaceIcon from '@mui/icons-material/Backspace';
const App = () => {
    const[val,setVal]=useState("");
    const[result,setResult]=useState();
    const[col,setCol]=useState();

    function changeFun(e){
        setVal(val.concat(e.target.name))
    }
    const clearFun = ()=>{
        setVal("")
        setResult("")
    }
    const resultFun=()=>{
 
        setResult(eval(val))
    }
    const backSpaceFun =()=>{
    
        setVal(val.substring(0,val.length-1))
        
    }
    const color1Fun=()=>{
        setCol({background: "radial-gradient(circle, rgb(255, 0, 111) 0%, rgba(148,187,233,1) 100%)"});
     
    }
    const color2Fun=()=>{
        setCol({background: "radial-gradient(circle, rgb(114, 34, 134) 0%, rgb(26, 23, 190) 100%)"});
     
    }
    const color3Fun=()=>{
        setCol({background: "radial-gradient(circle, rgb(0, 140, 255) 0%, rgb(88, 53, 104) 100%)"});
     
    }
    const color4Fun=()=>{
        setCol({background: "radial-gradient(circle, rgb(0, 25, 0) 0%, rgb(26, 23, 190) 100%)"});
     
    }
    const color5Fun=()=>{
        setCol({background: "radial-gradient(circle, rgb(65, 64, 19) 0%, rgb(89, 187, 97) 100%)"});
     
    }

    
  return (
   <>
        <div className="main">
           
            <div className="calculater">
                <div className="blank">
                    
                    <h1>{val} </h1>
                    <h4> {result} </h4>
                    
                    
                </div>
                <button name='1' onClick={changeFun}>1</button>
                <button name='2' onClick={changeFun}>2</button>
                <button name='3' onClick={changeFun}>3</button>
                <button name='+' onClick={changeFun} className="result rotate-center" style={col}>+</button>
                <button name='4' onClick={changeFun}>4</button>
                <button name='5' onClick={changeFun}>5</button>
                <button name='6' onClick={changeFun}>6</button>
                <button name='-' onClick={changeFun} className="result rotate-center" style={col}>−</button>
                <button name='7' onClick={changeFun}>7</button>
                <button name='8' onClick={changeFun}>8</button>
                <button name='9' onClick={changeFun}>9</button>
                <button name='*' onClick={changeFun} className="result rotate-center" style={col}>×</button>
                <button name='•' onClick={changeFun} >•</button>
                <button name='0' onClick={changeFun}>0</button>
                <button name='=' onClick={resultFun} className="result rotate-center" style={col}>=</button>
                <button name='/' onClick={changeFun} className="result rotate-center" style={col}>÷</button>
                <button className='clear rotate-center' onClick={clearFun} style={col}>Clear</button>
                <button className='backSpace rotate-center' onClick={backSpaceFun} style={col}><BackspaceIcon/></button>
            </div>
            <div className="colorPicker">
                <div className="color color1" onClick={color1Fun}></div>
                <div className="color color2" onClick={color2Fun}></div>
                <div className="color color3" onClick={color3Fun}></div>
                <div className="color color4" onClick={color4Fun}></div>
                <div className="color color5" onClick={color5Fun}></div>
            </div>
        </div>
   </>
   
  )
}

export default App