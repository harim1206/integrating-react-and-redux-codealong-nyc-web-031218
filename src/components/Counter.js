import React from 'react'

const Counter = (props) => {
  // debugger

  return (
    <div>
      <button onClick={()=>{
        return props.store.dispatch({type: 'INCREASE_COUNT'})
      }}> Click Me </button>
      <div> {props.store.getState().count} </div>
    </div>
  )
};


export default Counter
