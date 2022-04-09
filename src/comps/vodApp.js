import React, { useEffect, useRef, useState } from 'react'
import CarouselVod from './carousel'

import './vodApp.css'
import { FaSearch } from 'react-icons/fa';
import YearsLinks from './yearsLinks';
import axios from 'axios';
import Item from './item';
import { useNavigate, useParams } from 'react-router-dom';

export default function VodApp(props) {
    const [ar, setAr] = useState([]);
    const [searchQ, setSearchQ] = useState('bank')
    const { year, searchP } = useParams();
    const nav = useNavigate();
    const [flag, setFlag] = useState(false);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        doApi()
    }, [])

    useEffect(() => {
        doApi()
    }, [searchP, year])

    const doApi = async () => {
        setLoading(true)
        setAr([])
        let { data } = await axios.get(`https://www.omdbapi.com/?s=${searchP || "bank"}&y=${year}&apikey=fd6aa444`)
        let temp_ar = data.Search || [];

        temp_ar = temp_ar.filter(temp_ar => temp_ar.Poster != 'N/A')
        setAr(temp_ar)
        setFlag(!temp_ar.length ? true : false)
        setLoading(false);

    }
    return (
        <div className='vodApp bg-dark'>
            <nav className='vodApp_nav d-flex align-items-center justify-content-between'>
                <div className='col-3'><h1 className='logo ms-1'>VodApp</h1></div>
                <div className='col-md-3 mx-2'>
                    <div className='float-end vodApp_inputDiv'>
                        <input onInput={(e)=> setSearchQ(e.target.value)} onKeyDown={(e) => { if (e.key == 'Enter') { nav(`/search/${e.target.value||"bank"}`)} }} placeholder='Search...' className='vodApp_input col-md-10 col-9' type="text" /><FaSearch onClick={()=>nav(`/search/${searchQ}`)} style={{ cursor: 'pointer' }} className='text-white me-1' />
                    </div>

                </div>
            </nav>
            <CarouselVod />
            <YearsLinks searchP={searchP} />
            <div className="container border-1 border my-3 bg-white"></div>
            <div className="row container mx-auto">
                {loading && <div> <img width={100} src='https://cutewallpaper.org/21/loading-gif-transparent-background/Tag-For-Loading-Bar-Gif-Transparent-Loading-Gif-.gif'></img></div>}
                {flag && !loading && <h2 className='text-white display-6'>No results...</h2>}
                {ar.map(item => {
                    return (
                        <Item key={item.imdbID} item={item} year={year||"noYear"} searchP={searchP||"bank"} />
                    )
                })}
            </div>

        </div>
    )
}
