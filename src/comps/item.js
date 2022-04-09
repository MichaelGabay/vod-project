import React from 'react'
import { Link } from 'react-router-dom';

export default function Item(props) {
    let item = props.item;
    return (
        <div className='col-md-3 col-6 p-3 '>

            <Link to={`/search/${props.searchP}/year/${props.year}/video/${item.imdbID}`}>

                <div style={{ borderRadius: '20px', cursor: 'pointer' }} className=' shadow overflow-hidden h-100'>
                    <img src={item.Poster} className=' w-100 item_img bg-img' alt={item.Title} />
                </div>

            </Link>
        </div>
    )
}
