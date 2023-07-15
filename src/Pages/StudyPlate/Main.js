import React from 'react';
import styled from 'styled-components';
import Nav from '../../Components/StudyPlate/Nav';
import CalTable from '../../Components/StudyPlate/CalTable';

function SpMain() {
    
    const noMargin = { margin: 0 }
    
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
                <CalTable day1="ㅤ" day2="2" day3="9" day4="16" day5="23" day6="30"/>
                <CalTable day1="ㅤ" day2="3" day3="10" day4="17" day5="24" day6="31"/>
                <CalTable day1="ㅤ" day2="4" day3="11" day4="18" day5="25" day6="ㅤ"/>
                <CalTable day1="ㅤ" day2="5" day3="12" day4="19" day5="26" day6="ㅤ"/>
                <CalTable day1="ㅤ" day2="6" day3="13" day4="20" day5="27" day6="ㅤ"/>
                <CalTable day1="ㅤ" day2="7" day3="14" day4="21" day5="28" day6="ㅤ"/>
                <CalTable day1="1" day2="8" day3="15" day4="22" day5="29" day6="ㅤ" end="true"/>
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
    border: transparent;
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