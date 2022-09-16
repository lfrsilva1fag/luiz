import React from "react";
import { ContentTextProps } from "../../utils/types";
import { Content, FieldName, TextContent } from "./styles";

export default function ContentText({ field, value }: ContentTextProps) {
    return (
        <Content>
            <FieldName>
                {field}
            </FieldName>
            <TextContent>
                {value}
            </TextContent>
        </Content>
    )
}