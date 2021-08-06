import React, {useState} from "react";
import {css} from "@emotion/react";

import ChatList, {ChatListData} from "../components/chat-list";
import Button from "../components/button";
import CreateChatRoomModal from "../components/create-chat-room-modal";

const data: ChatListData[] = [
    {roomId: "ROOM_1", name: "チャットルーム　1", users: [],},
    {roomId: "ROOM_2", name: "チャットルーム　2", users: [],},
    {roomId: "ROOM_3", name: "チャットルーム　3", users: [],},
];

export default function ChatListPage() {
    const [showingModal, setShowingModal] = useState(false);

    return (
        <div css={styles}>
            <div className="title">
                <div className="chatRoomList">チャットルーム一覧</div>
                <div>
                    <Button name="チャットルームを作成" onClick={() => setShowingModal(true)} primary={false}/>
                </div>
            </div>
            <ChatList data={data}/>
            <CreateChatRoomModal onClickButton={() => setShowingModal(false)} onBlurText={() => ({})} onInputText={() => ({})} isShow={showingModal}/>
        </div>
    );
}

const styles = css`
  padding: 20px;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  .chatRoomList {
    font-weight: bold;
    font-size: 20px;
  }
`;

