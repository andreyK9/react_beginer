import React from 'react'
import Article from './Article'
import article from '../fixtures'

function App() {
  return (
    <div>
      <h1>App name</h1>
      <Article article = {article[0]} />
    </div>
  )
}

export default App