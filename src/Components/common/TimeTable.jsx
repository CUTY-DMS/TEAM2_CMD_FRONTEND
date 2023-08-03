import { styled } from "styled-components";

export const TimeTable = ({day, sub1, sub2, sub3, sub4, sub5, sub6, sub7}) => {
  return <Wrapper>
      <h1>{day}</h1>
    <Subject>{sub1}</Subject>
    <Subject>{sub2}</Subject>
    <Subject>{sub3}</Subject>
    <Subject>{sub4}</Subject>
    <Subject>{sub5}</Subject>
    <Subject>{sub6}</Subject>
    <Subject>{sub7}</Subject>
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