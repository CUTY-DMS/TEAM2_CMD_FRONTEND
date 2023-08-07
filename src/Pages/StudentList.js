import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import { User } from "../Components/User";
import { getStudentList } from "../apis/get/getStudentList";

export const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudentList().then(res => {
      if(res) {
        const data = localStorage.getItem("userInfo").split(',');
        let arr = res.data.currentStudent.sort((a, b) => a.number - b.number);
        arr.map(student => {
          if(student.grader === Number(data[0]) && student.schoolClass === Number(data[1])) {
            setStudents(students => [...students, student])
          }
        })
      }
    })
  }, [])

  return (
    <Wrapper>
      <Line>
        {
          students.length!==0
          ? students.map((student, index) => {
            return <User key={index} ID={student.userId} Class={`${student.grader}${student.schoolClass}${student.number.toString().padStart(2, '0')}`} Name={student.userName} />   
          })
          : <h1>로딩중...</h1>
        }
      </Line>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
`

const Line = styled.div`
  width: 60%;
  gap: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
`