import "destyle.css";
import React, {useEffect, useState} from "react";
import {infoAPI} from "./components/api/api";



const App: React.FC = () => {
    const [array, setArray] = useState(['No Rat'])
    const [stateValue, setStateValue] = useState('No Rat')


    useEffect(() => {
        infoAPI.searchRatNames()
            .then(res => setArray([
                ...res,
                'No Rat'
            ]))
    }, [])



  return (
      <div className='container'>
        <div className='mainInfo'>
          <b><label htmlFor="rats">Select rat: </label></b>
          <select
              className='select'
              name="rats"
              id='rats'
              value={stateValue}
              onChange={(e) =>    setStateValue(e.currentTarget.value)}
          >
            {array.map((e: any, index: any) => {
              return (
                  <option
                      defaultValue={'No Rat'}
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
