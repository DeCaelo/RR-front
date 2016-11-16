import {GET_ARTICLES} from './types';
import axios from 'axios';

const API_URL = "http://localhost:5000/api/v1";

export function getArticles(){
  const request = axios.get('${API_URL}/articles');

  return{
    type: GET_ARTICLES,
    playload: request
  };
}
