import * as React from 'react'
import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import IncomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import { Container, RadioBox, TransactionTypeContainer } from './styles'
import closeImage from '../../assets/close.svg'
import { api } from '../../services/api'

type newTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}
export function NewTransactionModal({
  onRequestClose,
  isOpen,
}: newTransactionModalProps) {
  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault()

    const data = {
      title,
      category,
      type,
      value,
    }
    console.log(data)

    api.post('/transactions', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImage} alt='fechar moldal' />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input
          type='text'
          placeholder='Titulo'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type='number'
          placeholder='Valor'
          value={value}
          onChange={(event) => setValue(+event.target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            isActive={type === 'deposit'}
            type='button'
            activeColor='green'
            onClick={() => setType('deposit')}
          >
            <img src={IncomeImage} alt='Entrada' />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            isActive={type === 'withdraw'}
            type='button'
            activeColor='red'
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImage} alt='Saida' />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type='text'
          placeholder='Categoria'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type='submit' onClick={handleCreateNewTransaction}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}
