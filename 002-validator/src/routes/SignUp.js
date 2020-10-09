import React from "react";
import styled from "styled-components";

export default function SignUp() {
    return (
        <Container>
            <Title>Sign Up</Title>
            <UserName />
            <Email />
            <PassWord />
            <ConfirmPw />
        </Container>
    );
}

const UserName = () => {
    return (
        <Label>
            UserName &nbsp;
            <input type="text" name="username" placeholder="Enter UserName"></input>
        </Label>
    );
};
const Email = () => {
    return (
        <Label>
            Email &nbsp;
            <input type="text" name="email" placeholder="Enter Email"></input>
        </Label>
    );
};
const PassWord = () => {
    return (
        <Label>
            PassWord &nbsp;
            <input type="password" name="password" placeholder="Enter PassWord"></input>
        </Label>
    );
};
const ConfirmPw = () => {
    return (
        <Label>
            Confirm PassWord &nbsp;
            <input type="password" name="confirmPw" placeholder="Confirm PassWord"></input>
        </Label>
    );
};

const Container = styled.div`
    margin: 20px auto;
    margin-right: 45%;
    display: flex;
    align-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    display: flex;
    justify-content: flex-end;
    margin-right: 10%;
`;

const Label = styled.label`
    display: flex;
    justify-content: flex-end;
    margin: 20px;
`;
