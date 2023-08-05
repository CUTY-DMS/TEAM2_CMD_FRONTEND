import { styled } from "styled-components";

export const Announce = ({title, date}) => {
  return <Wrapper>
    <Title>{title}</Title>
    <Date>{date}</Date>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 155px;
  cursor: pointer;
  background: white;
  border-radius: 0px 20px 20px 20px;
`

const Title = styled.h1`
  margin-left: 10%;
  font-size: 40px;
  font-weight: 400;
`

const Date = styled.h1` 
  margin-left: 10%;
  font-size: 20px;
  font-weight: lighter;
`;