import React from "react";
import {css} from "@emotion/react";

interface InputTextProps {
    // テキストが入力された場合のイベント
    onInput: (e: React.FormEvent<HTMLDivElement>) => void;
    // テキストからフォーカスが外れた場合のイベント
    onBlur: (e: React.FormEvent<HTMLDivElement>) => void;
    // プレースホルダー用
    placeholder: string;
}

export default function InputText(props: InputTextProps) {
    return (
        <div css={inputTextStyle}>
            <div contentEditable={true} onInput={props.onInput} onBlur={props.onBlur} className="text" data-placeholder={props.placeholder}/>
        </div>
    );
}

const inputTextStyle = css`
  .text {
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    padding: 10px;

    &:focus {
      border: 1px solid #d3d3d3;
    }
  }

  [data-placeholder]:empty:before {
    content: attr(data-placeholer);
    color: #888;
  }
`;
