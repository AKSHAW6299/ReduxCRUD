import React, { useEffect, useState } from 'react';

function Home() {

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Basic CRUD</h1>

      <div className="mb-4 flex space-x-2 gap-4">
        <div className="mb-2 flex-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            className="mt-1 p-2 border rounded w-full"
          // onChange={(e) => setFirstName(e.target.value)}
          // value={firstName}
          />
        </div>
        <div className="mb-2 flex-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            className="mt-1 p-2 border rounded w-full"
          // onChange={(e) => setLastName(e.target.value)}
          // value={lastName}
          />
        </div>
        <div className="mb-2 flex-1">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="text"
            id="age"
            placeholder="Age"
            className="mt-1 p-2 border rounded w-full"
          // onChange={(e) => setAge(e.target.value)}
          // value={age}
          />
        </div>



        <div className='flex-1 mt-8'>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded mr-2"
          // onClick={() => handleUpdate()}
          >
            Update
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded mr-2"
          // onClick={(e) => handleSave(e)}
          >
            Save
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded"
          // onClick={() => handleClear()}
          >
            Clear
          </button>

        </div>
      </div>


      <hr />
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">User ID</th>
            <th className="px-4 py-2 border">First Name</th>
            <th className="px-4 py-2 border">Last Name</th>
            <th className="px-4 py-2 border">Age</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>

      </table>
    </div>
  );
}

export default Home;