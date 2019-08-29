import styled from 'styled-components'

export const Thumb = styled.div`
  display: inline-block;
  margin: 5vw;
  height: 350px;
  width: 350px;
  overflow: hidden;
  padding: 2px;
  background-color: #AAAAAA;
  box-shadow: 10px 10px 10px grey; 
  margin-bottom: 0px;
  &:hover {
  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
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
     margin-bottom: 50px;
`;