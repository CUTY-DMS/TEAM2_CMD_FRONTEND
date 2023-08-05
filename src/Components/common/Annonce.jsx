import { styled } from "styled-components";

export const Announce = ({id, title}) => {
  const handleClick = () => {
    window.location.href = `/AnnounceRead/${id}`
  }

  return <Wrapper onClick={handleClick}>
    <Title>{title}</Title>
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