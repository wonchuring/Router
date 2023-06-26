import styled from "styled-components";

//Main
export const Container = styled.div`
  display: flex;
  width: 1000px;
  margin: 30px auto;
`;

//Character
export const CharacterBox = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid #000;
  margin-left: 10px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  .bg {
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    opacity: 0.7;
  }
  h2 {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 0;
    font-size: 20px;
    color: #fff;
  }
`;

//CharacterDetail
export const CharacterDetailBox = styled.div`
  width: 700px;
  margin: 30px auto;
  border: 1px solid #000;

  .top {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .bottom {
    display: flex;
    height: 200px;

    .left {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      position: relative;

      h2 {
        color: #fff;
        font-size: 30px;
        font-weight: bold;
      }

      h3 {
        color: #c5c5c5;
        font-size: 18px;
        font-weight: 700;
      }

      button {
        position: absolute;
        bottom: 0;
        width: 80%;
        height: 50px;
      }
    }

    .right {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      border-left: 1px solid #fff;

      span {
        color: #c5c5c5;
      }
    }
  }
`;
