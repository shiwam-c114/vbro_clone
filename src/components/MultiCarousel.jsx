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
        height: 300px;
        border-radius: 10px;
    }
    .title {
        width: 100%;
        font-weight: 600;
        color: #333;
        font-size: 1.2rem;
        margin: 10px 0;
        // word-break: break-word;
	
    }
    .genre {
        width: 100%;
        // word-break: break-word;
        color: rgb(102, 102, 102);
        font-size: .8rem;
        line-height: 1.5;
        font-weight: 550;
    }
    
`

const data1 = [
    {
        link: "https://i.ibb.co/x7pSDfx/8621e10e-7950-41b4-814e-8817969887f4-carousel-m.jpg",
        title: "Houses",
        genre: "View 369,925 houses"
    },
    {
        link: "https://i.ibb.co/FKwdtjp/397eabda-51d4-45d4-82c8-da3ad409ff84-carousel-m.jpg",
        title: "Apartments",
        genre: "View 223,796 Apratments"
    },
    {
        link: "https://i.ibb.co/9GRmQnR/5941b1e0-2600-4b2a-b27e-c667abf7e510-carousel-m.jpg",
        title: "Cabins",
        genre: "View 65,292 Cabins"
    },
    {
        link: "https://i.ibb.co/kq71b5V/adf45333-140a-40cf-987f-bc49b711c3d9-carousel-m.jpg",
        title: "Cottages",
        genre: "View 65,292 Cottages"
    },
    {
        link: "https://i.ibb.co/R05nb5D/9af508c6-3dd9-453f-9a0d-8726a705328d-carousel-m.jpg",
        title: "Bungalows",
        genre: "View 63,247 Bungalows"
    },
    {
        link: "https://i.ibb.co/Lkd3dhH/ae891341-b7bb-4ae2-a1f8-7c8e53d16c4e-carousel-m.jpg",
        title: "Studios",
        genre: "View 62,715 studios"
    },
    {
        link: "https://i.ibb.co/svBDYYz/b7cb1fe3-5876-48a3-b9e4-c9b24d9f96b1-carousel-m.jpg",
        title: "Townhouses",
        genre: "View 30,329 townhouses"
    },
    {
        link: "https://i.ibb.co/b1JFmtL/98f38230-8c19-4870-956a-16ae5f1d3abb-carousel-m.jpg",
        title: "Villas",
        genre: "View 15,320 villas"
    },
    {
        link: "https://i.ibb.co/K0Y0rV1/1968d338-8fb8-4140-b35a-c6690150e56f-carousel-m.jpg",
        title: "Hotels",
        genre: "View 14,623 hotels"
    },
    {
        link: "https://i.ibb.co/YBTM230/6337331e-5985-429b-800b-3e30a954c79d-carousel-m.jpg",
        title: "Resorts",
        genre: "View 14,540 resorts"
    },
    {
        link: "https://i.ibb.co/cLJFpcg/20dad83f-613f-4234-9f4d-49967a0962c8-carousel-m.jpg",
        title: "Guest Houses",
        genre: "View 3,338 guest houses"
    },
    {
        link: "https://i.ibb.co/VHpmWmr/41cd2272-cfd1-402d-948d-aabc9a4194c4-carousel-m.jpg",
        title: "Lodges",
        genre: "View 2,590 lodges"
    },
    {
        link:"https://i.ibb.co/hfdQRm4/ce4c7288-a90c-4d7c-b9ae-cc65eb20aee1-carousel-m.jpg",
        title:"Chalets",
        genre:"View 2,590 chalets"
    },

    {
        link:"https://i.ibb.co/tJN7xfS/5ecabea2-4991-452f-adde-0059f22d6295-carousel-m.jpg",
        title:"Carvans",
        genre:"View 2,524 carvans"
    },
    {
        link:"https://i.ibb.co/s1dbJCL/5d847691-3f5f-421a-ab4a-877fc1cce875-carousel-m.jpg",
        title:"Farmhouses",
        genre:"View 1,932 farmhouse"
    },
    {
        link:"https://i.ibb.co/PDGxbMf/b2b99355-b318-4a85-9afd-e37412730dbf-carousel-m.jpg",
        title:"Estates",
        genre:"View 1,532 estates"
    },
    {
        link:"https://i.ibb.co/6vjBcmx/59c4cc61-5d4b-47b5-be1b-a645df27a4c7-carousel-m.jpg",
        title:"Bed & breakfasts",
        genre:"View 1,332 bed & breakfasts"
    },
    {
        link:"https://i.ibb.co/wCSbWv7/bc7f3ffe-314f-433c-b3ae-798d43733252-carousel-m.jpg",
        title:"Country houses",
        genre:"View 748 country houses"
    },
    {
        link:"https://i.ibb.co/XFLgs25/b5885e85-5adb-4ffd-97c4-883ba90e9433-carousel-m.jpg",
        title:"Boats",
        genre:"View 480 boats"
    },
    {
        link:"https://i.ibb.co/JF4Dxqb/9d77bda2-44b7-487c-8462-e26827d28a48-carousel-m.jpg",
        title:"Barns",
        genre:"View 443 barns"
    },
    {
        link:"https://i.ibb.co/rHc12WL/5358555b-fabc-4199-99d1-3e7d65ab486e-carousel-m.jpg",
        title:"Houseboats",
        genre:"View 227 houseboats"
    },
    {
        link:"https://i.ibb.co/VpKmB6z/4ae68c58-3282-44d2-87df-c1d7e2b0cb01-carousel-m.jpg",
        title:"Yachts",
        genre:"View 97 yachts"
    },
    {
        link:"https://i.ibb.co/BVXgPRT/cedfc7f9-5683-48f6-8597-ddcb3ec1e125-carousel-m.jpg",
        title:"Castles",
        genre:"View 72 castles"
    },
    {
        link:"https://i.ibb.co/XxbbCdm/fce3e78e-b5bc-4e9c-8430-3c7d23764de8-carousel-m.jpg",
        title:"Towers",
        genre:"View 71 towers"
    },
]

const MultiCarousel = () => {
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
                    <h3>Find spaces that suit your style</h3>
                    {/* <Link to="/ncr/movies" className="link">See all <RiArrowRightSLine /></Link> */}
                </div>
                <div className="entertainment_container">
                    <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} autoPlay={true} >
                        {
                            data1?.map((image, index) => (
                                <Wrapper  key={index + 1}> 
                                    <img src={image.link} alt="Recommended" />
                                    <div className="title">{image.title}</div>
                                    <div className="genre">{image.genre}</div>
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

export default MultiCarousel
