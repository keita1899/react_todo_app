import styled from 'styled-components'
import { SButton } from '../styles/Button'

const STodo = styled.div`
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 5px;
  border: 3px solid red;
  display: flex;
  align-items: center;
  margin-top: 20px;

  span {
    margin-left: 10px;
  }
`

const SCompleteButton = styled(SButton)`
  background-color: gray;
`

export const Todo = ({ todo, onCompleteTodo }) => {
  return (
    <STodo>
      <SCompleteButton onClick={onCompleteTodo}>完了</SCompleteButton>
      <span>{todo.text}</span>
    </STodo>
  )
}
