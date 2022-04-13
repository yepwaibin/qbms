import styled from "styled-components";

export const RegisterWrapper = styled.div`
  background: no-repeat url(${require("@/assets/img/login-bg.jpg")});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PanelWrappear = styled.div`
  width: 400px;
  height: 500px;
  background: hsla(0,0%,100%,.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .btn {
    margin: 10px;
    margin-left: 0px;
  }
`