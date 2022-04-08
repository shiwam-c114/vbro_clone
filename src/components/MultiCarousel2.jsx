import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from "styled-components";

const Div = styled.div`
    margin: 50px 0px;
    .contentText {
        width: 78%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .contentText h3 {
        font-weight: 600;
        margin-bottom: 0px;
    }
    .contentText .link {
        font-size: 18px;
        color: black;
    }
    .entertainment_container {
        width: 80%;
        // margin: auto;
        margin-left: 11%;
        margin-top: 1%
    }
`

const Wrapper = styled.div`
    width: 80%;
    margin: 0px;
    font-family: Roboto, sans-serif;
    transition: .3s;
    cursor: pointer;

    img {
        width: 200px;
        height: 200px;
        border-radius: 10px;
    }
    .title {
        width: 100%;
        font-weight: 600;
        color: black;
        font-size: 0.9rem;
        margin: 10px 0;
        // word-break: break-word;
	
    }
    
`

const data1 = [
    {
        link: "https://i.ibb.co/10kNR8v/47a2821d-b39f-4e92-b17d-b3dbfb79510f-hw6.jpg",
        title: "Pigeon Forge",
        // genre: "View 369,925 houses"
    },
    {
        link: "https://i.ibb.co/gW8nVNX/93c6235b-8531-4459-8913-aabb47fa7bb5-hw6.jpg",
        title: "Gatlinburg",
        // genre: "View 223,796 Apratments"
    },
    {
        link: "https://i.ibb.co/GWB2pN0/03dc5f84-db9b-4fb1-a952-a250e9b69344-hw6.jpg",
        title: "Orlando",
        // genre: "View 65,292 Cabins"
    },
    {
        link: "https://i.ibb.co/Dg2cMjG/ee96f6ac-b184-49e3-a9d5-42c1a54e57e1-hw6.jpg",
        title: "Key West",
        // genre: "View 65,292 Cottages"
    },
    {
        link: "https://i.ibb.co/fGKDLct/56d73b61-1f5a-4090-8359-24895c545e5e-hw6.jpg",
        title: "Maui",
        // genre: "View 63,247 Bungalows"
    },
    {
        link: "https://i.ibb.co/v1qLDZJ/287e0258-a839-40fd-9ef2-aecb689f3a0d-hw6.jpg",
        title: "Pocono Mountains",
        // genre: "View 62,715 studios"
    },
    {
        link: "https://i.ibb.co/sH75BCW/d41b04fd-4c3b-4351-af6f-cc468b71ebe7-hw6.jpg",
        title: "Myrtle Beach",
        // genre: "View 30,329 townhouses"
    },
    {
        link: "https://i.ibb.co/tKxVsG5/0faee1fb-8bf6-4129-a5c4-2a8a73fa04a1-hw6.jpg",
        title: "Big Bear Lake",
        // genre: "View 15,320 villas"
    },

   
   
   
]

const MultiCarousel2 = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
            slidesToSlide: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 300, min: 150 },
            items: 2,
            slidesToSlide: 2
        }
    };
    return (
        <>
            <Div>
                <div className="contentText">
                    <h3>Best places in the United States for nature</h3>
                    
                </div>
                <div className="entertainment_container">
                    <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={true} >
                        {
                            data1?.map((image, index) => (
                                <Wrapper  key={index + 1}> 
                                    <img src={image.link} alt="Recommended" />
                                    <div className="title">{image.title}</div>
                                    {/* <div className="genre">{image.genre}</div> */}
                                </Wrapper>
                            ))
                        }
                    </Carousel>
                    {/* <CommonCarousel event={data1}/> */}
                </div>
            </Div>
        </>
    )
}

export default MultiCarousel2