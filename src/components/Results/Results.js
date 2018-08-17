import React, {Component} from "react";

import OneResult from "../OneResult";
import API from '../../utils/api';

export default class Results extends Component {

  constructor(props) {
    super(props);

  }


  render() {

    let articleResults = [];

    if(this.props.results.articles.length > 0 ){

      console.log(JSON.stringify(this.props.results.articles))
      articleResults = this.props.results.articles.map(article => {

        return(
          <OneResult title={article.title} url={article.url} date={article.date} id={article.articleId} key={article.articleId}
            image={`${article.image? "https://static01.nyt.com/"+ article.image.url : "https://www.biber.com/dta/themes/biber/core/assets/images/no-featured-175.jpg" }`}
          />
        )
      });

    }

    return (
      <div>
        {this.props.results.articles.length > 0 ? (
          <div>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa fa-table"></i>Article Results</strong></h3>
              </div>
              <div className="panel-body" id="well-section">
                <ol className="collection with-header">
                    {articleResults}
                </ol>
              </div>
            </div>
          </div>
        ) : <div></div>}
      </div>
    );
  } 
} 