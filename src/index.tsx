import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Testando',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Testando',
          type: 'deposit',
          category: 'dev',
          amount: 1000,
          createdAt: new Date(),
        },
        {
          id: 3,
          title: 'Testando',
          type: 'deposit',
          category: 'dev',
          amount: 3000,
          createdAt: new Date(),
        },
      ],
    })
  },
  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => this.schema.all('transaction'))
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transactions', data)
    })
  },
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
