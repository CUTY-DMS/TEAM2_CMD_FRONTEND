import styled from "styled-components";

const CalTable = ({day, day1, day2, day3, day4, day5, day6, end}) => {
    
    const noMargin = { margin: 0 }

    return (
        <>
            {
                end === "true"
                ? <Wrapper> 
                    <Days>
                        <Subject style={noMargin}>{day1}</Subject>
                        <Subject style={noMargin}>{day2}</Subject>
                        <Subject style={noMargin}>{day3}</Subject>
                        <Subject style={noMargin}>{day4}</Subject>
                        <Subject style={noMargin}>{day5}</Subject>
                        <Subject style={noMargin}>{day6}</Subject>
                    </Days>
                    </Wrapper>
                : <Wrapper isEnd> 
                    <Days>
                        <Subject style={noMargin}>{day1}</Subject>
                        <Subject style={noMargin}>{day2}</Subject>
                        <Subject style={noMargin}>{day3}</Subject>
                        <Subject style={noMargin}>{day4}</Subject>
                        <Subject style={noMargin}>{day5}</Subject>
                        <Subject style={noMargin}>{day6}</Subject>
                    </Days>
                </Wrapper>
            }
        </>
    )
};

export default CalTable;

const Wrapper = styled.div`
    display: flex;
    width: 200px;
    border-right: ${props => props.isEnd ? "1px solid black" : "none"};
    border-radius: ${props => props.isEnd ? "none" : "20px"};
    margin-left: 15px;
    background-color: white;
`;

const Days = styled.h1`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    gap: 50px;
`;

const Subject = styled.h1`
    display: block;
    font-family: inter;
    font-size: 35px;
    font-weight: 200;
`;