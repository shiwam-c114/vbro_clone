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
        link: "https://i.ibb.co/tQvrQrK/077dc3bc-f10.webp",
        title: "Destin",
        // genre: "View 369,925 houses"
    },
    {
        link: "https://i.ibb.co/6P2pTLm/canstockphoto24451467-750x500.jpg",
        title: "Orlando",
        // genre: "View 223,796 Apratments"
    },
    {
        link: "https://i.ibb.co/nM1838s/florida-key-west-best-beaches-smathers-beach.jpg",
        title: "Key West",
        // genre: "View 65,292 Cabins"
    },
    {
        link: "https://i.ibb.co/qdSt5JM/beaches.png",
        title: "Maui",
        // genre: "View 65,292 Cottages"
    },
    {
        link: "https://i.ibb.co/zGHRW6c/holiday-inn-resort-panama-city-beach-6482208681-4x3.jpg",
        title: "Panama City Beach",
        // genre: "View 63,247 Bungalows"
    },
    {
        link: "https://i.ibb.co/fGvpNp8/7a0f907e22aec36c1afe6d28d00ff02f.webp",
        title: "Fort Myers Beach",
        // genre: "View 62,715 studios"
    },
    {
        link: "https://i.ibb.co/6ZMcPTY/Gulf-Shores-Alabama-Vacation-Packages.jpg",
        title: "Gulf Shores",
        // genre: "View 30,329 townhouses"
    },
    {
        link: "https://i.ibb.co/7brxnSB/Ferris-Wheel-Myrtle-Beach-South-Carolina-1200x853.jpg",
        title: "Myrtle Beach",
        // genre: "View 15,320 villas"
    },

   
   
   
]

const MultiCarousel3 = () => {
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
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <>
            <Div>
                <div className="contentText">
                    <h3>Best places in the United States for going to the beach</h3>
                    {/* <Link to="/ncr/movies" className="link">See all <RiArrowRightSLine /></Link> */}
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

export default MultiCarousel3