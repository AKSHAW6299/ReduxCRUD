// CREATE
export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

// READ not required!

// UPDATE
export const updateUser = () => {
    return {
        type: 'UPDATE_USER'
    }
}

// DELETE
export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER',
        payload: id
    }
}