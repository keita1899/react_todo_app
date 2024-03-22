import { useState } from 'react'
import { AddTodoForm } from './components/AddTodoForm'
import { Todo } from './components/Todo'
import { CompletedTodoList } from './components/CompletedTodoList'
import styled from 'styled-components'
import { EditTodoForm } from './components/EditTodoForm'
import { SButton } from './styles/Button'

const SWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`

const SContainer = styled.div`
  width: 100%;
  padding: 50px 15px 0;
  margin: 0 auto;

  @media (min-width: 576px) {
    padding: 50px 30px 0;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 50%;
  }
`

const STitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
`

const SFlexContainer = styled.div`
  display: flex;
  justify-content: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
`

const SHeading = styled.h2``

const SDeleteButton = styled(SButton)`
  background-color: red;
`

const SEditButton = styled(SButton)`
  margin-left: 5px;
  background-color: green;
`

const initialTodo = {
  id: 0,
  text: '',
  isCompleted: false,
  isEdit: false,
}

function App() {
  const [todo, setTodo] = useState(initialTodo)
  const [completedTodos, setCompletedTodos] = useState([])

  const hasTodo = todo.id !== 0
  const hasCompletedTodos = completedTodos.length > 0

  const addTodo = (todoText) => {
    if (hasTodo) return

    const newTodo = {
      id: Math.random(),
      text: todoText,
      isCompleted: false,
      isEdit: false,
    }

    setTodo(newTodo)
  }

  const deleteTodo = () => {
    if (!hasTodo) return
    setTodo(initialTodo)
  }

  const toggleEditTodo = () => {
    setTodo({
      ...todo,
      isEdit: !todo.isEdit,
    })
  }

  const saveTodo = (todoText) => {
    const newTodo = {
      ...todo,
      text: todoText,
      isEdit: false,
    }

    setTodo(newTodo)
  }

  const completeTodo = () => {
    const newCompletedTodo = {
      id: todo.id,
      text: todo.text,
      isCompleted: true,
    }
    setCompletedTodos([...completedTodos, newCompletedTodo])
    setTodo(initialTodo)
  }

  const deleteAllCompletedTodo = () => {
    if (!hasCompletedTodos) return

    if (window.confirm('全て削除されますがよろしいですか')) {
      setCompletedTodos([])
    }
  }

  const deleteCompletedTodo = (id) => {
    const newCompletedTodos = completedTodos.filter((todo) => todo.id !== id)
    setCompletedTodos(newCompletedTodos)
  }

  return (
    <SWrapper>
      <SContainer>
        <STitle>One Task</STitle>
        {hasTodo && (
          <SFlexContainer justify='right'>
            <SDeleteButton onClick={deleteTodo} disabled={!hasTodo}>
              削除
            </SDeleteButton>
            <SEditButton onClick={toggleEditTodo} disabled={!hasTodo}>
              {todo.isEdit ? '戻す' : '編集'}
            </SEditButton>
          </SFlexContainer>
        )}
        {hasTodo &&
          (todo.isEdit ? (
            <EditTodoForm todo={todo} onSaveTodo={saveTodo} />
          ) : (
            <Todo
              todo={todo}
              onCompleteTodo={completeTodo}
              onToggleEditTodo={toggleEditTodo}
              onSaveTodo={saveTodo}
            />
          ))}
        {!hasTodo && <AddTodoForm onAddTodo={addTodo} disabled={hasTodo} />}
        <div>
          <SFlexContainer justify='space-between' align='center'>
            <SHeading>完了タスク</SHeading>
            <SDeleteButton
              disabled={!hasCompletedTodos}
              onClick={deleteAllCompletedTodo}
            >
              全て削除
            </SDeleteButton>
          </SFlexContainer>
          <CompletedTodoList
            completedTodos={completedTodos}
            onDeleteCompletedTodo={deleteCompletedTodo}
          />
        </div>
      </SContainer>
    </SWrapper>
  )
}

export default App
