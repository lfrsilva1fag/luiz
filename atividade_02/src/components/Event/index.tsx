import React from 'react';
import { EventProps, Ticket } from '../../utils/types';
import { formatDate } from '../../utils/util';
import ContentText from '../ContentText';
import TicketType from '../TicketType';
import { Container, Separator, SubTitleText, TitleText } from "./styles";

export default function Event({ event }: EventProps) {
    const ticketTypesList: Ticket[] = [
        {
            type: "Camarote(open bar)",
            price: 150.00
        },
        {
            type: "Camarote",
            price: 100.00
        },
        {
            type: "Front-stage",
            price: 60.00
        },
        {
            type: "Pista",
            price: 30.00
        }
    ]

    return (
        <Container>
            <TitleText>
                {event.name}
            </TitleText>
            <SubTitleText>
                Evento
            </SubTitleText>
            <ContentText field="Data:" value={formatDate(event.date)} />
            <ContentText field="Horário:" value={event.hour} />
            <ContentText field="Local:" value={event.local} />
            <ContentText field="Cidade:" value={event.city} />
            <ContentText field="Gênero:" value={event.genre} />
            <Separator />
            <SubTitleText>
                Ingressos
            </SubTitleText>
            {
                ticketTypesList.map(ticketType => (
                    <TicketType ticketType={ticketType} key={ticketType.type} />
                ))
            }
        </Container>
    );
}