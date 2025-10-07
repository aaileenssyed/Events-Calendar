import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

const calendarEl = document.getElementById('calendar');

const calendar = new Calendar(calendarEl, {
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  editable: false,      // users cannot edit
  selectable: false,    // users cannot select
  events: [
    {
      title: 'Team Meeting',
      start: '2025-10-10',
      description: 'Monthly team meeting at 10 AM in Conference Room A'
    },
    {
      title: 'Project Deadline',
      start: '2025-10-15',
      description: 'Final submission of the marketing project'
    },
    {
      title: 'Workshop: JS Basics',
      start: '2025-10-20',
      description: 'Online workshop for beginners on JavaScript fundamentals'
    }
  ],
  eventClick: function(info) {
    alert(
      'Event: ' + info.event.title +
      '\nDate: ' + info.event.start.toDateString() +
      '\nDetails: ' + (info.event.extendedProps.description || 'No additional info')
    );
  }
});

calendar.render();
