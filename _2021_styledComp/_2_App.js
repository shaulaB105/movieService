import styled, {css, keyframes}  from "styled-components";
import GlobalStyle from "./_3_global";

function AppTwo() {
    return (
        <>
            <GlobalStyle/>
            <CustomWrap>
                <Button >Hello</Button>
                <Button danger >Hello</Button>
                <Anchor href="https://google.com">Go to google</Anchor>
            </CustomWrap>
        </>
    );
}

const CustomWrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: pink;
`

const Button = styled.button`    
  border-radius: 50px;
  padding: 5px;
  width: 120px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border : none;
  &:active,
  &:focus{
    outline: none;
  }
  background-color: ${props => props.danger ? "#e74c3c" : "#2ecc71"};
  ${
    props=>{
        if(props.danger)
            return css`animation : ${rotation} 2s linear infinite`;
    }

}
`

const Anchor = styled(Button.withComponent("a"))`
    text-decoration: none;
`;

const rotation = keyframes`
    from{
      transform: rotate(0deg);
    }
  to{
    transform: rotate(360deg);
  }
`

export default App;
