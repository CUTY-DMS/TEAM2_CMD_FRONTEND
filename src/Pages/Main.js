import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { TimeTable } from '../Components/TimeTable';
import { getTimeTable } from '../apis/get/getTimeTable';
import { getWeekNumber } from '../utils/getWeekNumber';
import { getEndDate } from '../utils/getEndDate';


export const Main = () => {
  const days = ["월", "화", "수", "목", "금"];
  const date = new Date();
  const month = date.getMonth()+1;
  const weekNum = getWeekNumber();
  const [timeTable, setTimeTable] = useState([]);
  date.setDate(date.getDate() - (date.getDay() || 7) + 1);

  useEffect(() => {
    let day = Number(`${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2, "0")}${(date.getDate()).toString().padStart(2, "0")}`);
    for(let i = 0; i<5; i++) {
      let table = [i];
      if((day+1)%100 > getEndDate()) { day = day+100-(getEndDate()); }
      getTimeTable(day.toString(), 1, 3).then(res => {
        const arr = res.data.hisTimetable ? res.data.hisTimetable[1].row : undefined;
        for(let j = 0; j<7; j++) { table[j+1] = arr ? arr[j].ITRT_CNTNT : "-"; }
        setTimeTable(timeTable => [...timeTable, table]);
        day += 1;
      })
    }
  }, [])

  return <Wrapper>
    <Title>2023년 {month}월 {weekNum}주차</Title>
    <Table>
    {
      timeTable.length===5 ? (
        timeTable.sort().map((data, index) => {
          return <TimeTable key={index} Day={days[index]} Subs={data}/>
        })
      ) : (
        <h1>로딩중...</h1>
      )
    }
  </Table>
  </Wrapper>
}

const Wrapper = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
`

const Table = styled.div`
  gap: 25px;
  display: flex;
  justify-content: center;
`

const Title = styled.h1` font-size: 40px; `