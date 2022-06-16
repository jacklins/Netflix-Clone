import React, { useEffect, useState } from 'react';
import './App.css'
import api from './api'
import MovieRow from './components/MovieRow'
import RaisedFilm from './components/RaisedFilm'



export default () => {

  const [movieList, setMovieList] = useState([]);
  const [RaisedFilmData, setRaisedFilmData] = useState(null)

  useEffect(() => {
    const loadAll = async()=>{
      // Getting the list
    let list = await api.getHomeList();
      setMovieList(list);

      // Getting the raised film data
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length-1));
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv');

      setRaisedFilmData(chosenInfo);
    }

    loadAll();
  }, []);

  return(
    <div className='page'>

    {RaisedFilmData &&
      <RaisedFilm item={RaisedFilmData}/>
      }
      
     <section className='lists'>
      {movieList.map((item, key)=>(
       <MovieRow key={key} title={item.title} items={item.items} />
      ))}
     </section>
    </div>
  );
}