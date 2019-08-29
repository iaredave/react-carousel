import styled from 'styled-components'

export const Header = styled.div`
    height: 20vh;
    background: #FFFFFF;
`;

export const Body = styled.div`
    height: 60vh;
    background-color: #FFFFFF;
    overflow: scroll;
    ::-webkit-scrollbar {display:none;}
    
`;

export const ThumbnailContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    -moz-box-shadow:inset 1px -1px 34px #111111;
	-webkit-box-shadow:inset 1px -1px 34px #111111;
	box-shadow:inset 1px -1px 70px #111111;
	border-radius: 2px;
`;

export const Footer = styled.div`
    height: 20vh;
    background: #FFFFFF;
`;
