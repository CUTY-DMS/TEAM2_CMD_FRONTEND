import React from 'react';
import styled from 'styled-components';
import Nav from '../Components/Nav';

function AnnounceWrite() {

    const disFlex = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    return (
        <Wrapper style={disFlex}>
            <Nav />
            <_BoxFlex>
                <Textbox style={disFlex}>
                    <Title type="text" placeholder="제목"/>
                    <Text rows="25" cols="155" placeholder="내용을 입력해주세요." />
                </Textbox>
                <FinButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.15574 0.186928C1.4986 0.02728 1.87969 -0.0318846 2.2548 0.0162989C2.62992 0.0644822 2.98369 0.218038 3.27506 0.459152L3.27974 0.463022C6.42209 3.09564 9.62457 4.4099 12.0375 5.06621C13.2438 5.39433 14.2502 5.55721 14.9482 5.63798C15.2971 5.67835 15.5683 5.69814 15.7483 5.70783C15.8383 5.71268 15.9054 5.71499 15.948 5.7161C15.9692 5.71665 15.9844 5.7169 15.9931 5.71702L16.0008 5.7171L21 5.71708C22.5913 5.71708 24.1175 6.34922 25.2427 7.47444C26.3679 8.59965 27 10.1258 27 11.7171C27 13.3084 26.3679 14.8345 25.2427 15.9597C24.3064 16.8959 23.0927 17.4909 21.7947 17.6643L20.3204 23.5838L20.3198 23.5863C20.2416 23.8969 20.0899 24.1842 19.8775 24.424C19.6651 24.6638 19.3982 24.8491 19.0993 24.9642C18.8004 25.0794 18.4782 25.1211 18.1598 25.0857C17.8423 25.0505 17.5378 24.9397 17.2718 24.7626L17.2698 24.7613L15.9007 23.8527C15.6224 23.6709 15.3941 23.4222 15.2368 23.1294C15.0793 22.8363 14.9979 22.5084 15.0001 22.1758V17.7903C14.983 17.7922 14.9657 17.7942 14.9482 17.7962C14.2501 17.877 13.2438 18.0398 12.0375 18.368C9.62456 19.0243 6.42207 20.3385 3.27973 22.9711L3.27507 22.975C2.9837 23.2161 2.62993 23.3697 2.2548 23.4179C1.87968 23.466 1.49859 23.4069 1.15574 23.2472C0.812894 23.0876 0.522336 22.834 0.317781 22.5159C0.113227 22.1978 0.00305974 21.8282 6.27637e-05 21.45L0 21.4421L3.1352e-05 1.98415C0.00302833 1.60596 0.113227 1.23638 0.317781 0.918272C0.522335 0.600165 0.812892 0.346577 1.15574 0.186928ZM15.0001 15.7791C14.9114 15.7879 14.8174 15.798 14.7183 15.8094C13.9343 15.9002 12.8281 16.0802 11.5126 16.4381C8.88296 17.1533 5.40618 18.5818 2.00003 21.4341V2.00005C5.40618 4.85232 8.88297 6.28085 11.5126 6.99609C12.8281 7.35392 13.9343 7.53401 14.7183 7.62473C14.8174 7.6362 14.9114 7.64624 15.0001 7.65504V15.7791ZM17.0001 7.7171V15.7171L21.0001 15.7171C22.0609 15.7171 23.0783 15.2957 23.8285 14.5455C24.5786 13.7954 25 12.7779 25 11.7171C25 10.6562 24.5786 9.6388 23.8285 8.88865C23.0783 8.1385 22.0609 7.71708 21 7.71708L17.0001 7.7171ZM17.0001 17.7171L19.7205 17.7171L18.3803 23.0979L18.378 23.0964L17.003 22.1839L17.0001 22.1819V17.7171Z" fill="#111111"/>
                </svg>
                <h1>작성 완료</h1>
                </FinButton>
            </_BoxFlex>
        </Wrapper>
    )
}


export default AnnounceWrite;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

const Textbox = styled.form`
    margin-top: 30px;
    width: 1180px;
    height: 670px;
    border-radius: 50px;
    background-color: white;
`;

const Title = styled.input`
    margin-top: 40px;
    width: 1100px;
    height: 40px;
    border: none;
    border-bottom: 1px solid #A3A3A3;
    font-size: 25px;
    font-weight: bolder;
    &:focus { outline: none; }
    &::placeholder {
        font-weight: bolder;
        font-size: 25px;
    }
`;

const Text = styled.textarea`
    margin-top: 5px;
    width: 1100px;
    border: none;
    font-family: Noto Sans kr;
    font-size: 16px;
    resize: none;
    &:focus { outline: none; }
    &::placeholder { font-family: Noto Sans kr; }
`;

const FinButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    gap: 10px;
    margin-top: 20px;
    width: 200px;
    height: 50px;
    border: transparent;
    border-radius: 10px;
    background-color: white;
    font-weight: bolder;
    font-size: 12px;
    transition: 0.5s all;
    &:hover {
        cursor: pointer;
        border: 1px solid black;
    }
`;

const _BoxFlex = styled.div`
    display: flex;
    flex-direction: column
`;