import React, { Fragment, useRef } from "react";
import styled from "styled-components";

export default function Login() {
    return (
        <Fragment>
            <FormBox>
                <Box>
                    ID &nbsp;
                    <InputBox type="text"></InputBox>
                </Box>
                <Box>
                    PW &nbsp;
                    <InputBox type="password"></InputBox>
                </Box>
                <ButtonBox>
                    <Box>
                        <Anchor href="/sign_up">Sign-Up</Anchor>
                    </Box>
                    <Box>
                        <Anchor href="#">Log-In</Anchor>
                    </Box>
                </ButtonBox>
            </FormBox>
        </Fragment>
    );
}

const ButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 1rem;
    margin: 0 1.5%;
`;

const FormBox = styled.div`
    font-size: 1.5rem;
    margin: 20px auto;
    margin-right: 45%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
`;

const InputBox = styled.input`
    width: 10%;
    height: auto;
    min-width: 150px;
    max-width: 250px;
    min-height: 15px;
    max-height: 30px;
`;

const Box = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1%;
`;

const Anchor = styled.a`
    text-decoration: none;
    width: auto;
`;
