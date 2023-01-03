import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Recommends from './Recommends'
import Viewers from './Viewers'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'
import { useDispatch, useSelector } from "react-redux"
import db from "../firebase"
import { setMovies } from '../features/movies/movieSlice'
import { selectUserName } from '../features/user/userSlice'


const Home = () => {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let RECOMMEND = [];
  let NEWDISNEY = [];
  let ORIGINAL = [];
  let TRENDING = [];

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        // console.log(doc.data())
        switch(doc.data().type){
          case 'recommend':
            RECOMMEND=[...RECOMMEND, {id: doc.id, ...doc.data()} ]
            break;
          case 'new':
            NEWDISNEY=[...NEWDISNEY, {id: doc.id, ...doc.data()} ]
            break;
          case 'original':
            ORIGINAL=[...ORIGINAL, {id: doc.id, ...doc.data()} ]
            break;
          case 'trending':
            TRENDING=[...TRENDING, {id: doc.id, ...doc.data()} ]
            break;
        }
      });
    
      dispatch(setMovies({
        recommend: RECOMMEND,
        newDisney: NEWDISNEY,
        originals: ORIGINAL,
        trending: TRENDING
      }))

    });
  }, [userName])
  

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc( 100vh - 250px );
  overflow: hidden;
  display: block;
  top: 72px;
  padding: 0 calc( 3.5vw + 5px );

  &:after{
    background:  url('/images/home-background.png') center center / cover no-repeat fixed ;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`

export default Home
