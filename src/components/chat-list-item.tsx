import React from "react";
import {css} from "@emotion/react";
import {RouteComponentProps, withRouter} from "react-router";
import * as H from "history";

import Button from "./button";

interface ChatListItemProps extends RouteComponentProps {
    // チャットルーム
    name: string;
    // チャットルームの人数
    numberOfPeople: number;
    // チャットルームID
    roomId: string;
    // 履歴
    history: H.History;
}

export default withRouter(function ChatListItem(props: ChatListItemProps) {
    //   入室ボタンクリック時の処理
    const handlePage = () => props.history.push("/room?roomId=" + props.roomId);

    return (
        <div css={styles}>
            <div className="chatRoomName">{props.name}</div>
            <div className="numberOfPeople">{props.numberOfPeople}</div>
            <div className="button">
                <Button name="入室" onClick={handlePage} primary={true}/>
            </div>
        </div>
    );
});

const styles = css`
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid #d3d3d3;
  padding-top: 10px;
  padding-bottom: 10px;

  &:hover {
    background: #f5f5f5;
  }

  .numberOfPeople {
    width: 100px;
    text-align: right;
  }

  .button {
    width: 100px;
    text-align: right;
  }
`;
