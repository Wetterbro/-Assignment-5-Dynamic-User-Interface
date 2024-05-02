import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const EventDetails = ({ event, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg w-[32rem] ">
                <h2 className="text-xl font-bold mb-4">{event.extendedProps.task.title}</h2>
                <p className="mb-4">{event.extendedProps.task.message}</p>
                <p className="text-gray-500">{event.extendedProps.task.deadline}</p>
                <p className="text-gray-500">Priority: {event.extendedProps.task.priority}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 float-end" onClick={onClose} aria-label="Close event details">Close</button>
            </div>
        </div>
    );
};

const MyCalendar = ({ tasks = [] }) => {
    const [showEventDetails, setShowEventDetails] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = tasks.map(task => ({
        title: task.title + (task.completed ? ' (Completed)' : ''),
        date: task.deadline,
        color: task.priority === '1' ? 'green' : task.priority === '2' ? 'green' : task.priority === '3' ? 'orange' : task.priority === '4' ? 'red' : task.priority === '5' ? 'red' : 'black',
        extendedProps: {
            task:task
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
        <div className="w-2/4 h-2/4 mx-auto py-8">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                eventClick={handleEventClick}
            />
            {showEventDetails && <EventDetails event={selectedEvent} onClose={handleClose} />}

             <p className='float-end'>
                <span className=' text-green-600'>Low Priority  </span>
                <span className=' text-orange-600'>Medium Priority  </span>
                <span className=' text-red-600'>High Priority  </span>
             </p>
        </div>
    );
};

export default MyCalendar;
