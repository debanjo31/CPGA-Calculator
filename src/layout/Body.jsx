import React, { useState, useEffect } from "react";
import Grade from "../component/Grade";
import AddCourse from "../component/AddCourse";
import ToggleGrade from "../component/ToggleGrade";
import FourPointGrade from "../component/FourPointGrade";
import CpgaSum from "../component/CpgaSum";

function Body() {
  const [count, setCount] = useState([1, 2, 3, 4, 5]);
  const [unit, setunit] = useState([]);
  const [point, setpoint] = useState([]);
  const [cpgaSum, setcpgaSum] = useState(0);
  const [isChecked, setisChecked] = useState(false);
  const [calculateClicked, setCalculateClicked] = useState(false);
  const [totalUnit, settotalUnit] = useState(0);
  const [totalPoint, settotalPoint] = useState(0);

  useEffect(() => {
    settotalUnit(0);
    settotalPoint(0);
    setcpgaSum(0);
  }, [isChecked]);

  const addChild = () => {
    const updatedCCount = [...count, count.length + 1];
    if (updatedCCount.length <= 15) {
      setCount(updatedCCount);
    }
  };

  const calcualate = () => {
    console.log(unit, point);
    const unitSum = unit.reduce((old, newOne) => old + newOne, 0);
    settotalUnit(unitSum);
    const pointSum = point.reduce((old, newOne) => old + newOne, 0);
    settotalPoint(pointSum);
    const gpa = pointSum / unitSum;
    setcpgaSum(gpa);
    setCalculateClicked(true);
  };

  return (
    <div className="body">
      <ToggleGrade
        setisChecked={setisChecked}
        setpoint={setpoint}
        setunit={setunit}
      />
      <div className="gpa">
        {count.map((index) => (
          <form key={count[index - 1]}>
            {isChecked ? (
              <FourPointGrade setpoint={setpoint} setunit={setunit} />
            ) : (
              <Grade
                setpoint={setpoint}
                setunit={setunit}
                calculateClicked={calculateClicked}
              />
            )}
          </form>
        ))}
      </div>
      <div className="flex">
        <button className="calculate" onClick={calcualate}>
          Calculate
        </button>
        <AddCourse setCount={addChild} />
      </div>
      <div className="grades">
        <h3>Total Course Unit : {totalUnit} </h3>
        <h3>Grade Point : {totalPoint} </h3>
        <h3>CPGA : {cpgaSum.toFixed(2)}</h3>
        <CpgaSum cpgaSum={cpgaSum} isChecked={isChecked} />
      </div>
    </div>
  );
}

export default Body;
