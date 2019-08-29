import styled from 'styled-components'

export const LeftArrow = styled.div`
   &:hover {
  -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
        cursor: pointer;
  }
  @media (max-width: 600px) {
    position: absolute;
    top: 0;
}
`;

export const RightArrow = styled.div`
   &:hover {
  -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
        cursor: pointer;
  }
  @media (max-width: 600px) {
    position: absolute;
    bottom: 0;
    this.props.icon = 'hi';
}
`;