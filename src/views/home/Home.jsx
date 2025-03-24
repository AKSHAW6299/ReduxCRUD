import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { addUser, deleteUser, updateUser } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users.users);

  // Edit mode state
  const [editMode, setEditMode] = useState(false);
  const [editUser, setEditUser] = useState(null);

  // Initial form values
  const initialValues = {
    userId: "",
    title: "",
    body: "",
  };

  // Form submit handler
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

  // Handle Edit Click
  const handleEdit = (user) => {
    setEditUser(user);
    setEditMode(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      <h2>Redux CRUD</h2>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto bg-white p-4 rounded-md">
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
          {editMode ? "Edit User" : "Add User"}
        </h2>

        <Formik
          initialValues={editUser || initialValues}
          enableReinitialize
          onSubmit={handleSubmit}
        >
          <Form className="grid grid-cols-3 gap-3">
            <Field name="userId" placeholder="User ID" className="p-2 border rounded-md" />
            <Field name="title" placeholder="Title" className="p-2 border rounded-md" />
            <Field name="body" placeholder="Body" className="p-2 border rounded-md" />
            <button type="submit" className="col-span-3 bg-blue-500 text-white py-2 rounded-md">
              {editMode ? "Update User" : "Add User"}
            </button>
            {editMode && (
              <button
                type="button"
                className="col-span-3 bg-gray-500 text-white py-2 rounded-md"
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

      {/* Full-Width User List Table */}
      <div className="w-full mt-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">ID</th>
                <th className="p-2 border">User ID</th>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Body</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.length > 0 ? (
                userData.map((user, index) => (
                  <tr key={user.id} className="even:bg-gray-100">
                    <td className="p-2 border text-center">{index + 1}</td>
                    <td className="p-2 border">{user.userId}</td>
                    <td className="p-2 border">{user.title}</td>
                    <td className="p-2 border">{user.body}</td>
                    <td className="p-2 border flex justify-center space-x-2">
                      <button
                        onClick={() => handleEdit(user)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => dispatch(deleteUser(user.id))}
                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-2 border text-center text-gray-500">
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
