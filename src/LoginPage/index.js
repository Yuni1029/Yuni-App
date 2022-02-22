
import style from "styled-components";

const Container = style.div `
    height: 100vh;
    background-color: #28bec6;
    display: flex;
`

const WelcomeTitle = style.h1 `
    font-size: 100px;
    color: blue;
    text-align: center;
    margin-top: 30px;
    background-color: beige;
`;

const RightSide = style.div`
    height: 100vh;
    background-color:blue;
    font-size: 100px;
`

function LoginPage() {
    return <Container> 
        <WelcomeTitle> Left Half Page</WelcomeTitle>;
        <RightSide> Right Half Page</RightSide>;
    </Container>
}

export default LoginPage

/*Flex container: 
Flex item: align item next to each other
*/