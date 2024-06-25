import React, { PureComponent } from 'react'

class Todo extends PureComponent {  
render(){
  const {id, name,changeStatus} = this.props
  return (
    <>
        <div className="user-item">
          <p> ID: {id} </p>
          <p> NAME: {name} </p>
          <button onClick={() => changeStatus(id)}>Change todo</button>
        </div>
    </>
  )
}
}

export default Todo