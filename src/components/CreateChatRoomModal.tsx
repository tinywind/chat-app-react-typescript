import React from "react";
import {css} from "@emotion/react";

import InputText from "./InputText";
import Button from "./Button";

interface CreateChatRoomModalProps {
    // チャットルーム名が入力された場合のイベント
    onInputText: (e: React.FormEvent<HTMLDivElement>) => void;
    // チャットルーム名入力欄からフォーカスが外れた場合のイベント
    onBlurText: (e: React.FormEvent<HTMLDivElement>) => void;
    // 作成ボタンがクリックされた場合のイベント
    onClickButton: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    // モーダルの表示/非表示の切り替え用フラグ
    isShow: boolean;
}

export default function CreateChatRoomModal(props: CreateChatRoomModalProps) {
    return (
        <div css={() => styles(props)}>
            <div className="modal">
                <div>
                    <InputText placeholder="チャットルーム名" onInput={props.onInputText} onBlur={props.onBlurText}/>
                </div>
                <div className="button">
                    <Button name="作成" onClick={props.onClickButton} primary/>
                </div>
            </div>
        </div>
    );
}

const styles = (props: { isShow: boolean }) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  /* モーダルの表示・非表示の切り替え */
  display: ${props.isShow ? "flex" : "none"};
  align-items: center;
  justify-content: center;

  .modal {
    opacity: initial;
    background: rgba(255, 255, 255, 1);
    width: 500px;
    padding: 20px;
  }

  .button {
    margin-top: 10px;
    text-align: right;
  }
`;
