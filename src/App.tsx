import React, { useState } from 'react'
import Modal from 'react-modal'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { NewTransactionModal } from './components/newTransactionModal/Index'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  const handleCloseNewTransactionModal = () =>
    setIsNewTransactionModalOpen(false)

  const handleOpenNewTransactionModal = () => setIsNewTransactionModalOpen(true)

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  )
}
