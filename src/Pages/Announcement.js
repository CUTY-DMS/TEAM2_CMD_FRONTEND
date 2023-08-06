import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { getNotiList } from "../apis/get/getNotiList";
import { Announce } from "../Components/Annonce";

export const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getNotiList().then(res => {
      if(res) setAnnouncements(announcements => [...announcements, res.data])
    })
  }, [])

  return <Wrapper>
    <Announcements>
      <Write to="/AnnounceWrite">
        <img src="/imgs/Plus.svg" alt="img" />
        <h1>글 작성하기</h1>
      </Write>
      {
        announcements.length!==0 ? ( 
          announcements[0].map((announcement, index) => (
            <Announce
              key={index}
              id={announcement.id}
              title={announcement.title}
            />
          ))
        ) : ( 
          <h1>로딩중...</h1>
        )
      }
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
`;

const Announcements = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65%;
`;

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
  &:hover {
    background: #ffc744;
  }
`;
