import { Announce } from "../Components/Annonce";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios
      .get("http://52.65.160.119:8080/notification/list")
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
      });
  }, []);

  return (
    <Wrapper>
      <Announcements>
        <Write to="/AnnounceWrite">
          <img src="/imgs/Plus.svg" alt="img" />
          <h1>글 작성하기</h1>
        </Write>
        {announcements.map((announcement, index) => (
          <Announce
            key={index}
            id={`announce-${index}`}
            title={announcement.title}
            date={announcement.expiredAt}
          />
        ))}
      </Announcements>
    </Wrapper>
  );
};

const axios = require("axios");

axios.get("http://52.65.160.119:8080/notification/list", function (req, res) {
  res.send("Hello World");
});

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
