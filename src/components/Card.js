import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { getDocs } from 'firebase/firestore'
import { moviesRef } from '../firebase/firebase'




const Card = (props) => {

    const [data,setData]=useState([])

useEffect(()=>{

   const  getData= async()=>{
          const res=await getDocs(moviesRef);

         res.forEach(doc => {
            setData((prv)=> [...prv,doc.data()])
            
         });
    }
    getData()

},[])
  
console.log(data)
  return (
    <div className='flex flex-wrap justify-between p-3 mt-2' >
        {data.map((e,i)=>{

        return(
        <div key={i}  className='card font-medium shadow-lg p-2 hover:-translate-y-2 cursor-pointer mt-3'>
            <img className='h-72' src={e.img} />
            <h1> <span className='text-gray-500' >Name : </span>{e.name} </h1>
            <h1><span className='text-gray-500' >Rating : <ReactStars  edit={false} value={5} size={20} /> </span>  </h1>
            <h1><span className='text-gray-500' >Year : </span> {e.year} </h1>
        </div>
)})}
    </div>
  )
}

export default Card