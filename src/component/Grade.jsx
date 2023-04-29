import React, { useState, useRef } from "react";

function Grade({ setunit, setpoint }) {
  const unitRef = useRef(null);
  const [grade, setgrade] = useState("");
  const [inputUnit, setinputUnit] = useState("");

  const gradeScore = (num) => {
    if (num === "") {
      setgrade("");
    } else if (num >= 0 && num < 40) {
      setgrade("F");
    } else if (num >= 40 && num < 45) {
      setgrade("E");
    } else if (num >= 45 && num < 50) {
      setgrade("D");
    } else if (num >= 50 && num < 60) {
      setgrade("C");
    } else if (num > 59 && num < 70) {
      setgrade("B");
    } else if (num > 69 && num <= 100) {
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
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
  F: 0,
};

export default Grade;
