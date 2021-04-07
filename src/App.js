import './App.css';

import React, { useState, useEffect } from 'react'
import Slider from './components/Slider'

function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      "method": "GET",
    })
    .then(response => response.json())
    .then(response => {
      setImages([
        {
          'title': "First Block",
          'images':[
            'https://placeimg.com/800/600/any?a=1',
            'https://placeimg.com/800/600/any?a=2',
            'https://placeimg.com/800/600/any?a=3',
            'https://placeimg.com/800/600/any?a=4'
          ]
        },
        {
        'title': "Second Block",
        'images':[
            'https://placeimg.com/800/600/any?a=9',
            'https://placeimg.com/800/600/any?a=10',
            'https://placeimg.com/800/600/any?a=11',
            'https://placeimg.com/800/600/any?a=12'
          ]
        },
        {
          'title': "Third Block",
          'images':[
            'https://placeimg.com/800/600/any?a=5',
            'https://placeimg.com/800/600/any?a=6',
            'https://placeimg.com/800/600/any?a=7',
            'https://placeimg.com/800/600/any?a=8'
          ]
        }  
      ])
    })
    .catch(err => {
      console.log(err);
    });
  }, [images])

  return (
    <Slider slides={images} />
  );
}

export default App;
