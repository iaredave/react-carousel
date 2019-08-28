import styled from 'styled-components'

export const Header = styled.div`
    height: 20vh;
    background: #232526;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;

export const Body = styled.div`
    height: 60vh;
    background-color: #AAAAAA;
    overflow: scroll;
    ::-webkit-scrollbar {display:none;}
`;

export const ThumbnailContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Footer = styled.div`
    height: 20vh;
    background: #232526;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;
