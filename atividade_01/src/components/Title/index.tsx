import React from 'react';
import { TitleProps } from "../../utils/types";
import { TitleText } from "./styles";

export default function Title({ text } : TitleProps) {
    return (
        <TitleText>
            {text}
        </TitleText>
    );
}