import React from 'react'
import { Link } from 'react-router-dom'


function Read() {
  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <header className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to={'/'}>
            <div className="text-2xl font-semibold text-blue-700">SkillUp Aacadmy</div>
          </Link>
          <div></div>
        </nav>
      </header>


      <div className='text-center text-gray-500 mt-6'>
        <h1 className="text-2xl font-semibold mb-4">Read operation : GET Api</h1>
      </div>


    </div>
  )
}

export default Read