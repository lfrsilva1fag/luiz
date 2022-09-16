import React from "react";
import { AnimationProps } from "../../utils/types";
import { LottieFile } from "./styles";

export default function Animation({ animation, speed }: AnimationProps) {
    return (
        <LottieFile
            source={animation}
            autoPlay
            loop
            speed={speed ?? 1}
        />
    );
}