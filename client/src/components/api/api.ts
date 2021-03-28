import axios, { AxiosResponse } from 'axios';



export const infoAPI = {
  searchRatNames() {
    return axios.get<Array<string>>(`http://localhost:7421/rat-names`)
      .then((res:AxiosResponse) => {
          console.log(res.data)
        return res.data;
      });
  },
};

