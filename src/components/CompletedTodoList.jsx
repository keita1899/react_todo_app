import styled from 'styled-components'
import { CompletedTodo } from './CompletedTodo'

const SCompletedTodoList = styled.ul`
  padding: 0;
`

export const CompletedTodoList = ({
  completedTodos,
  onDeleteCompletedTodo,
}) => {
  return (
    <SCompletedTodoList>
      {completedTodos.map((todo) => (
        <CompletedTodo
          key={todo.id}
          todo={todo}
          onDeleteCompletedTodo={onDeleteCompletedTodo}
        />
      ))}
    </SCompletedTodoList>
  )
}
