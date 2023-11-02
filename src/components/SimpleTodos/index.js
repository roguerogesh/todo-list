import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoDetailsList: initialTodosList}

  deleteItem = id => {
    const {todoDetailsList} = this.state
    const filteredTodoData = todoDetailsList.filter(each => each.id !== id)

    this.setState({todoDetailsList: filteredTodoData})
  }

  render() {
    return (
      <div className="container">
        <div className="small-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="list-container">
            {initialTodosList.map(eachList => (
              <TodoItem
                todoList={eachList}
                key={eachList.id}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
