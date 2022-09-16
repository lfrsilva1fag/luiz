import React from "react";
import { ButtonProps } from "../../utils/types";
import { Container, ButtonText } from "./styles";

export default function Button({ title, onPress }: ButtonProps) {
    return (
        <Container onPress={onPress} >
            <ButtonText>{title}</ButtonText>
        </Container>
    );
}