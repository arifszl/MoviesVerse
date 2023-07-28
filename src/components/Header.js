import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import
 {BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom'



const Header = () => {
  return (
    <div className="sticky z-10 header top-0   text-3xl flex justify-between items-center  text-red-600 font-bold p-3 border-b-2 border-gray-500">
    <Link to="/"> <span>  Movies<span className="text-white" > Verse</span></span> </Link>
     <Link to={'/addForm'}  >
     <h1 className='text-lg text-white flex items-center cursor-pointer' >
        <Button variant='outlined' color='success' > <AddIcon className='mr-1' color='Secondary' /> Add New </Button></h1>
     </Link>
     
    </div>

  )
}

export default Header