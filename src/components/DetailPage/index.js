import React, { Component } from 'react'

class Detail extends Component {
      constructor () {
        super()

        this.state = {
            detailtitle: '',
            detailinfo: '',
            detailurl: '',
            render: false
        }
      }

componentDidMount () {
    const { title } = this.props.location.state
    const { info } = this.props.location.state
    const { url } = this.props.location.state
    this.setState({ detailtitle: title,
                    detailinfo: info,
                    detailurl: url,
                    render: true
     })
}

      render () {
    console.log(this.state.detailurl)
        return (
        <React.Fragment>
        { this.state.render === true &&
            <div>
                {this.state.detailtitle}
                {this.state.detailinfo}
                <img alt="" style={{ height: '100%', maxWidth: '100%' }} src={'.' + this.state.detailurl}/>
            </div>
            }
            </React.Fragment>
        )
      }
}

export default Detail