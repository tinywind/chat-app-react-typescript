import React from "react";
import styled from "styled-components";
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

class ChatListItem extends React.Component<ChatListItemProps> {
    //   入室ボタンクリック時の処理
    handlePage() {
        // チャットルームページに遷移
        this.props.history.push("/room?roomId=" + this.props.roomId);
    }

    render() {
        return (
            <ChatListItemStyle>
                <div className="chatRoomName">{this.props.name}</div>
                <div className="numberOfPeole">{this.props.numberOfPeople}</div>
                <div className="button">
                    <Button name="入室" onClick={() => this.handlePage()} primary/>
                </div>
                ;
            </ChatListItemStyle>
        );
    }
}

const ChatListItemStyle = styled.div`
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

export default withRouter(ChatListItem);
