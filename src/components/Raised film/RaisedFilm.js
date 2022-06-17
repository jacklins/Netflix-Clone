import React from 'react'
import './RaisedFilm.css'

export default ({item}) => {

    let year = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    let description = item.overview
    if(description.length > 200){
        description = description.substring(0, 200) + '...';
    }

    return(
    <section className='raised'style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
        <div className='raised--vertical'>
            <div className='raised--horizontal'>
                <div className='raised--name'>{item.original_name}</div>
                <div className='raised--info'>
                    <div className='raised--points'>{item.vote_average} pontos.</div>
                    <div className='raised--year'>{year.getFullYear}</div>
                    <div className='raised--seasons'>{item.number_of_seasons} temporada{item.number_of_seasons !== 1? 's' : ''} </div>
                </div>
                <div className='raised--description'>{description} </div>
                <div className='raised--buttons'>
                    <a href={`/watch/${item.id}`} className='watchButton'> Assistir</a>
                    <a href={`/list/add/${item.id}`} className='listButton'> Minha Lista</a>
                </div>
                <div className='raised--genres'><strong>Gêneros:</strong>{genres.join(', ')}</div>
            </div>
        </div>
    </section>
    )
}