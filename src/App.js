import React, { useEffect, useState } from 'react';
import './App.css'
import api from './components//Api/api'
import MovieRow from './components/Movie row/MovieRow'
import RaisedFilm from './components/Raised film/RaisedFilm'
import Header from './components/Header/Header'



export default () => {

  const [movieList, setMovieList] = useState([]);
  const [RaisedFilmData, setRaisedFilmData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > 20){
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener);
    return()=>{
      window.removeEventListener('scroll', scrollListener);
    }

  },[]);

  return(
    <div className='page'>

      <Header black={blackHeader}/>

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