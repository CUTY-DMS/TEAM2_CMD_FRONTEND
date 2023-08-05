import { Announce } from '../Components/common/Annonce';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

export const Announcement = () => {
  return <Wrapper>
    <Announcements>
      <Write to="/AnnounceWrite">
        <img src="/imgs/Plus.svg" alt="img" />
        <h1>글 작성하기</h1>
      </Write>
      <Announce title="대충 제목들어갈 부분" date="2022.08.22 오전 12:48" />
    </Announcements>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 70px;
`

const Announcements = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65%;
`

const Write = styled(Link)`
  gap: 10px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: center; 
  padding: 5px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 15px;
  color: black; 
  font-size: 15px; 
  &:hover { background: #FFC744; }
`