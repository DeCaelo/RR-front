import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getArticles} from '../actions/index'
import {Link} from 'react-router';

class ArticlesHome extends Component{
  componentWillMount(){
    this.props.getArticles();
  }

  render(){
    return(
      <div className="container">

      <div>
        <Link to="articles/new" className="btn btn-warning">
          Create Article
        </Link>
      </div>

      Articles Homepage
      </div>
      );
  }
}

export default connect(null, {getArticles: getArticles})(ArticlesHome);
