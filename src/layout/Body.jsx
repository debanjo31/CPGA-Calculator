import React from 'react'
import Grade from '../component/Grade'
import { useState, useEffect} from 'react'
import AddCourse from '../component/AddCourse';
import ToggleGrade from '../component/ToggleGrade';
import FourPointGrade from '../component/FourPointGrade';
import CpgaSum from '../component/CpgaSum';



function Body() {
  
    const [count, setCount] = useState([1, 2, 3, 4, 5]);
    const [unit, setunit] = useState([])
    const [point, setpoint] = useState([])
    const [cpgaSum, setcpgaSum] = useState(0)
    const [isChecked, setisChecked] = useState(false)
    const addChild = () =>{
      const updatedCCount = [...count, count.length + 1]
      if(updatedCCount.length <= 15){
        setCount(updatedCCount)
      }
    }

    const [totalUnit, settotalUnit] = useState(0)
    const [totalPoint, settotalPoint] = useState(0)
    useEffect(() => {
      const unitSum = unit.reduce((old, newOne) => old + newOne, 0
          )
      settotalUnit(unitSum)
    }, [unit])

    useEffect(() => {
      const pointSum = point.reduce((old, newOne) => old + newOne, 0
      )
      settotalPoint(pointSum)
    }, [point])

    useEffect(() =>{
        console.log(totalPoint, totalUnit)
        const gpa = totalPoint / totalUnit;
        setcpgaSum(gpa)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalPoint])
    
     
  return (
    <div className='body'>
        <ToggleGrade setisChecked={setisChecked} setpoint={setpoint} setunit={setunit}/>
        <div className="gpa">
          {(() => {
            if (isChecked === false) {
              return(
                count.map((index)=>{
                  return (
                    <form key={count[index - 1]}>
                        <Grade setpoint={setpoint} setunit={setunit}/>
                    </form>
                  )
                 })
              )     
            }
            else{
              return(
                count.map((index)=>{
                  return (
                    <form key={count[index - 1]}>
                        <FourPointGrade  setpoint={setpoint} setunit={setunit} />
                    </form>
                  )
                 })
              )
            }
          })()}
              
     <AddCourse setCount={addChild} /> 

        </div>
        <div className="grades">
            <h3>Total Course Unit : {totalUnit} </h3>
            <h3>Grade Point : {totalPoint} </h3>
            <h3>CPGA : {cpgaSum.toFixed(2)}</h3>
            <CpgaSum cpgaSum={cpgaSum} isChecked={isChecked}/>
        </div>
        
    </div>
  )
 
}

export default Body