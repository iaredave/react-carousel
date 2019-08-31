import React, { Component } from 'react'
import { BigThumb, BigThumbContainer, MiniThumb, Title, Info } from './styles'

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
        return (
        <React.Fragment>
        { this.state.render === true &&
            <BigThumbContainer>
                <BigThumb>
                 <img alt="" style={{ height: '100%', width: '100%' }} src={this.state.detailurl}/>
                </BigThumb>
                <MiniThumb>
                 <img alt="" style={{ height: '100%', width: '100%', marginRight: '10px' }} src={this.state.detailurl}/>
                 <img alt="" style={{ height: '100%', width: '100%', marginRight: '10px' }} src={this.state.detailurl}/>
                 <img alt="" style={{ height: '100%', width: '100%', marginRight: '10px' }} src={this.state.detailurl}/>
                 <img alt="" style={{ height: '100%', width: '100%', marginRight: '10px' }} src={this.state.detailurl}/>
                 <img alt="" style={{ height: '100%', width: '100%', marginRight: '10px' }} src={this.state.detailurl}/>
                </MiniThumb>
                <Title>
                 {this.state.detailtitle}
                </Title>
                <Info>
                 {this.state.detailinfo}
                </Info>
            </BigThumbContainer>
            }
            </React.Fragment>
        )
      }
}

export default Detail
