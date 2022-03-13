// @flow
import * as React from 'react'
import { Container } from './styles'

export const TransactionTable = () => (
  <Container>
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Teste de desenvolvimento</td>
          <td className='deposit'>R$ 12.000</td>
          <td>Desenvolvimento</td>
          <td>20/02/2021</td>
        </tr>
        <tr>
          <td>Aluguel</td>
          <td className='withdraw'>- R$ 12.000</td>
          <td>Conta de luz</td>
          <td>20/02/2021</td>
        </tr>
      </tbody>
    </table>
  </Container>
)
