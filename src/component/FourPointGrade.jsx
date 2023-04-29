import React, { useState, useRef } from "react";

function FourPointGrade({ setunit, setpoint }) {
  const unitRef = useRef(null);
  const [grade, setgrade] = useState("");
  const [inputUnit, setinputUnit] = useState("");

  const gradeScore = (num) => {
    if (num === "") {
      setgrade("");
    } else if (num >= 0 && num < 39) {
      setgrade("E");
    } else if (num >= 40 && num < 49) {
      setgrade("C");
    } else if (num >= 50 && num < 59) {
      setgrade("BC");
    } else if (num >= 60 && num < 69) {
      setgrade("B");
    } else if (num >= 70 && num <= 79) {
      setgrade("AB");
    } else if (num >= 80 && num <= 100) {
      setgrade("A");
    }
  };

  const setMaxLenght = (e) => {
    if (e.target.value.length > 3) {
      e.target.value = e.target.value.slice(0, 3);
    } else if (parseInt(e.target.value) > 100) {
      e.target.value = "100";
    }
  };

  const checkUnit = () => {
    if (unitRef.current.value === "") {
      unitRef.current.focus();
    }
  };

  const handleScoreChange = (e) => {
    gradeScore(e.target.value);
  };

  const handleInputUnitChange = (e) => {
    setinputUnit(e.target.value);
  };

  const handleBlur = () => {
    if (inputUnit !== "") {
      setunit((array) => [...array, parseInt(inputUnit)]);
      setpoint((array) => [
        ...array,
        parseInt(inputUnit) * parseFloat(gradePoints[grade]),
      ]);
      if (grade === "") {
        setinputUnit("");
      }
    }
  };

  return (
    <div className="gpa-form">
      <input type="text" name="course" placeholder="course name" id="course" />
      <input
        type="number"
        name="unit"
        id="unit"
        placeholder="unit"
        onInput={(e) => (e.target.value = e.target.value.slice(0, 1))}
        ref={unitRef}
        value={inputUnit}
        onChange={handleInputUnitChange}
      />
      <input
        type="number"
        name="score"
        min={0}
        max={100}
        placeholder="score"
        onInput={setMaxLenght}
        onBlur={handleBlur}
        id="score"
        onClick={checkUnit}
        onChange={handleScoreChange}
      />
      <input type="text" name="grade" id="grade" value={grade} />
    </div>
  );
}

const gradePoints = {
  A: 4,
  AB: 3.5,
  B: 3,
  BC: 2.5,
  C: 2,
  E: 0,
};

export default FourPointGrade;
