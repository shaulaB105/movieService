import styled, {css} from "styled-components";
import GlobalStyle from "./_3_global";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: pink;
`;

const awsomeCard = css`
    padding : 20px;
    border-radius: 10px;
    background-color: wheat;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const Input = styled.input.attrs(props=>({
    required : props.isRequired
}))`
    border: none;
    border-radius: 5px;
    ${awsomeCard}
`;

function App() {
    return (
        <>
            <GlobalStyle/>
            <Container>
                <Input isRequired={false} placeholder="hello"/>
            </Container>
        </>
    );
}



export default App;
