import React from 'react'

function UsageReducer(state,action) {
 switch (action.type) {
    case "change-value":
        return({...state,
            value:state.value+ action.payload}
        )
          case "change-color":
        return({...state,
            color: action.payload}
        )
    
 }
}

export default UsageReducer