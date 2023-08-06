import { styled } from "styled-components";

export const TimeTable = ({ Day, Subs }) => {
  return <Wrapper>
    <h1>{Day}</h1>
    {
      Subs.map((data, index) => {
        if(index!==0) return <Subject key={index-1}>{data}</Subject>
      })
    }
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  height: 650px;
  background: white;
  border-radius: 10px;
`

const Subject = styled.h1`
  display: block;
  font-size: 30px;
  color: #585858;
`