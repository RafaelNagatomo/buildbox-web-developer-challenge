import styled from "styled-components";

const FeedItemContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  transition: transform 2s;
`;

const FeedItemCard = styled.div`
  width: 516px;
  padding: 12px 24px 32px 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  display: flex;
  flex-direction: wrap;
  margin-bottom: 16px;
`;

const UserImg = styled.img`
  width: 88px;
  height: 88px;
  margin-top: 43px;
`;

const FeedCardInfo = styled.div`
  width: 76.5%;
  display: flex;
  flex-direction: column;
  margin-left: 32px;

  .iconeClose {
    position: relative;
    left: 337px;
    cursor: pointer;
  }

  p {
    word-wrap: break-word;
    width: 100%;
    font-size: 16px;
    color: #9f9f9f;
    margin: 43px 0 24px 0;
    text-align: left;
    line-height: 1.25;
  }

  span {
    font-size: 12px;
    color: #5f5f5f;
    margin-bottom: 2px;
  }

  h3 {
    word-wrap: break-word;
    font-size: 14px;
    color: #7a7a7a;
  }
`;

export { FeedItemContainer, FeedItemCard, UserImg, FeedCardInfo };
