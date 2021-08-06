import React from "react";

import User from './User';

export interface UserItem {
    // ユーザー名
    name: string;
    // ソケットID
    socketId: string;
}

interface UserListProps {
    users: UserItem[];
}

export default function UserList(props: UserListProps) {
    return (
        <div>
            {props.users &&
            props.users.map((item: UserItem) => {
                return <User name={item.name} key={item.socketId}/>;
            })}
        </div>
    );
}
