import { useState } from 'react'
import styled from 'styled-components'
import { SButton } from '../styles/Button'

const SAddTodoForm = styled.div`
  font-size: 18px;
  width: 100%;
  display: flex;
  margin-top: 20px;
`

const SAddTodoInput = styled.input`
  flex: 5;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  outline: none;
`
const SAddTodoButton = styled(SButton)`
  flex: 1;
  margin-left: 5px;
  background-color: green;
`

export const AddTodoForm = ({ onAddTodo, disabled }) => {
  const [todoText, setTodoText] = useState('')

  const handleClick = () => {
    if (todoText.trim()) {
      onAddTodo(todoText)
      setTodoText('')
    }
  }

  return (
    <SAddTodoForm>
      <SAddTodoInput
        type='text'
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <SAddTodoButton onClick={handleClick} disabled={disabled}>
        保存
      </SAddTodoButton>
    </SAddTodoForm>
  )
}
