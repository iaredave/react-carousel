import React from 'react'
import {Route} from 'react-router-dom'
import Detail from './components/DetailPage/index'
import Slider from './components/Slider/index'
import {Header, Body, Footer, ThumbnailContainer} from './components/HomePage/styles'

const App = () => (
	<React.Fragment>
		<Header>

		</Header>
		<Body>
			<ThumbnailContainer>
				<Route exact path='/' component={Slider}/>
			</ThumbnailContainer>
			<Route path='/detailpage/:id' component={Detail}/>
		</Body>
		<Footer>

		</Footer>
	</React.Fragment>
);

export default App
