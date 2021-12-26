import React from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GigGridItem } from './GigGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );
    

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> { category } </h3> 
            
            { loading && <p className='animate__animated animate__flasg'>Loading</p> }

            <div className='card-grid'>
                    {
                        images.map( ( img ) => (
                            <GigGridItem 
                                key={ img.id }
                                { ...img }
                            />
                        ))
                    }
            </div>
        </>
    )
}

export default GifGrid;
