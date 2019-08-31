import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

const DetailHead = () => (
    <React.Fragment>
        <Container>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>
               <FontAwesomeIcon style={{ fontSize: '80px' }} icon={faBackward} />
            </Link>
        </Container>
    </React.Fragment>
)

export default DetailHead
