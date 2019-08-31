import React, { Component } from 'react'
import carAPI from '../../carAPI'
import { BigThumb, BigThumbContainer, MiniThumb, Title, Info } from './styles'

class Detail extends Component {
      constructor () {
        super()

        this.state = {
            detailtitle: '',
            detailinfo: '',
            detailurl: '',
            detailid: ''
        }
      }

componentDidMount () {
    const { title } = this.props.location.state
    const { info } = this.props.location.state
    const { url } = this.props.location.state
    const { id } = this.props.location.state
    this.setState({ detailtitle: title,
                    detailinfo: info,
                    detailurl: url,
                    detailid: id
     })
}

      render () {
        return (
        <React.Fragment>
            <BigThumbContainer>
                <BigThumb>
                 <img alt="" style={{ height: '100%', width: '100%' }} src={this.state.detailurl}/>
                </BigThumb>
                <MiniThumb>
                 <img alt="" style={{ height: '100%', width: '100%', marginRight: '30px' }} src={carAPI[+1].url}/>
                 <img alt="" style={{ height: '100%', width: '100%', marginRight: '30px' }} src={carAPI[+2].url}/>
                 <img alt="" style={{ height: '100%', width: '100%', marginRight: '30px' }} src={carAPI[+3].url}/>
                 <img alt="" style={{ height: '100%', width: '100%', marginRight: '30px' }} src={carAPI[+4].url}/>
                 <img alt="" style={{ height: '100%', width: '100%', marginRight: '30px' }} src={carAPI[+5].url}/>
                </MiniThumb>
                <Title>
                 {this.state.detailtitle}
                </Title>
                <Info>
                 {this.state.detailinfo}
                </Info>
            </BigThumbContainer>
            </React.Fragment>
        )
      }
}

export default Detail
