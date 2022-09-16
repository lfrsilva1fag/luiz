//Interfaces
export interface EventProps {
    event: EventType;
}

export type TicketTypeProps = {
    ticketType: Ticket;
}

export type ContentTextProps = {
    field: string;
    value: string;
}

//Types
export type EventType = {
    name: string;
    date: Date;
    hour: string;
    local: string;
    city: string;
    genre: string;
}

export type Ticket = {
    type: string;
    price: number;
}