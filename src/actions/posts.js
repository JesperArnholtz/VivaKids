import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_ASSET = 'FETCH_ASSET';
const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'vvramws042o6';
const API_TOKEN = 'a2a3e07f4cc88d339c045c01fe7d44b03bcf2b3fe9fb00fa322ad376fd8e988a';

export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=blog`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchAsset(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`);

  return {
    type: FETCH_ASSET,
    payload: request
  };
}