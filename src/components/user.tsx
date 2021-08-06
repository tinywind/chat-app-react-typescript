import React from "react";
import {css} from "@emotion/react";

interface UserProps {
    //   ユーザー名
    name: string;
}

export default function User(props: UserProps) {
    return (
        <div css={styles}>
            <div>{props.name}</div>
        </div>
    );
}

const styles = css`
  color: #fff;
  margin: 5px 0;
`;
