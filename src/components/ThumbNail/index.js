import React, { Component } from 'react'
import { Thumb, Image1, Thumb1 } from './styles'

class ThumbNail extends Component {

    render () {
        return (
        <React.Fragment>
       { this.props.id < 3 &&
        <Thumb>
             <img alt="" style={{ height: '100%', maxWidth: '100%' }}src={this.props.url}/>
         </Thumb>
        }
         </React.Fragment>
        )
    }
}

export default ThumbNail