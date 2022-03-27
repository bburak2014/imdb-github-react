import axios from "axios"

export const fetchProduct=async(id)=> { 
   const {data}=await axios.get(`http://localhost:3000/data/${id}`);
return data;
} 




export const fetchProductList=async()=> { 
   const {data}=await axios.get(`http://localhost:3000/data`);
return data;
} 

