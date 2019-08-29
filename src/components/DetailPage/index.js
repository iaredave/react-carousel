import React, { Component } from 'react'

class Detail extends Component {
      constructor () {
        super()

        this.state = {
            detailtitle: '',
            detailinfo: ''
        }
      }

componentDidMount () {
    const { title } = this.props.location.state
    const { info } = this.props.location.state
    this.setState({ detailtitle: title,
                    detailinfo: info
     })

}
      render () {

        return (
            <div>
                {this.state.detailtitle}
                {this.state.detailinfo}
            </div>
        )
      }
}

export default Detail