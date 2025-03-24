import React from "react";
import { Formik, Form, Field } from "formik";
import { addUser, deleteUser, updateUser } from "../../actions";
import { useDispatch, useSelector } from "react-redux";




function Home() {

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.users.users)
  console.log('Added user data :', userData);




  // Initial Values
  const initialValues = {
    userId: '',
    title: '',
    body: '',
  };

  // Form Submit Handler
  const handleSubmit = (values) => {
    console.log('Form data :', values);
    dispatch(addUser(values))

  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-2xl font-semibold mb-4">User Form</h2>

      {/* Form */}
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="space-y-4">
          <Field
            name="userId"
            placeholder="User ID"
            className="w-full p-2 border rounded-md"
          />
          <Field
            name="title"
            placeholder="Title"
            className="w-full p-2 border rounded-md"
          />
          <Field
            name="body"
            placeholder="Body"
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
      <ul className="mt-4">
        {userData.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded-md"
          > 
            <span>{user.id}</span>
            <span>{user.userId}</span>
            <span>{user.title}</span>
            <span>{user.body}</span>
            <button
              onClick={() => dispatch(deleteUser(user.id))}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
