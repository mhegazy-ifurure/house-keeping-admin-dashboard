/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const dataProvider = {
  getList: (resource: any, params: any) => {
    return axios
      .get(`${import.meta.env.VITE_API_URL}/${resource}`, {
        params,
      })
      .then((res) => {
        return { data: res.data, total: res.data.length };
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, // get a list of records based on sort, filter, and pagination
  getOne: (resource: any, params: { id: any }) => {
    const { id } = params;
    return axios.get(`${import.meta.env.VITE_API_URL}/${resource}/${id}`);
  }, // get a single record by id
  //   getMany: (resource: any, params: any) => {

  //   }, // get a list of records based on an array of ids
//   getManyReference: (resource: any, params: any) => {
    
//   }, // get the records referenced to another record, e.g. comments for a post
  create: (resource: any, params: any) => {
    console.log({resource ,params});
    const {body} =params
    return axios.post(`${import.meta.env.VITE_API_URL}/${resource}` ,body).then(res=>{return res.data}).catch(err=>{throw new Error(err)})

  }, // create a record
  update: (resource: any, params: any) => Promise, // update a record based on a patch
  updateMany: (resource: any, params: any) => Promise, // update a list of records based on an array of ids and a common patch
  delete: (resource: any, params: any) => Promise, // delete a record by id
  deleteMany: (resource: any, params: any) => Promise, // delete a list of records based on an array of ids
};
