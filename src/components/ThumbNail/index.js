import React, { Component } from 'react'
import { Thumb, Title, Info, Details } from './styles'
import { Link } from 'react-router-dom'

class ThumbNail extends Component {

    render () {
        return (
        <React.Fragment>
       { this.props.id < 3 &&
       <Details>
        <Thumb>
        <Link to={{ pathname: '/detailpage/' + this.props.title,
                state: {
                    title: this.props.title,
                    info: this.props.info,
                    url: this.props.url
                }
            }}>
             <img alt="" style={{ height: '100%', maxWidth: '100%' }} src={this.props.url}/>
         </Link>
         </Thumb>
         <Title>{this.props.title}</Title>
         <Info>{this.props.info}</Info>
         </Details>
        }
         </React.Fragment>
        )
    }
}

export default ThumbNail
