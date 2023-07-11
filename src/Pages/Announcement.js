import React from 'react';
import styled from 'styled-components';
import Nav from '../Components/Nav';
import Announce from '../Components/Annonce';
import { Link } from 'react-router-dom';

function Announcement() {

    const noMargin = { margin: 0 }
    const disFlex = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }

    return (
        <Wrapper style={disFlex}>
            <Nav />
            <Announcements style={disFlex}>
                <Write>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={noMargin}>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 11.4477 0.447715 11 1 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H1C0.447715 13 0 12.5523 0 12Z" fill="black"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C12.5523 0 13 0.447715 13 1V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V1C11 0.447715 11.4477 0 12 0Z" fill="black"/>
                    </svg>
                    <StyledLink style={noMargin} to="/AnnounceWrite"><h1>글쓰기</h1></StyledLink>
                </Write>
                <Announce title="대충 제목들어갈 부분" date="2022.08.22 오전 12:48" />
                <Announce title="대충 제목들어갈 부분" date="2022.08.22 오전 12:48" />
                <Announce title="대충 제목들어갈 부분" date="2022.08.22 오전 12:48" />
            </Announcements>
        </Wrapper>
    )
}

export default Announcement;

const Wrapper = styled.div`
    margin: 0;
    width: 100%;
    height: 100vh;
`;

const Announcements = styled.div`
    gap: 30px;
    margin-top: 70px;
    width: 1200px;
`;

const Write = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    gap: 10px;
    margin: 0;
    margin-right: 1px;
    margin-top: 1px;
    font-size: 15px;
    font-weight: lighter;
    &:hover { cursor: pointer; }
`;

const StyledLink = styled(Link)`
  &:link, &:visited, &:hover { 
    text-decoration-line: none; 
    cursor: pointer; 
    color: #000; 
  }
`;