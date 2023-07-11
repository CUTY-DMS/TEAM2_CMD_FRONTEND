import styled from "styled-components";

const TimeTable = ({day, sub1, sub2, sub3, sub4, sub5, sub6, sub7}) => {
    
    const noMargin = { margin: 0 }
    
    return (
        <Wrapper>
            <h1 style={noMargin}>{day}</h1>
            <Subject style={noMargin}>{sub1}</Subject>
            <Subject style={noMargin}>{sub2}</Subject>
            <Subject style={noMargin}>{sub3}</Subject>
            <Subject style={noMargin}>{sub4}</Subject>
            <Subject style={noMargin}>{sub5}</Subject>
            <Subject style={noMargin}>{sub6}</Subject>
            <Subject style={noMargin}>{sub7}</Subject>
        </Wrapper>
    );
};

export default TimeTable;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 287px;
    height: 640px;
    border-radius: 10px;
    background-color: white;
`;

const Subject = styled.h1`
    display: block;
    color: #585858;
    font-size: 30px;
`;