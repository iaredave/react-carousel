import React from 'react'
import { Route } from 'react-router-dom'
import Detail from './components/DetailPage/index'
import Slider from './components/Slider/index'
import Head from './components/HomeHeader/index'
import DetailHead from './components/DetailHeader/index'
import {
  Header,
  Body,
  Footer,
  ThumbnailContainer,
  DetailContainer,
} from './components/HomePage/styles'

const App = () => (
  <React.Fragment>
    <Header>
      <Route exact path='/' component={Head} />
      <Route exact path='/detailpage/:id' component={DetailHead} />
    </Header>
    <Body>
      <ThumbnailContainer>
        <Route exact path='/' component={Slider} />
      </ThumbnailContainer>
      <DetailContainer>
        <Route path='/detailpage/:id' component={Detail} />
      </DetailContainer>
    </Body>
    <Footer></Footer>
  </React.Fragment>
)

export default App
