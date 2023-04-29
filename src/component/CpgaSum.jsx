import React from "react";

function CpgaSum({ cpgaSum, isChecked }) {
  return (
    <div className="CpgaSum">
      {(() => {
        if (isChecked === false) {
          if (cpgaSum.toFixed(2) <= 5 && cpgaSum.toFixed(2) >= 4.5) {
            return <h3> 1st Class Honours</h3>;
          } else if (cpgaSum.toFixed(2) <= 4.99 && cpgaSum.toFixed(2) >= 3.5) {
            return <h3> 2nd Class Upper</h3>;
          } else if (cpgaSum.toFixed(2) <= 3.49 && cpgaSum.toFixed(2) >= 2.4) {
            return <h3> 2nd Class Lower</h3>;
          } else if (cpgaSum.toFixed(2) <= 2.39 && cpgaSum.toFixed(2) >= 1.5) {
            return <h3> 3rd Class</h3>;
          } else if (cpgaSum.toFixed(2) <= 1.49 && cpgaSum.toFixed(2) > 0) {
            return <h3> Fail</h3>;
          }
        } else {
          if (cpgaSum.toFixed(2) <= 4.0 && cpgaSum.toFixed(2) >= 3.5) {
            return <h3>Distinction</h3>;
          } else if (cpgaSum.toFixed(2) <= 3.49 && cpgaSum.toFixed(2) >= 3.0) {
            return <h3> Upper Credit</h3>;
          } else if (cpgaSum.toFixed(2) <= 2.99 && cpgaSum.toFixed(2) >= 2.5) {
            return <h3>Lower Credit</h3>;
          } else if (cpgaSum.toFixed(2) <= 2.49 && cpgaSum.toFixed(2) >= 2.0) {
            return <h3>Pass</h3>;
          } else if (cpgaSum.toFixed(2) <= 1.99 && cpgaSum.toFixed(2) > 0) {
            return <h3>Fail</h3>;
          }
        }
      })()}
    </div>
  );
}

export default CpgaSum;
