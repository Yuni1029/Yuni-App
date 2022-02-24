
import styled from "styled-components";

const Container = styled.div `
    height: 100vh;
    display: flex;
    background-color:#78ABE3;
    text-align: center;
`;

const LeftSide = styled.div `
    height:100vh;
    width: 50%;
    background-image: url("https://64.media.tumblr.com/18c23d15eab05e416345ea480bf204c2/tumblr_odh9w1T60P1vztawho1_640.jpg");
`;

const WelcomeTitle = styled.h1`
    color: white;
    font-weight: 700;
    font-size: 40px;
    margin-top:100px;
    padding-left: 30px;
    font-family: Cursive;
`;

const Input = styled.input`
    width:100px;
`

const Label = styled.label`
    font-size: 30px;
    color: white;
    font-family: Cursive;
`

const RightSide = styled.div`
    height: 100vh;
    font-size: 100px;
`;

function LoginPage() {
    return (
        <Container>
            <LeftSide></LeftSide>
            <RightSide>
                <WelcomeTitle> Welcome Back!</WelcomeTitle>
                <Label> ID </Label>
                    <Input></Input>
                    <br></br>
                <Label> Password </Label>
                    <Input></Input>
            </RightSide>
        </Container>
    )
    // return (<Container> 
    //     <LeftSide>
    //         <WelcomeTitle> Welcome Back!</WelcomeTitle>
    //         <Label for="Me"> ID </Label>
    //         <Input type="text" id="Me"> </Input>
    //         <Label> Password </Label>
    //     </LeftSide>
    //     <RightSide></RightSide>
    // </Container>)
}

export default LoginPage

/*Flex container: 
Flex item: align item next to each other
*/