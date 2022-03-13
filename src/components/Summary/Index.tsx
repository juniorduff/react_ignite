import * as React from 'react'
// eslint-disable-next-line import/extensions,import/no-unresolved
import { Container } from './styles'
import incomeImg from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import totalAmount from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt='' />
        </header>

        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcome} alt='' />
        </header>

        <strong>R$1000</strong>
      </div>
      <div className='highlight-background'>
        <header>
          <p>Total </p>
          <img src={totalAmount} alt='' />
        </header>

        <strong>R$1000</strong>
      </div>
    </Container>
  )
}
