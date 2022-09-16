import React from 'react';
import Event from './components/Event';
import { EventType } from './utils/types';

export default function App() {
    const eventDate = new Date(2019, 7, 2);

    const event: EventType = {
        name: "Gustavo Lima",
        date: eventDate,
        hour: "18:30 - 00:00",
        local: "Parque do Povo",
        city: "Campina Grande/PR",
        genre: "Arte em forma de Sertanejo"
    }

    return (
        <Event event={event} />
    );
}
