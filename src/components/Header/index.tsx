// @flow
import * as React from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

type headerProps = {
  onOpenNewTransactionModal: () => void
}
export const Header = ({ onOpenNewTransactionModal }: headerProps) => (
  <Container>
    <Content>
      <img src={logoImg} alt='dt money' />
      <button type='button' onClick={onOpenNewTransactionModal}>
        Nova transação
      </button>
    </Content>
  </Container>
)
