import styled from "styled-components";

export const LoginWrapper = styled.div`
  background: no-repeat url(${require("@/assets/img/login-bg.jpg")});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PanelWrappear = styled.div`
  width: 350px;
  height: 300px;
  background: hsla(0,0%,100%,.3);
  display: flex;
  justify-content: center;
  align-items: center;
  Form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    Button {
      width: 100%;
      height: 2.5rem
    }
    .remenber {
      display: flex;
      justify-content: space-between;
    }
  }
`