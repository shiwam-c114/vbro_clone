import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Card(props) {
    let {bedrooms, sleeps,  rating, price,id,image, name, distance,beds} = props

    const Cardbody = styled.div`
    display: flex;
    `
    const Img = styled.div`
    padding: 10px;
    flex: 4;
    `
    const Detail = styled.div`
    padding: 10px;
    flex:5;
    `
    const Rating = styled.div`
    
    `


  return (
    <div >
        <hr />
    <Link to={"/Featured"}>
    <Cardbody>
        <Img><img style={{"min-width": "100%", "border-radius":"5px"}} src={image} alt="" /></Img>
        <Detail>
            <p>apartment</p>
            <h3>{name}</h3>
            <p>sleeps {sleeps} . {bedrooms} bedrooms </p>
            <div style={{"padding-top": "50px", "display":"flex", "justify-content": 'space-between'}} >
                <p>⭐{rating}</p>
                <h3>${price}avg/night</h3>
                </div>    
        </Detail>
    </Cardbody>    
    </Link>
    </div>
  )
}

export default Card