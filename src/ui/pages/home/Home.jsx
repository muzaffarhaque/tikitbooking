import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import "./home.scss"
import {Nav} from "../../components"
import {Slide} from 'react-slideshow-image';
import img from "../../../assets/product-hero-desk.png"
import 'react-slideshow-image/dist/styles.css'
// import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';

const slideImages = [
    {
        url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid' +
                '=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 1'
    }, {
        url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid' +
                '=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
        caption: 'Slide 2'
    }, {
        url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid' +
                '=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 3'
    }
];
export default function Home() {
  const navigate = useNavigate();
    const [checknames,
        setChecknames] = useState({Dutch: false, English: false, Japanese: false,Legal:false,Sports:false,Comedy:false})
    const {Dutch, English, Japanese,Legal,Sports,Comedy} = checknames;
    const [checkboxes,
        setCheckboxes] = useState([]);
    let [data,
        setData] = useState();

    async function getdata() {
        const info = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const responce = await info.json();
        setData(responce);
     
    }
    useEffect(() => {
        getdata()
    }, [])
    useEffect(() => {
        console.log(checknames)
    }, [checknames])
    const handleCheckboxChange = (event, checkboxValue) => {
        const isChecked = event.target.checked;
        setChecknames({
            ...checknames,
            [event.target.name]: event.target.checked
        })
        if (isChecked) {
            setCheckboxes([
                ...checkboxes,
                checkboxValue
            ]);
        } else {
            setCheckboxes(checkboxes.filter(value => value !== checkboxValue));
        }

    };
    function callfilter(data) {
        let res = data?.filter(item => checkboxes?.includes(item.show.language) || checkboxes?.some((item2)=> item.show.genres.includes(item2)))
        console.log(checkboxes)
        console.log(res)
        if (res
            ?.length != 0) {
            return res;
        } else {
            return data;
        }
    }
    return (
        <div>
            <Nav/>
            <section className='image-slider-section'>

                <div className="slide-container">
                    <Slide>
                        {slideImages.map((slideImage, index) => (
                            <div key={index}>
                                <div
                                    className='baground-slider'
                                    style={{
                                    'backgroundImage': `url(${slideImage.url})`
                                }}></div>
                            </div>
                        ))}
                    </Slide>
                </div>
            </section>

            {/* =================================== HOWM MAIN SECION START  ==================================== */}
            <section className='home-main-section'>
                <div className="container">
                    <div className="home-sub-frame">
                        <div className="filter-frame">
                            <h2 className='fs-49-30'>Filters</h2>
                            <div className="filter-box-language">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Languages</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="select-language-frame">
                                                <div
                                                    className={Dutch
                                                    ? "mk-dark-box"
                                                    : "language-wrapper"}>
                                                    <input
                                                        type="checkbox"
                                                        name="Dutch"
                                                        value="Dutch"
                                                        checked={checkboxes.includes('Dutch')}
                                                        onChange={(e) => handleCheckboxChange(e, 'Dutch')}
                                                        id="Dutch"/>
                                                    <label htmlFor="Dutch">Dutch</label>
                                                </div>
                                                <div
                                                    className={English
                                                    ? "mk-dark-box"
                                                    : "language-wrapper"}>
                                                    <input
                                                        type="checkbox"
                                                        name="English"
                                                        value="English"
                                                        checked={checkboxes.includes('English')}
                                                        onChange={(e) => handleCheckboxChange(e, 'English')}
                                                        id="English"/>
                                                    <label htmlFor="English">English</label>
                                                </div>
                                                <div
                                                    className={Japanese
                                                    ? "mk-dark-box"
                                                    : "language-wrapper"}>
                                                    <input
                                                        type="checkbox"
                                                        name="Japanese"
                                                        value="Japanese"
                                                        checked={checkboxes.includes('Japanese')}
                                                        onChange={(e) => handleCheckboxChange(e, 'Japanese')}
                                                        id="Japanese"/>
                                                    <label htmlFor="Japanese">Japanese</label>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Drama</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="select-language-frame">
                                                <div className={Legal
                                                    ? "mk-dark-box"
                                                    : "language-wrapper"}>
                                                    <input
                                                        type="checkbox"
                                                        name="Legal"
                                                        value="Legal"
                                                        checked={checkboxes.includes('Legal')}
                                                        onChange={(e) => handleCheckboxChange(e, 'Legal')}
                                                        id="Legal"/>
                                                    <label htmlFor="Legal">Legal</label>
                                                </div>
                                                <div className={Sports
                                                    ? "mk-dark-box"
                                                    : "language-wrapper"}>
                                                    <input
                                                        type="checkbox"
                                                        name="Sports"
                                                        value="Sports"
                                                        checked={checkboxes.includes('Sports')}
                                                        onChange={(e) => handleCheckboxChange(e, 'Sports')}
                                                        id="Sports"/>
                                                    <label htmlFor="Sports">Sports</label>
                                                </div>
                                                <div className={Comedy
                                                    ? "mk-dark-box"
                                                    : "language-wrapper"}>
                                                    <input
                                                        type="checkbox"
                                                        name="Comedy"
                                                        value="Comedy"
                                                        checked={checkboxes.includes('Comedy')}
                                                        onChange={(e) => handleCheckboxChange(e, 'Comedy')}
                                                        id="Comedy"/>
                                                    <label htmlFor="Comedy">Comedy</label>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                            </div>
                        </div>
                        <div className="move-card-frame">
                            <h2 className='fs-49-30'>Movie in Place</h2>
                            <div className="movies-card-wrapper">
                                {callfilter(data)
                                    ?.map((item, i) => {
                                        return (
                                            <div key={i} className="card-box" onClick={()=>navigate("./move",{state:{item}})}>
                                                <img
                                                    src={item.show.image
                                                    ?.original}
                                                    alt=""/>
                                                <h2 className='fs-26-20 mt-4'>{item.show.name}</h2>
                                                <div className="rating-status mt-4 d-flex aligin-item-center  ">
                                                    <div className="w-50 fs-22-16">
                                                        <span className='black-2f2'>Reating</span>
                                                        : {item.show.rating.average == null
                                                            ? Math.floor(Math.random() * 6).toFixed(1)
                                                            : item.show.rating.average}</div>
                                                    <div className="w-50 fs-22-16">
                                                        <span className='black-2f2'>Status</span>
                                                        :{item.show.status}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =================================== HOWM MAIN SECION END  ==================================== */}

        </div>
    )
}
