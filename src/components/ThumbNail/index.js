import React, { Component } from 'react'
import { Thumb } from './styles'

class ThumbNail extends Component {

    render () {
        return (
        <React.Fragment>
       { this.props.id < 3 &&
        <Thumb>
             <img alt="" style={{ maxWidth: '100%', height: '100%' }}src={this.props.url}/>
         </Thumb>
        }
         </React.Fragment>
        )
    }
}

export default ThumbNail