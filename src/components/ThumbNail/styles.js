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
  margin-bottom: -5px;
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
`;

export const Info = styled.div`
@media (min-width: 1100px) {
    width: 500px;
    white-space: wrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    margin-left: 40px;
  }
@media (max-width: 600px) {
    width: 100%;
    padding: 0 40px 0 40px;
}
`;

export const Details = styled.div`
     display: inline-block;
`;