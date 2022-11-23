import React from 'react'

function CpgaSum({cpgaSum, isChecked}) {
  return (
    <div>
        {(() =>{
            if (isChecked === false) {
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
            }
            else{
                if (cpgaSum.toFixed(2) <= 4.00 && cpgaSum.toFixed(2) >= 3.50) {
                    return(
                        <h3> 1st Class Honours</h3>
                      )
                }
                else if(cpgaSum.toFixed(2) <= 3.50 && cpgaSum.toFixed(2) >= 3.00){
                    return(
                      <h3> 2nd Class Upper</h3>
                    )
                  }
                  else if(cpgaSum.toFixed(2) <= 2.99 && cpgaSum.toFixed(2) >= 2.00){
                    return(
                      <h3> 2nd Class Lower</h3>
                    )
                  }
                  else if(cpgaSum.toFixed(2) <= 1.99 && cpgaSum.toFixed(2) >= 1.00){
                    return(
                      <h3> 3rd Class</h3>
                    )
                  }
                  
            }
              
            })()}
    </div>
  )
}

export default CpgaSum