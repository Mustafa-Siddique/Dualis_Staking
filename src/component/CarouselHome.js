import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import client from '../client';
import {Link} from 'react-router-dom'

export default function CarouselHome() {

    const [safuProject, setSafuProject] = useState([])

    useEffect(() => {
        client.fetch(
            `*[_type == "lprojects" && trappoints == 0] {
                name,
                tracker,
                slug,
                id,
                image{
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
            }`
        ).then((data) => setSafuProject(data)).catch(console.error)
    }, []);

    const renderProjects = (safuProject, index) => {
        return (
            <div className='d-flex shadow-sm justify-content-evenly p-2 item' key={index}>
                <img src={safuProject.image.asset.url} alt='' />
                <Link style={{textDecoration:"none", color:"#000", fontSize:"16px"}} to={{ pathname: `/safehaven/safuprojects/${safuProject.slug.current}/${safuProject.id}`, state:{id:safuProject.id}}}><span className='m-auto'>{safuProject.name.length > 15 ? safuProject.name.slice(0,15) + "...": safuProject.name}</span></Link>
            </div>
        )
    }

    return (
        <div id="carousel-container">
            {/* LISTED TOKENS SLIDER */}
            <div className="token-slider py-5 mx-auto">
                <div className="f-slider">
                    <Slider
                        dots={false}
                        slidesToShow={4}
                        slidesToScroll={1}
                        autoplay={true}
                        rows={1}
                        autoplaySpeed={3000}
                        responsive={[
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 3,
                                    infinite: true,
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 3,
                                    initialSlide: 2,
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 2,
                                }
                            }
                        ]}
                    >
                        {safuProject.map(renderProjects)}
                    </Slider>
                </div>
            </div>
        </div>
    )
}