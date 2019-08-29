import React from 'react'
import { Route } from 'react-router-dom'
import Detail from './components/DetailPage/index'
import Slider from './components/Slider/index'
import cars from './carAPI'
import { Header, Body, Footer, ThumbnailContainer } from './components/HomePage/styles'

const App = () => (
    <React.Fragment>
        <Header>

        </Header>
        <Body>
            <ThumbnailContainer>
                <Route exact path='/' component={Slider}/>
            </ThumbnailContainer>
            <Route path='/detailpage/:title' render={({ match }) => (
                <Detail
                    key={match.params.id}
                    id={match.params.id}
                    title={cars[match.params.id].title}
                    info={cars[match.params.id].info}
                />
            )} />
        </Body>
        <Footer>

        </Footer>
    </React.Fragment>
)

export default App
