//import React, {useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading } = useFetchGifs(category);
     if(!loading && images.length === 0){
        return <>
        <h3 className="animate_animated animate__fadeInUp">{ category }</h3>
        <p>No se encontraron gifs para la categoría: <i>{category}</i></p>
        </>
    }


    return (
        <>
            <h3 className="animate_animated animate__fadeInUp">{ category }</h3>

            {loading && <p className="animate_animated animate__flash">Loading...</p>}

            <div className="card-grid">
                    {
                    images.map(img => 
                    <GifGridItem 
                    key={img.id}
                    {...img}
                    />)
    }
        </div>
         </>
    )
}
