import styled from "styled-components";

const User = ({Class, Name}) => {
  return (
    <Wrapper>
      <UserIcon src="/imgs/User.svg" alt="User"/>
      <UserName>{Class} {Name}</UserName>
    </Wrapper>
  );
};

export default User;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    &:hover {
      cursor: pointer;
      background-color: #FFC744;
      border-radius: 15px;
    }
`;

const UserIcon = styled.img`
    width: 89px;
    height: 88px;
`;

const UserName = styled.div`
    font-weight: 400;
    font-size: 30px;
`;