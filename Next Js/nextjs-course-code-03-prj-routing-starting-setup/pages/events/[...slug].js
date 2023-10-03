import { useRouter } from 'next/router'
import React from 'react'
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../component/events/EventList';
import ResultsTitle from '../../component/events/ResultsTitle';
import ErrorAlert from './../../component/UI/ErrorAlert';
import Button from './../../component/UI/Button'

function FilteredEventsPage() {
    const router = useRouter();

    const filterData = router.query.slug;

    if (!filterData) {
        return <p className='center'>Loading...</p>
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {

        return (
            <>
                <ErrorAlert>
                    <p>Invalid filter , please adjust your values</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </>
        )
    };

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>No events found for the choosen filter</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </>)
    }

    const date = new Date(numYear, numMonth - 1);
    return (
        <div>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </div>
    )
}

export default FilteredEventsPage