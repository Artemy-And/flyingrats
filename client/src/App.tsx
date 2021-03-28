import "destyle.css";
import React from "react";

const App: React.FC = () => {
  let array = ['']
  return (
      <div className='container'>
        <div className='mainInfo'>
          <b><label htmlFor="rats">Select rat: </label></b>
          <select
              className='select'
              name="rats"
              id='rats'
          >
            {array.map((e: any, index: any) => {
              return (
                  <option
                      value={e}
                      key={index}
                  > {e}</option>
              )
            })}
          </select>
        </div>
        <div className='additionalInfo'>
          <div className='info'>
            <p><b>Width</b></p>
            <p><b>Height</b></p>
            <p><b>Nickname</b></p>
          </div>
        </div>
      </div>
  )
};

export default App;
