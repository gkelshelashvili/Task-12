import { Component } from "react";
import Todo from "./Todo";
import TodoDone from "./TodoDone";

class TodoList extends Component {
  state = {
    inputValue: "",
    users: [
      { id: 1, name: "Giga", status: 'Done' },
      { id: 2, name: "Gigi", status: 'Ongoing'  },
    ],
  };

  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      inputValue: value,
    });
  };

  addUser = (event) => {
    event.preventDefault();

    const user = {
      id: this.state.users.length + 1,
      name: this.state.inputValue,
      status: 'Ongoing' 
    };

    this.setState({
      users: [...this.state.users, user],
      inputValue: "",
    });
  };

  removeUser = (id) => {
    const users = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users,
    });
  };

  changeStatus = (id) => {
    this.setState(prevState => ({
      users: prevState.users.map(user =>
        user.id === id ? { ...user, status: user.status === 'Done' ? 'Ongoing' : 'Done' } : user
      )
    }));
  };

  render() {
    
    return (
       <>
       
        <div className="users">
          <form onSubmit={this.addUser} className="user-form">
            <input
              type="text"
              onChange={this.onChange}
              value={this.state.inputValue}
            />
            <button type="submit">Add Todo</button>
          </form>
          <p className='active'> Active Todos</p>
          {this.state.users.map((user) => (
            <Todo
              key={user.id}
              id={user.id}
              name={user.name}
              status={user.status}
              changeStatus={this.changeStatus}
            />
          ))}
        </div>

        <div className="users">
          <p className='active'> Ongoing Todos</p>
          {this.state.users.map((user) => (
            <TodoDone
              key={user.id}
              id={user.id}
              name={user.name}
              status={user.status}
              action={this.removeUser}
              changeStatus={this.changeStatus}
            />
          ))}
        </div>
       </> 
     
    );
  }
}

export default TodoList;
