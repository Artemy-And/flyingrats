import axios, { AxiosResponse } from 'axios';
import {RatInfoType} from "../../App";



export const infoAPI = {
  searchRatNames() {
    return axios.get<Array<string>>(`http://localhost:7421/rat-names`)
      .then((res:AxiosResponse) => {
          console.log(res.data)
        return res.data;
      });
  },
    selectedRatNames(name:string) {
        return axios.get<RatInfoType>(`http://localhost:7421/rat/${name}`)
            .then((res:AxiosResponse) => {
                console.log(res);
                return res.data;
            });
    },
};

