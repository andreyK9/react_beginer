import React from 'react'
import ArticleList from './ArticleList'
import article from '../fixtures'

function App() {
  return (
    <div>
      <h1>App name</h1>
      <ArticleList articles = {article} />
    </div>
  )
}

export default App