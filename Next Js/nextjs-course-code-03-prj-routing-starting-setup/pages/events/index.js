import React from 'react';
import { getAllEvents } from './../../dummy-data';
import EventList from './../../component/events/EventList'
import EventsSearch from '../../component/events/EventsSearch';
import { useRouter } from 'next/router';

function AllEvents() {
    const events = getAllEvents();
    const router = useRouter()

    const findEventsHandler = (year, month) => {

        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath)
    }

    return (
        <>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </>
    )
}

export default AllEvents