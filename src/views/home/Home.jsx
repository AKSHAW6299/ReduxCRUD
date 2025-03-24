import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { addUser, deleteUser, updateUser } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users.users);

  const [editMode, setEditMode] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const initialValues = {
    userId: "",
    title: "",
    body: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    if (editMode) {
      dispatch(updateUser({ ...values, id: editUser.id }));
      setEditMode(false);
      setEditUser(null);
    } else {
      dispatch(addUser(values));
    }
    resetForm();
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setEditMode(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      {/* 🔹 Responsive Sticky Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50 w-full">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-semibold text-blue-700">Redux CRUD</div>

          <ul className="md:block">
            <li><a href="#table-section" className="block py-2 hover:text-blue-600">Logout</a></li>
          </ul>
        </nav>
      </header>

      {/* 🔹 Responsive Form Section */}
      <div id="form-section" className="max-w-4xl mx-auto bg-white p-6 rounded-md mt-6 shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
          {editMode ? "Edit User" : "Add User"}
        </h2>
        <Formik initialValues={editUser || initialValues} enableReinitialize onSubmit={handleSubmit}>
          <Form className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Field name="userId" placeholder="User ID" className="p-2 border rounded-md" />
            <Field name="title" placeholder="Title" className="p-2 border rounded-md" />
            <Field name="body" placeholder="Body" className="p-2 border rounded-md" />
            <button type="submit" className="col-span-1 md:col-span-3 bg-blue-500 text-white py-2 rounded-md">
              {editMode ? "Update User" : "Add User"}
            </button>
            {editMode && (
              <button
                type="button"
                className="col-span-1 md:col-span-3 bg-gray-500 text-white py-2 rounded-md"
                onClick={() => {
                  setEditMode(false);
                  setEditUser(null);
                }}
              >
                Cancel
              </button>
            )}
          </Form>
        </Formik>
      </div>

      {/* 🔹 Responsive Table Section with FIXED Sticky Header */}
      <div id="table-section" className="w-full mt-6">
        <div className="overflow-auto max-h-[400px] bg-white shadow-md rounded-md">
          <table className="w-full border-collapse border border-gray-300">
            {/* 🔥 Sticky Header with Fixed Background */}
            <thead className="bg-gray-200 sticky top-0 shadow-md">
              <tr>
                <th className="p-3 border">ID</th>
                <th className="p-3 border">User ID</th>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Body</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.length > 0 ? (
                userData.map((user, index) => (
                  <tr key={user.id} className="even:bg-gray-100">
                    <td className="p-3 border text-center">{index + 1}</td>
                    <td className="p-3 border">{user.userId}</td>
                    <td className="p-3 border">{user.title}</td>
                    <td className="p-3 border">{user.body}</td>
                    <td className="p-3 border flex justify-center space-x-2">
                      <button onClick={() => handleEdit(user)} className="bg-yellow-500 text-white px-3 py-1 rounded-md">
                        Edit
                      </button>
                      <button onClick={() => dispatch(deleteUser(user.id))} className="bg-red-500 text-white px-3 py-1 rounded-md">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-3 border text-center text-gray-500">
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
