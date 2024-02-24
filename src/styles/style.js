import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  background-color: black;
  height: 100vh;
`;

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  .cardContainer {
    background-color: black;
    padding: 1% 10% 1% 10%;
    @media (max-width: 600px) {
      padding: 0 15% 5% 15%;
    }
  }
  .headingContainer {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      z-index: 1;
      color: white;
      font-size: 2.5rem;
      text-align: center;
      font-family: "Lilita One", cursive;
      span {
        color: #ee206e;
      }
      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;
