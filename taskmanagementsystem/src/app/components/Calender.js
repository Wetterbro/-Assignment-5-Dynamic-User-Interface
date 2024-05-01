import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const EventDetails = ({ event, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-xl font-bold mb-4">{event.title}</h2>
                <p className="mb-4">{event.extendedProps.message}</p>
                <p className="text-gray-500">{event.extendedProps.date}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const MyCalendar = ({ tasks = [] }) => {
    const [showEventDetails, setShowEventDetails] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = tasks.map(task => ({
        title: task.title,
        date: task.deadline,
        extendedProps: {
            message: task.message,
            date: task.deadline,
        }
    }));

    const handleEventClick = (info) => {
        setSelectedEvent(info.event);
        setShowEventDetails(true);
    };

    const handleClose = () => {
        setShowEventDetails(false);
        setSelectedEvent(null);
    };

    return (
        <div className="w-2/4 h-2/4 mx-auto pt-8">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                eventClick={handleEventClick}
            />
            {showEventDetails && <EventDetails event={selectedEvent} onClose={handleClose} />}
        </div>
    );
};

export default MyCalendar;
