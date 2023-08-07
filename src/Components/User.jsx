import { styled } from "styled-components";

export const User = ({ Class, Name, ID }) => {
  return <Wrapper onClick={() => window.location.href = `/StudentDetail/${ID}`}>
    <img src="/imgs/User.svg" alt="img" width="90" height="90" />
    <UserName>{Class} {Name}</UserName>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 15px;
  color: black;
  &:hover { background: #FFC744; }
`

const UserName = styled.div`
  font-size: 29px;
  font-weight: 600;
`