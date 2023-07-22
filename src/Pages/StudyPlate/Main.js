import React from 'react';
import styled from 'styled-components';
import Nav from '../../Components/StudyPlate/Nav';
import CalTable from '../../Components/StudyPlate/CalTable';
const date = new Date();
let i = 1;
let month = date.getMonth()+1;
let cal = [];

function SpMain() {
    
    const noMargin = { margin: 0 }
    for(let n = 0; n<42; n++) { cal.push("ㅤ"); }

    const CalSet = () => {
        const startDay = new Date((date.getFullYear())+'-'+(Number(date.getMonth())+1)+'-1').getDay();
        let cnt = startDay;
        if(month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12) { month=31; }
        else if(month===4 || month===6 || month===9 || month===11) { month=30; }
        else { month=28; }
        while(i<=month) {
            cal[cnt]=i;
            i++;
            cnt++;
        }
    }

    CalSet();

    return (
        <Wrapper>
            <Nav />
            <Title>JULY 2023</Title>
            <Days>
                <Day><h1 style={noMargin}>SUN</h1></Day>
                <Day><h1 style={noMargin}>MON</h1></Day>
                <Day><h1 style={noMargin}>TUE</h1></Day>
                <Day><h1 style={noMargin}>WED</h1></Day>
                <Day><h1 style={noMargin}>THR</h1></Day>
                <Day><h1 style={noMargin}>FRI</h1></Day>
                <Day><h1 style={noMargin}>SAT</h1></Day>
            </Days>
            <Calander>
                <CalTable day1={cal[0]} day2={cal[7]} day3={cal[14]} day4={cal[21]} day5={cal[28]} day6={cal[35]}/>
                <CalTable day1={cal[1]} day2={cal[8]} day3={cal[15]} day4={cal[22]} day5={cal[29]} day6={cal[36]}/>
                <CalTable day1={cal[2]} day2={cal[9]} day3={cal[16]} day4={cal[23]} day5={cal[30]} day6={cal[37]}/>
                <CalTable day1={cal[3]} day2={cal[10]} day3={cal[17]} day4={cal[24]} day5={cal[31]} day6={cal[38]}/>
                <CalTable day1={cal[4]} day2={cal[11]} day3={cal[18]} day4={cal[25]} day5={cal[32]} day6={cal[39]}/>
                <CalTable day1={cal[5]} day2={cal[12]} day3={cal[19]} day4={cal[26]} day5={cal[33]} day6={cal[40]}/>
                <CalTable day1={cal[6]} day2={cal[13]} day3={cal[20]} day4={cal[27]} day5={cal[34]} day6={cal[41]} end="true"/>
            </Calander>
        </Wrapper>
    )
}

export default SpMain;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 0px;
    width: 100%;
    height: 100vh;
    background-color: #7CF07C;
`;

const Title = styled.h1`
    font-family: paytone one;
    font-size: 65px;
    margin: 0;
`;

const Calander = styled.div`
    display: flex;
    width: 1400px;
    height: 600px;
    background-color: white;
    border-radius: 20px;
`;

const Days = styled.div`
    display: flex;
    font-family: inter;
    margin-top: 10px;
    gap: 14px;
`;

const Day = styled.div`
    display: block;
    width: 185px;
    text-align: center;
    font-family: "inter", sans serif;
`