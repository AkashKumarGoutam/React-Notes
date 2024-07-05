import React from 'react'
import { Link } from 'react-router-dom'
import TopicLink from '../../components/topicLink/TopicLink'

function Home() {
  return (
    <div className='bg-gray-800 text-white'>

      <div className='p-4 pl-20 py-16 '>
        <h1 className='underline text-xl font-semibold py-2'>Topic:</h1>
        <TopicLink/>
      </div><hr/>
      <div className='flex flex-wrap gap-11 justify-center item-center pl-20 pr-20 pt-12 pb-40'>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/reusable_component_code' className='border    shadow-xl p-2 hover:bg-black hover:text-white rounded-xl  cursor-pointer' >Reusable Components code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Filter Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Reducing Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >TODO App Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Calculator Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >API Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Mapping Code</Link>
        <Link to='/mapping' className='border p-2 hover:bg-black shadow-xl hover:text-white rounded-xl  cursor-pointer' >Mapping Code</Link>

      </div>
      
    </div>
  )
}

export default Home
