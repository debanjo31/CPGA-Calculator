import React, {useState, useRef} from 'react'

function Grade({setunit, setpoint}) {

    const unitRef = useRef(null);
    const [grade, setgrade] = useState('');
    const [coursePoint, setcoursePoint] = useState('');
    const pointRef = useRef(null)
    let check = false;
    const checkUnit = () => {
        if (unitRef.current.value === '') {
            unitRef.current.focus()
        }
        else if (!check){
            setunit((array) => [...array, unitRef.current.value])
            check = true;
        }
        
        
    }
  
    const gradeScore = (e) => {
        // alert(unitRef.current.value)
        let num = e.target.value
        if (num >= 0  && num < 40) {
            setgrade('F')
            let point = 0 * unitRef.current.value
            setcoursePoint(point)
        }
        else if (num >= 40  && num < 45){
            setgrade('E')
            let point = 1 * unitRef.current.value
            setcoursePoint(point)
        }
        else if (num >= 45  && num < 50){
            setgrade('D')
            let point = 2 * unitRef.current.value
            setcoursePoint(point)
        }
        else if (num >= 50  && num < 60){
            setgrade('C')
            let point = 3 * unitRef.current.value
            setcoursePoint(point)
        }
        else if (num > 59  && num < 70){
            setgrade('B')
            let point = 4 * unitRef.current.value
            setcoursePoint(point)
        }
        else if (num > 69  && num <= 100){
            setgrade('A')
            let point = 5 * unitRef.current.value
            setcoursePoint(point)
        }
        else{
            setgrade('')
        }
        

        // if (grade === 'A') {
        //     let point = 5 * 6
        //     setcoursePoint(point)
        // } else {
            
        // }
        checkPoint();
    }
    
    const setMaxLenght = (e) =>{
        e.target.value = e.target.value.slice(0, 3)

    }
    const checkPoint = (e) =>{
       setTimeout(() => {
        setpoint((array) => [...array, parseInt(pointRef.current.value)])
       }, 3000);
       
    }


       
  return (
    <div className='gpa-form'>
     
                <input type="text" name="course" placeholder='course name' id="course" />
                <input type="number"name="unit" id="unit" placeholder='unit' onInput={(e) =>  e.target.value = e.target.value.slice(0, 1) }  ref={unitRef}   />
                <input type="number" name="score" min={0} max={100} placeholder='score' onInput={setMaxLenght}   id="score" onClick={checkUnit}  onChange={gradeScore} />
                <input type="text" name="grade" id="grade" value={grade} />
                <input type="number" name='point' id='point' value={coursePoint} ref={pointRef}  />
                
            
    </div>
  )
}



export default Grade