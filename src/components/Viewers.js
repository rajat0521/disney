import React from 'react'
import styled from 'styled-components'


const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='' />
        <video src='/videos/disney.mp4' autoPlay={true} loop={true} playsInline={true} typeof='MP4'  ></video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-pixar.png' alt='' />
        <video src='/videos/pixar.mp4' autoPlay={true} loop={true} playsInline={true} typeof='MP4'  ></video>
        
      </Wrap>
      <Wrap>
        <img src='/images/viewers-marvel.png' alt='' />
        <video src='/videos/marvel.mp4' autoPlay={true} loop={true} playsInline={true} typeof='MP4'  ></video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-starwars.png' alt='' />
        <video src='/videos/starwars.mp4' autoPlay={true} loop={true} playsInline={true} typeof='MP4'  ></video>
      </Wrap>
      <Wrap>
        <img src='/images/viewers-national.png' alt='' />
        <video src='/videos/national.mp4' autoPlay={true} loop={true} playsInline={true} typeof='MP4'  ></video>
      </Wrap>
    </Container>
  )
}


const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr) );

    @media (max-width: 768px){
        grid-template-columns: repeat(1, minmax(0, 1fr) );
    }
`;

const Wrap =  styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb( 0 0 0 /69% ) 0px 26px 30px -10px ,rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 100ms cubic-bezier(0.25, 046, 0.45, 0.94) 0s;
    border: 3px solid rgb(249,249,249,0.1);
    transition: transform .5s;

    img{
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0%;
        opacity: 0;
        z-index: 0;
    }

    &:hover{
        box-shadow: rgb( 0 0 0 /69% ) 0px 26px 30px -10px ,rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
        transform: scale(1.35) ;
        border-color: rgba(249, 249, 249, 0.8);
        video{
            opacity: 1;
        }
    }

`


export default Viewers