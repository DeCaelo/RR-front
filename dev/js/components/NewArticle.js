import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createArticle} from '../actions/index';

class NewArticle extends Component{
  render(){
    const {fields:{title}, handleSubmit} = this.props;

    return(
      <div className="container">
      <h1>New Article Create Page</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>
        <button type="submit" className="btn btn-success">Create</button>
      </form>

      </div>
    );
  }
}

export default reduxForm({
  form: 'NewArticleForm',
  fields: ['title']
}, null, {createArticle})(NewArticle);
