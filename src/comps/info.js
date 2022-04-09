import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Infonfo() {
    const { year, searchP } = useParams();
    const { id } = useParams();
    const [obj, setObj] = useState({});
    const [loading, setLoading] = useState(false)
    const [stars, setStars] = useState([]);
    useEffect(() => {
        doApi();
    }, [])

    useEffect(() => {
        makeStars();
    }, [obj])

    const doApi = async () => {
        setObj({});
        setLoading(true);
        let data = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=fd6aa444`);
        let d = data.data;
        let tempObj;
        tempObj = { name: d.Title, img: d.Poster, year: d.Year, info: d.Plot, genre: d.Genre, actors: d.Actors, rate: +(d.Ratings[0].Value).slice(0, 3) }
        setObj(tempObj);
        setLoading(false);
    }
    const makeStars = () => {
        setStars([]);
        let stars = [];
        for (let index = 0; index < obj.rate; index++) {
            stars.push(<div className='text-white '><img width={22} src='/images/star.png' /></div>)
        }
        if (obj.rate % 2 != 0) stars.push(<div className='text-white'><img width={22} src='/images/half_star.png' /></div>)
        setStars(stars);
    }
    return (
        <div style={{ minHeight: '100vh' }} className=' bg-dark pt-md-5'>
            <div className='row mx-auto'>
                <div className="col-md-5 pt-4 mb-3  text-center">
                    {loading && <div> <img width={100} src='https://cutewallpaper.org/21/loading-gif-transparent-background/Tag-For-Loading-Bar-Gif-Transparent-Loading-Gif-.gif'></img></div>}
                    <img className='shadow' style={{ borderRadius: '24px' }} width={350} src={obj.img}></img>
                </div>
                <div className='col-md-7 pt-4 mb-4  text-md-start text-center text-white'>
                    <h2>{obj.name}</h2>
                    <p>{obj.info}</p>
                    <h6>Genre: {obj.genre}</h6>
                    <h6>Actors: {obj.actors}</h6>
                    <h5>Year: {obj.year}</h5>
                    <div className='d-flex info_stars'>{stars}</div>
                    <div className='mt-3'>
                        <Link to={`/search/${searchP || "bank"}/year/${year || "noYear"}`} style={{ fontWeight: '600' }} className='btn  btn-light'>back</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
