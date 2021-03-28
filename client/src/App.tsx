import "destyle.css";
import React, {useEffect, useState} from "react";
import {infoAPI} from "./components/api/api";


export type RatInfoType = {
    width: number
    height: number
    nickname?: string
}

const App: React.FC = () => {
    const [array, setArray] = useState(['No Rat'])
    const [stateValue, setStateValue] = useState('No Rat')
    const [additionalInfo, setAdditionalInfo] = useState(false)
    const [obj, setObj] = useState<RatInfoType>({
        width: 0,
        height: 0,
        nickname: ''
    })

    useEffect(() => {
        infoAPI.searchRatNames()
            .then(res => setArray([
                ...res,
                'No Rat'
            ]))
    }, [])

    useEffect(() => {
            infoAPI.selectedRatNames(stateValue)
                .then(res => {
                    setObj({
                        ...res,
                    })})
    }, [stateValue])

    const onChangeNew = (e: any) => {
        setStateValue(e.currentTarget.value)
        setAdditionalInfo(true)
    }

  return (
      <div className='container'>
        <div className='mainInfo'>
          <b><label htmlFor="rats">Select rat: </label></b>
          <select
              className='select'
              name="rats"
              id='rats'
              value={stateValue}
              onChange={(e) => onChangeNew(e)}>
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
            {additionalInfo &&
            <div className='info'>
                <p><b>Width</b>: {obj.width}</p>
                <p><b>Height</b>: {obj.height}</p>
                <p><b>Nickname</b>: {obj.nickname}</p>
            </div>}
        </div>
      </div>
  )
};

export default App;
