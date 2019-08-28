import React, { Component } from 'react'
import ThumbNail from '../ThumbNail/index'
import lul from '../../carAPI'
// import update from 'immutability-helper'
// const arrayMove = require('array-move')

class Slider extends Component {
  constructor () {
    super()

    this.state = {
        carArray: lul,
        newArray: [0, 1],
        totalCars: lul.length,
        true: true,
        pictures: lul.map((cars, index) => (
                      <ThumbNail
                            id={index}
                            key={cars.title}
                            title={cars.title}
                            info={cars.info}
                            url={cars.url}
                        />
                    )),
        rightCounter: 1,
        leftCounter: -1
    }
  }

    toggleLeftArrow = () => {
        this.setState({ true: false,
         newArray: this.state.carArray.slice(this.state.leftCounter).concat(this.state.carArray.slice(0, this.state.leftCounter)),
          leftCounter: this.state.leftCounter - 1,
          rightCounter: this.state.leftCounter + 1,
          })
}

    toggleRightArrow = () => {
        this.setState({ true: false,
         newArray: this.state.carArray.slice(this.state.rightCounter).concat(this.state.carArray.slice(0, this.state.rightCounter)),
          rightCounter: this.state.rightCounter + 1,
          leftCounter: this.state.leftCounter + 1
          })
}

  render () {
  const pic = this.state.newArray.map((cars, index) => (
                        <ThumbNail
                              id={index}
                              key={cars.title}
                              title={cars.title}
                              info={cars.info}
                              url={cars.url}
                          />
                      ))

    return (
    <React.Fragment>
       <div onClick={this.toggleLeftArrow}>
            Left
       </div>
            { this.state.true === true ? (
            <div>
                {this.state.pictures}
            </div>
            ) : (
            <div>
               {pic}
             </div>
             )}
        <div onClick={this.toggleRightArrow}>
            Right
        </div>
     </React.Fragment>
    )
  }
}

export default Slider
