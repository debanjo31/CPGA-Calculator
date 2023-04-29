import React from "react";

function ToggleGrade({ setisChecked, setunit, setpoint }) {
  const handleChange = (e) => {
    if (e.target.checked) {
      setisChecked(true);
      setunit([]);
      setpoint([]);
    } else {
      setisChecked(false);
      setunit([]);
      setpoint([]);
    }
  };
  return (
    <div className="toggleGrade">
      <label htmlFor="checkbox" className="changeGrade">
        <span className="fivepoint">5 point</span>
        <input
          type="checkbox"
          onChange={handleChange}
          name="checkbox"
          id="checkbox"
        />
        <div className="slider round"></div>
        <span className="4point">4 point</span>
      </label>
    </div>
  );
}

export default ToggleGrade;
