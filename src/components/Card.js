import React, { useState } from 'react'
import ReactStars from 'react-stars'

const Card = () => {

    const [data,setData]=useState([
        {
            img:'https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2022/11/17141234/1.-Rory_Kurtz_Dune_REG.jpg',
            name:'Dune',
            rating:5,
            year:2022
        },
        {
            img:'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            name:'Spier-Man',
            rating:5,
            year:2020
        },
        {
            img:'https://images.unsplash.com/photo-1611419010196-a360856fc42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
            name:'Walk-alone',
            rating:3.5,
            year:2022
        },
        {
            img:'https://www.tuppencemagazine.co.uk/wp-content/uploads/2020/01/Star-Wars-The-Rise-Of-Skywalker-epic-maxi-movie-poster-684x1024.jpg',
            name:'Star wars',
            rating:4,
            year:2022
        },
        {
            img:'https://assets.mubicdn.net/images/notebook/post_images/33421/images-w1400.jpg?1625400709',
            name:'Annette',
            rating:4.5,
            year:2022
        },
        {
            img:'https://img.fruugo.com/product/8/50/14461508_max.jpg',
            name:'Her',
            rating:5,
            year:2018
        }
    ])

  return (
    <div className='flex flex-wrap justify-between p-3 mt-2' >
        {data.map((e,i)=>{

        return(
        <div key={i}  className='card font-medium shadow-lg p-2 hover:-translate-y-2 cursor-pointer mt-3'>
            <img className='h-72' src={e.img} />
            <h1> <span className='text-gray-500' >Name : </span>{e.name} </h1>
            <h1><span className='text-gray-500' >Rating : <ReactStars  edit={false} value={e.rating} size={20} /> </span>  </h1>
            <h1><span className='text-gray-500' >Year : </span> {e.year} </h1>
        </div>
)})}
    </div>
  )
}

export default Card