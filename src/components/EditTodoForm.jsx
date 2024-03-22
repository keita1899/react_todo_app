import { useState } from 'react'
import styled from 'styled-components'
import { SButton } from '../styles/Button'

const SEditTodoForm = styled.div`
  display: flex;
  font-size: 18px;
  width: 100%;
  display: flex;
  margin-top: 20px;
`

const SEditTodoInput = styled.input`
  flex: 4;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  outline: none;
`

const SSaveButton = styled(SButton)`
  margin-left: 5px;
  background-color: black;
`

export const EditTodoForm = ({ todo, onSaveTodo }) => {
  const todoText = todo.text

  const [updateTodoText, setUpdateTodoText] = useState(todoText)

  const handleSaveTodo = () => {
    if (updateTodoText.trim()) {
      onSaveTodo(updateTodoText)
    }
  }

  return (
    <SEditTodoForm>
      <SEditTodoInput
        type='text'
        onChange={(e) => setUpdateTodoText(e.target.value)}
        value={updateTodoText}
        autoFocus
      />
      <SSaveButton onClick={handleSaveTodo}>更新</SSaveButton>
    </SEditTodoForm>
  )
}
