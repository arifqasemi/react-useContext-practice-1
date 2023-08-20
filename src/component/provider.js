export default (state, action) => {
    switch (action.type) {
      case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter(user => {
            return user.id !== action.payload;
          })
        }
      case 'ADD_USER':
        console.log(state.users)
        // return {
        //   ...state,
        //   users: [...state.users, action.payload]
        // };
        
      case 'EDIT_USER':
        const {id,name,email}= action.payload;
            const userIndex = state.users.filter((u)=> u.id == id);
            const userId = id -1;
            if (userIndex) {
                state.users[userId] = {
                  ...state.users[userId],
                  name: name,
                  email: email,
                };
              }
        // console.log(user);

        // const updateUsers = state.users.map(user => {
        //   if (user.id === updateUser.id) {
        //     return updateUser;
        //   }
        //   return user;
        // })
        // return {
        //   ...state,
        //   users: updateUsers
        // }
  
      default:
        return state;
    }
  }