import React, { useState } from "react";
import { Keyboard, TextInput } from "react-native";
import { isUndfOrEmpty } from "../../utils/util";
import Button from "../Button";
import { GradientContainer, InputCounter, TextContent, TextCounter } from "./styles";

export default function Counter() {
    const [counter, setCounter] = useState<string>("");
    const [counterValue, setCounterValue] = useState<number>(0);

    function plus() {
        isUndfOrEmpty(counter) ? setCounterValue(counterValue + Number.parseInt(counter)) : false;
    }

    function minus() {
        isUndfOrEmpty(counter) ? setCounterValue(counterValue - Number.parseInt(counter)) : false;
    }

    function reset() {
        Keyboard.dismiss();

        setCounterValue(0);
        setCounter("");
    }

    return (
        <GradientContainer colors={['#ff1b6b', '#45caff']} start={{ x: 1.4, y: 0 }}>
            <TextContent>
                Valor Atual {"\n"}
                <TextCounter>
                    {counterValue}
                </TextCounter>
            </TextContent>
            <TextContent>
                Insira abaixo o valor a ser incrementado👇
            </TextContent>
            <InputCounter
                keyboardType="numeric"
                maxLength={4}
                clearButtonMode
                value={counter}
                onChangeText={(value: string) => setCounter(value.replace(/[^0-9]/g, ''))}
            />
            <Button title="Adicionar" onPress={plus} />
            <Button title="Remover" onPress={minus} />
            <Button title="Resetar" onPress={reset} />
        </GradientContainer>
    )
}