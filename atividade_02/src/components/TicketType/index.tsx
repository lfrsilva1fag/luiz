import React from 'react';
import { TicketTypeProps } from "../../utils/types";
import { formatPrice } from '../../utils/util';
import ContentText from '../ContentText';
import { Container } from "./styles";

export default function TicketType({ ticketType }: TicketTypeProps) {
    return (
        <Container>
            <ContentText field={ticketType.type.concat(": ")} value={formatPrice(ticketType.price)} />
        </Container>
    );
}