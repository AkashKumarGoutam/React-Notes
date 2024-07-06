import React from 'react'
import { Link } from 'react-router-dom'
import TopicLink from '../../components/topicLink/TopicLink'

function Home() {
  return (
    <div className='bg-gray-900 text-white'>

      <div className=' px-20 py-10 '>
        <h1 className='underline text-4xl font-semibold py-2'>Topic:</h1>
        <TopicLink/>
      </div><hr/>
      <h1 className='text-4xl flex justify-center font-bold underline py-4'>Projects</h1>
      <div className='flex flex-wrap gap-11 justify-center item-center pl-20 pr-20 pt-12 pb-40'>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/reusable_component_code' className='border    shadow-xl p-2 hover:bg-orange-400 hover:text-black rounded-xl  cursor-pointer' >Reusable Components code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Filter Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Reducing Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >TODO App Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Calculator Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >API Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-orange-400 shadow-xl hover:text-black rounded-xl  cursor-pointer' >Mapping Code</Link>

      </div>
      
    </div>
  )
}

export default Home
