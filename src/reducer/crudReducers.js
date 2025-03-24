const initialState = {
    users: []
}



const userCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [
                    ...state.users,
                    { ...action.payload, id: Date.now() }
                ]
            }

        // case 'UPDATE_USER':
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.id ? { ...user, ...action.payload } : user
                )
            };

        case 'DELETE_USER':
            const newUsers = state.users.filter((e) => e.id !== action.payload)
            return {
                ...state,
                users: newUsers
            }


        default:
            return state
    }
}

export default userCrudReducer;