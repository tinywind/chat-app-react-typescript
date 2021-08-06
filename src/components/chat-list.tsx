import React from "react";
import ChatListItem from "./chat-list-item";

export interface ChatListData {
    roomId: string;
    name: string;
    users: [];
}

interface ChatListProps {
    data: ChatListData[];
}

export default function ChatList(props: ChatListProps) {
    return (
        props.data && <>
            {props.data.map(item => <ChatListItem name={item.name} numberOfPeople={item.users.length} roomId={item.roomId} key={item.roomId}/>)}
        </>
    );
}
