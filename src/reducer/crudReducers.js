const initialState = {
    users: []
}



const userCrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            const { userId, title, body } = action.payload.user
            return {
                ...state,
                users: [
                    ...state.users,
                    { userId: userId, title: title, body: body }
                ]
            }

        // case 'UPDATE_USER':

        case 'DELETE_USER':
            const newUsers = state.users.filter((stateOldId) => stateOldId.id !== action.id)
            return {
                ...state,
                users: newUsers
            }


        default:
            return state
    }
}

export default userCrudReducer;