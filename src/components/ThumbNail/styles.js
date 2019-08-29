import styled from 'styled-components'

export const Thumb = styled.div`
  display: inline-block;
  margin: 5vw;
  height: 350px;
  width: 350px;
  overflow: hidden;
  padding: 5px;
  background-color: #AAAAAA;
  box-shadow: 10px 10px 10px grey; 
  outline: 2px solid blue;
  &:hover {
  -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2);
  }
`;

export const Title = styled.div`
    display: inline-block;
    max-width: 10%;
    outline: 2px solid blue;
`;

export const Info = styled.div`
    display: inline-block;
    max-width: 5%;
    outline: 2px solid blue;
`;

export const Details = styled.div`
     display: inline;
`;