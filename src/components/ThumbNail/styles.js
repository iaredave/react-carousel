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
    display: flex;
    align-items: center;
    justify-content: center;
    
    outline: 2px solid blue;
`;

export const Info = styled.div`
@media (min-width: 1100px) {
    width: 500px;
    white-space: wrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
  }
  font-size: 16px;
    outline: 2px solid blue;
`;

export const Details = styled.div`
     display: inline-block;
`;