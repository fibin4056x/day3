import React, { useReducer } from 'react'
import UsageReducer from './UsageReducer'

function Couter() {
    const[state,dispatch]=useReducer(UsageReducer,{value:0})
  return (
   <>
   <div  style={{background:state.color}}>
    <button 
    onClick={ ()=>{
        dispatch({type:"change-value",
            payload:1}
        )}}>increment</button>
    <p >{state.value}</p>
    <button onClick={ ()=>{
        dispatch({type:"change-value",
            payload:-1}
        )}}>decrement</button>
        <button  onClick={()=>{
            dispatch(
                {type:"change-color",
                    payload:"red"
                }
            )
        }}>red</button>
          <button  onClick={()=>{
            dispatch(
                {type:"change-color",
                    payload:"blue"
                }
            )
        }}>blue</button>
        </div></>
        
  )
}

export default Couter