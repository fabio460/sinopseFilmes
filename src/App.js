
import './App.css';
import React, { useEffect, useState } from 'react';
//import ApiGame from './apiGames';
//import ApiGame from './apiGames';

 
 function  App() {
  const [userId,setUser]=useState()
  useEffect(() => {    
   //let l =await ApiGame.get();
   
   //setUser(l)

    async function fetchUser() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/100?api_key=c67c46d798a0c30ed3e1f1e53bd6e0f2`);
      const  data  = await response.json();
      setUser(data);
    }
    fetchUser();
  }, []);
  console.log(userId)
  return (
    <>
      teste
    </>
  );
}

export default App;
