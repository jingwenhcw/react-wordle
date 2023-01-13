import { useState, useEffect } from 'react';
import './App.css';
import Wordle from './components/Wordle';
import axios from 'axios';
import useAxios from './hooks/useAxios';

function App() {
  const {
    response: solutions,
    loading,
    refetch,
  } = useAxios({
    axiosInstance: axios,
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
    requestConfig: {
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
      },
      params: { count: '5', wordLength: '5' },
    },
  });

  if (loading) {
    return <div>Loading....</div>;
  }

  const randomIndex = Math.floor(Math.random() * solutions.length);
  const solution = solutions[randomIndex];

  //console.log(solution);

  return (
    <div className='App'>
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} reset={refetch} />}
    </div>
  );
}

export default App;
