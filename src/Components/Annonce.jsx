import styled from "styled-components";

const Announce = ({title, date}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Wrapper>
  );
};

export default Announce;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 1200px;
  height: 155px;
  background-color: white;
  border-radius: 0px 20px 20px 20px;
`;

const Title = styled.h1`
  margin: 0;
  margin-left: 130px;
  font-size: 40px;
  font-weight: 400;
`;

const Date = styled.h1`
  margin: 0;  
  margin-left: 130px;
  font-size: 20px;
  font-weight: lighter;
`;