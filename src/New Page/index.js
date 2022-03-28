import styled from "styled-components";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"

const Introduce = styled.h1`
    font-weight: 700;
    font-size: 40px;
    font-family: 'Quicksand', sans-serif;
`;

function NewPage() {
    return (
        <Container>
            <Introduce> This is a new page! </Introduce>
        </Container>
    )
}