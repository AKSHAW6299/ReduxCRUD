import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sticky Navbar */}
      <header className="bg-white shadow-md p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to={'/'}>
            <div className="text-2xl font-semibold text-blue-700">SkillUp Aacadmy</div>
          </Link>
          <ul className="flex space-x-4">
            <li><a href="#cards" className="hover:text-blue-600">Features</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            <li><button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Sign Up</button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <header className="bg-white shadow">
        <div className="container mx-auto text-center py-8 px-4">
          <h2 className="text-3xl font-semibold text-purple-500">CRUD using redux</h2>
          <p className="mt-2 text-gray-600">
            A complete demo showcasing how to interact with a RESTful API using various HTTP methods.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <section id="features" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Create Card */}
            <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
              <h2 className="text-xl font-semibold mb-4">Create (POST Api)</h2>
              <p className="text-gray-700">
                Create a new resource by sending a POST request. Perfect for adding new entries to the database.
              </p>
              <div className="mt-4">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                  Test Create
                </button>
              </div>
            </div>

            {/* Read Card */}
            <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
              <h2 className="text-xl font-semibold mb-4">Read (GET Api)</h2>
              <p className="text-gray-700">
                Retrieve and display resources using GET requests. Get instant access to your data.
              </p>
              <div className="mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  Test Read
                </button>
              </div>
            </div>

            {/* Update Card */}
            <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
              <h2 className="text-xl font-semibold mb-4">Update (PUT Api)</h2>
              <p className="text-gray-700">
                Fully update an existing resource with a PUT request. Ensure data remains accurate.
              </p>
              <div className="mt-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                  Test Update
                </button>
              </div>
            </div>

            {/* Patch Card */}
            <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
              <h2 className="text-xl font-semibold mb-4">Patch (PATCH Api)</h2>
              <p className="text-gray-700">
                Apply partial modifications to a resource using PATCH. Quick and efficient adjustments.
              </p>
              <div className="mt-4">
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">
                  Test Patch
                </button>
              </div>
            </div>

            {/* Delete Card */}
            <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
              <h2 className="text-xl font-semibold mb-4">Delete (DELETE Api)</h2>
              <p className="text-gray-700">
                Remove unwanted resources with a DELETE request. Clean and maintain your database.
              </p>
              <div className="mt-4">
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                  Test Delete
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Content Section */}
        <section id="overview" className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">About This Demo</h2>
          <p className="text-gray-700 mb-4">
            This demo provides a hands-on experience with RESTful API integration. Each card above represents a fundamental operation.
            Click on any button to test the functionality and observe the interaction between the frontend and the API backend.
          </p>
          <p className="text-gray-700">
            Whether you're a beginner or a seasoned developer, this demo offers a practical overview of how to structure API calls
            and manage data effectively in modern web applications.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white p-4 text-center">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} SkillUp Aacadmy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
