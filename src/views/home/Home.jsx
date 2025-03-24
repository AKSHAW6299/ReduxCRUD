import React from "react";
import { Formik, Form, Field } from "formik";

function Home() {

  // Initial Values
  const initialValues = {
    firstName: "",
    lastName: "",
  };

  // Form Submit Handler
  const handleSubmit = (values) => {
    console.log('Form data :', values);

  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-2xl font-semibold mb-4">User Form</h2>

      {/* Form */}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="space-y-4">
          <Field
            name="firstName"
            placeholder="First Name"
            className="w-full p-2 border rounded-md"
          />
          <Field
            name="lastName"
            placeholder="Last Name"
            className="w-full p-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Add User
          </button>
        </Form>
      </Formik>

      {/* User List */}
      {/* <ul className="mt-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded-md"
          >
            <span>{user.firstName} {user.lastName}</span>
            <button
              onClick={() => dispatch(deleteUser(user.id))}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Home;
