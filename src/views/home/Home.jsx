import React from "react";
import { Formik, Form, Field } from "formik";
import { addUser, deleteUser } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users.users);
  console.log("Added user data :", userData);

  const initialValues = {
    userId: "",
    title: "",
    body: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addUser(values));
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Form Section */}
      <div className="w-full max-w-4xl bg-white p-6 shadow-md rounded-md">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
          Add User
        </h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="grid grid-cols-3 gap-3">
            <Field
              name="userId"
              placeholder="User ID"
              className="p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
            <Field
              name="title"
              placeholder="Title"
              className="p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
            <Field
              name="body"
              placeholder="Body"
              className="p-2 border rounded-md focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="col-span-3 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </Form>
        </Formik>
      </div>

      {/* Full-Screen Table */}
      <div className="w-full mt-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">User ID</th>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Body</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.length > 0 ? (
                userData.map((user) => (
                  <tr key={user.id} className="even:bg-gray-100 hover:bg-gray-200">
                    <td className="px-4 py-2 border">{user.id}</td>
                    <td className="px-4 py-2 border">{user.userId}</td>
                    <td className="px-4 py-2 border">{user.title}</td>
                    <td className="px-4 py-2 border">{user.body}</td>
                    <td className="px-4 py-2 border text-center">
                      <button
                        onClick={() => dispatch(deleteUser(user.id))}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-2 border text-center text-gray-500">
                    No users added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
