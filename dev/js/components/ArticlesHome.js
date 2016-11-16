import React, { Component } from 'react';
import {connect} from 'reacr-redux';
import {getArticles} from '../actions/index'

class ArticlesHome extends Component{
  componentWillMount(){
    this.props.getArticles();
  }

  render(){
    return(
      <div className="container">
      Articles Homepage
      </div>
      );
  }
}

export default connect(null, {getArticles: getArticles})(ArticlesHome);
