import React from "react";
import styled from "styled-components";
import safety from "../images/safety.png";
import cup from "../images/cup.png";
import space from "../images/space.png";
import heart from "../images/heart.png";

export default function Services() {
  const data = [
    {
      icon: safety,
      title: "Peace of mind",
      subTitle:
        "Our Book with Confidence guarantee gives you 24/7 support.",
    },
    {
      icon: cup,
      title: "All the privacy of home",
      subTitle:
        "Enjoy full kitchens, laundry, pools, yards and more.",
    },
    {
      icon: space,
      title: "More for less",
      subTitle:
        " More space, more privacy, more amenities — more value.",
    },
    {
      icon: heart,
      title: "A place for everyone",
      subTitle:
        "We stand for diversity, inclusion and families everywhere. ",
    },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
 width:80%;
 margin-left:12%;
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
      font-size:12px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: white;
    // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
   p{
       font-size:12px;
   }
    .icon {
      img {
        height: 2.4rem;
      }
    
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;