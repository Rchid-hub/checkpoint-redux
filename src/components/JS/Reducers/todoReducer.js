import { ADD_TODO, EDIT_TODO } from "../ActionTypes/actionsType";




const initialState={
    todoList:[
        {
            text:"Have Dinner",
            id:0,
            isDone: false
        },
        {
            text:"Play sports",
            id:1,
            isDone: true
        },
        {
            text:"Develop",
            id:2,
            isDone: false
        },
    ]
};

const todoReducer =(state=initialState,{type,payload})=>{
    switch(type){
       case ADD_TODO:{ 
       return{...state,todoList:[...state.todoList,payload]}
    }
       case EDIT_TODO:{
       return{
           ...state,
           todoList:state.todoList.map((todo)=>todo.id === payload.id ? { ...todo, text: payload.text } : todo)
       }
    }
    default : return state


}}

export default todoReducer