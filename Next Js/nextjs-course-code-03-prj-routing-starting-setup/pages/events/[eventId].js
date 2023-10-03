import { useRouter } from 'next/router'
import React from 'react'
import { getEventById } from '../../dummy-data';
import EventSummary from './../../component/event-detail/event-summary';
import EventLogistics from './../../component/event-detail/event-logistics';
import EventContent from './../../component/event-detail/event-content';

function EventDetailPage() {
    const router = useRouter()
    const eventId = router.query.eventId;

    const event = getEventById(eventId)
    console.log(router);

    if (!event) {

        return <p>No event found</p>

    }

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    )
}

export default EventDetailPage