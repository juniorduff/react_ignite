// @flow
import * as React from 'react'
import { Container } from './styles'
import { Summary } from '../Summary/Index'
import { TransactionTable } from '../TransactionTable'

export const Dashboard = () => (
  <Container>
    <Summary />
    <TransactionTable />
  </Container>
)
