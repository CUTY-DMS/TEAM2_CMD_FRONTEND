import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const User = ({ Class, Name, To }) => {
  return <Wrapper to={To}>
    <img src="/imgs/User.svg" alt="img" width="89" height="88" />
    <UserName>{Class} {Name}</UserName>
  </Wrapper>
}

const Wrapper = styled(Link)`
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