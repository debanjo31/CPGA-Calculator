import React from 'react'
import Grade from '../component/Grade'
import { useState, useEffect} from 'react'
import AddCourse from '../component/AddCourse';



function Body() {
  
    const [count, setCount] = useState([1, 2, 3, 4, 5]);
    const [unit, setunit] = useState([])
    const [point, setpoint] = useState([])
    const [cpgaSum, setcpgaSum] = useState(0)
    const addChild = () =>{
      const updatedCCount = [...count, count.length + 1]
      if(updatedCCount.length <= 15){
        setCount(updatedCCount)
      }
    }

   let unitSum = 0;
   let pointSum = 0;
   
     for (let index = 0; index < unit.length; index++) {
      let changedUnit = parseInt( unit[index])
       unitSum = unitSum + changedUnit;
       pointSum += point[index];
     }

   
     useEffect(() => {
        setcpgaSum(pointSum / unitSum)
     }, [point])
     
  return (
    <div className='body'>
        <div className="gpa">
          { count.map((index)=>{
            return (
              <form key={count[index - 1]}>
                  <Grade setpoint={setpoint} setunit={setunit}/>
              </form>
            )
           })
          }          
     <AddCourse setCount={addChild} /> 

        </div>
        <div className="grades">
            <h3>Total Course Unit : {unitSum } </h3>
            <h3>Grade Point : {pointSum} </h3>
            <h3>CPGA : {cpgaSum.toFixed(2)}</h3>
            {(() =>{
              if(cpgaSum.toFixed(2) <= 5 && cpgaSum.toFixed(2) >= 4.50 ){
                return(
                  <h3> 1st Class Honours</h3>
                )
              }
              else if(cpgaSum.toFixed(2) <= 4.99 && cpgaSum.toFixed(2) >= 3.50){
                return(
                  <h3> 2nd Class Upper</h3>
                )
              }
              else if(cpgaSum.toFixed(2) <= 3.49 && cpgaSum.toFixed(2) >= 2.40){
                return(
                  <h3> 2nd Class Lower</h3>
                )
              }
              else if(cpgaSum.toFixed(2) <= 2.39 && cpgaSum.toFixed(2) >= 1.50){
                return(
                  <h3> 3rd Class</h3>
                )
              }
            })()}
        </div>
    </div>
  )
 
}

export default Body