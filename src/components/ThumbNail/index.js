import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Thumb } from './styles'

class ThumbNail extends Component {
  constructor () {
    super()

    this.state = {
        numberOfCars: 0,
        carsRendered: 0
    }
  }

    toggleRightArrow = (event) => {
        console.log('hey')
}

    componentDidMount() {
        this.setState({ numberOfCars: this.props.id + 1 })
}

    componentDidUpdate() {

}

  render () {
    return (
        <React.Fragment>
                <div>
                       { this.state.numberOfCars < 4 &&
                      <Link to={'/detailpage/' + this.props.id}>
                        {this.props.title}
                      </Link>
                      }
                      <div onClick={this.toggleRightArrow}>
                                  lul
                      </div>
                  </div>
        </React.Fragment>
    )
  }
}

export default ThumbNail
