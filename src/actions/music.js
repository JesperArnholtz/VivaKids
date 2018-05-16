import axios from 'axios';
export const FETCH_MUSIC = 'FETCH_MUSIC';
const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'vvramws042o6';
const API_TOKEN = 'a2a3e07f4cc88d339c045c01fe7d44b03bcf2b3fe9fb00fa322ad376fd8e988a';

export function fetchMusic() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=music`);
  return {
    type: FETCH_MUSIC,
    payload: request
  };
}

