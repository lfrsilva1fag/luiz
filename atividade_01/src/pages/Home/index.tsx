import React from "react";
import Animation from "../../components/Animation";
import reactIconAnimation from "../../assets/reactIconAnimation.json"
import Title from "../../components/Title";
import { Container } from "./styles";

export default function Home() {
    return(
        <Container>
            <Animation animation={reactIconAnimation} />
            <Title text="Sandro Matheus Ramos" />
        </Container>
    )
}