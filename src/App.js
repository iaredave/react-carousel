import React from 'react'
import { Route } from 'react-router-dom'
import ThumbNail from './components/ThumbNail/index'
import Detail from './components/DetailPage/index'
import cars from './carAPI'
import { Header, Body, Footer, ThumbnailContainer } from './components/HomePage/styles'

const App = () => (
    <React.Fragment>
        <Header>

        </Header>
        <Body>
            <ThumbnailContainer>
                <Route exact path='/' render={() => (
                    <div>
                        {cars.map((cars, index) => (
                            <ThumbNail
                                id={index}
                                key={cars.title}
                                title={cars.title}
                                info={cars.info}
                            />
                        ))}
                    </div>
                )}
                />
            </ThumbnailContainer>
            <Route path='/detailpage/:id' render={({ match }) => (
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
