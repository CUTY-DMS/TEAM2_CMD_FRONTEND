import styled from "styled-components";

const User = () => {
  return (
    <Wrapper>
      <UserIcon src="/imgs/User.svg" alt="User"/>
      <UserName>1201김이름</UserName>
    </Wrapper>
  );
};

export default User;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const UserIcon = styled.img`
    width: 89px;
    height: 88px;
`;

const UserName = styled.div`
    font-weight: 400;
    font-size: 35px;
`;