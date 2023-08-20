import { createContext, useReducer } from "react";
const initialState = {users:[]};
export const GlobalContext = createContext(initialState)

const reducerFun = (state, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state, users:[...state.users, action.payload]
        };
      case 'Update':
        // console.log
        const {id, name, email} = action.payload;
        let newUsers= state.users.filter((user)=> user.id == id);
        const userId = newUsers[0].id -1;
        if(!newUsers){
          console.log("not found");
        }else{
         state.users[userId]={...state.users[userId], name:name, email:email}
          // console.log('found',state.users);
        }
      case 'delete':
        console.log('delete', action.payload);
        return {
          ...state,
          users: state.users.filter(user => {
            return user.id !== action.payload;
          })
        }

      
      default:
        return state;
    }
  };

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducerFun, initialState);
    
    const addUser =(payload)=>{
      dispatch({
        payload,
        type: 'ADD_USER'
      })
        console.log(state.users,"add user");
    }

    const Update =(payload)=>{
      dispatch({
        payload,
        type: 'Update'
      })

    }

    const deleteUser = (id)=>{
      dispatch({
        type:'delete',
        payload : id
      })
    }
    return(
        <GlobalContext.Provider value={{users:state.users, addUser,Update,deleteUser}}>{children}</GlobalContext.Provider>
    )
}