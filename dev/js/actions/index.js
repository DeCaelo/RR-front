import {GET_ARTICLES, GET_ARTICLE, CREATE_ARTICLE} from './types';
import axios from 'axios';

const API_URL = "http://localhost:5000/api/v1";

export function getArticles(){
  const request = axios.get('${API_URL}/articles');

  return{
    type: GET_ARTICLES,
    playload: request
  };
}

export function createArticle(props){
  const request = axios.post('${API_URL}/articles', props);

  return{
    type: CREATE_ARTICLE,
    playload: request
  };
}
