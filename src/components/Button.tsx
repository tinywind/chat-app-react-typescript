import React from "react";
import {css} from "@emotion/react";

interface ButtonProps {
    // ボタン名
    name: string;
    // ボタンをクリックした時のイベント
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    // 主ボタンか副ボタンかのフラグ
    primary?: boolean;
}

export default function Button(props: ButtonProps) {
    return (
        <button css={() => styles(props)} onClick={props.onClick}>
            {props.name}
        </button>
    );
}

const styles = (props: { primary?: boolean }) => css`
  display: inline-block;
  padding: 8px 15px;
  user-select: none;
  /* 主ボタンか副ボタンかでボタンのデザインを変更 */
  background: ${props.primary ? "#ffd700" : "#dcdcdc"};
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: ${props.primary ? "#ffa500" : "#d3d3d3"};
  }
`;
