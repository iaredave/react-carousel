import styled from 'styled-components'

export const BigThumb = styled.div`
  display: block;
  margin: auto;
  height: 450px;
  width: 750px;
  overflow: hidden;
  padding: 2px;
  background-color: #aaaaaa;
  box-shadow: 10px 10px 10px grey;
  margin-bottom: 0px;
  &:hover {
    background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
  }
`

export const BigThumbContainer = styled.div``

export const MiniThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 150px;
  width: 150px;
  padding: 20px;
  @media (max-width: 600px) {
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-family: 'Helvetica', bold;
`

export const Info = styled.div`
  @media (min-width: 1100px) {
    width: 500px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    margin: auto;
  }
  @media (max-width: 600px) {
    width: 100%;
    padding: 0 40px 0 40px;
  }
  font-family: 'Garamond', bold;
`
