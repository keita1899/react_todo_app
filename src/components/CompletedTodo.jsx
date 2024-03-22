import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const SCompleteTodo = styled.li`
  list-style: none;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 10px 15px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  span {
    text-decoration: line-through;
    overflow-wrap: break-word;
  }
`

const SDeleteIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`

export const CompletedTodo = ({ todo, onDeleteCompletedTodo }) => {
  const handleClick = (id) => {
    onDeleteCompletedTodo(id)
  }

  return (
    <SCompleteTodo>
      <span>{todo.text}</span>
      <SDeleteIcon icon={faTrash} onClick={() => handleClick(todo.id)}>
        削除
      </SDeleteIcon>
    </SCompleteTodo>
  )
}
