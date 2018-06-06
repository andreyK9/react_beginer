import React, {PureComponent} from 'react'
import Article from '../Article'
import './style.css'

export default class ArticleList extends PureComponent {
  state = {
    openArticleId: null
  }

  render() {
    console.log('---', 2);
    const {openArticleId} = this.state
    const articleElements = this.props.articles.map((article, index) =>
      <li key={article.id} className='article-list__li'>
        <Article 
          article={article} 
          isOpen={openArticleId === article.id} 
          onButtonClick={this.handleClick.bind(this, article.id)} 
        />
      </li>
    )
    return (
        <ul>
            {articleElements}
        </ul>
    )
  }
  
  handleClick = openArticleId => this.setState({
    openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
  })
}