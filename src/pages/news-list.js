import React, { Component } from 'react';
import axios from 'axios';

class NewsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      newsList : []
    }
  }
  
  componentDidMount(){
    const url = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-11-15&sortBy=publishedAt&apiKey=b1698990c8924c758bf8577ecc9f6666";
    axios.get(url)
        .then((response) => {
          this.setState({
            newsList : response.data.articles
          })
        })
        .catch((error) => {
          console.log(error)
        })
  }

  render() {
    let newsArticles = this.state.newsList.map((value, index) => {
      return(
        <div className="news" key={index}>
          <div>
              <img src={value.urlToImage} className="news-image"/>
          </div>
          <div className="news-content">
            <h2>{value.title}</h2>
            <p className="text-wrap">
              {value.description}
            </p>
          </div>
        </div>
      )
    })
    return (
      <div>
         <div className="header">
          <span className="header-text">NEWS</span>
          <span className="header-text">LIVE TV</span>
          <img src={require('../images/logo.png').default} />
          <span className="header-text">APP</span>
          <span className="header-text">MAGAZINE</span>
      </div>
      <div className="content">
        {newsArticles}
      </div>
      </div>
    );
  }
}

export default NewsList;