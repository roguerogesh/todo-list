import './index.css'

const TodoItem = props => {
  const {todoList} = props
  const {id, title} = todoList

  onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button type="button" className="button" onClick={this.onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
