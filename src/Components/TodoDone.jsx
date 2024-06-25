import React, { PureComponent } from 'react'

class TodoDone extends PureComponent {  
render(){
  const {id, name, action,changeStatus} = this.props
  return (
    <>
        <div className="user-item">
          <p> ID: {id} </p>
          <p> NAME: {name} </p>
          <button  onClick={() => action(id)}>Remove</button>
          <button onClick={() => changeStatus(id)}>Change todo</button>
        </div>
    </>
  )
}
}

export default TodoDone