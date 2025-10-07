import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

const calendarEl = document.getElementById('calendar');

const events = [
  {
    title: "Techapalooza for Job Seekers | 10.8.2025",
    start: "2025-10-08T10:00:00",
    end: "2025-10-08T14:00:00",
    location: "American Job Center in Pilsen, 1700 W 18th St, Chicago, IL 60608",
    description:
      "Join us for TECHAPALOOZA! Network and connect with local companies to learn about available training, careers, and more.",
    link: "https://www.eventbrite.com/e/techapalooza-for-job-seekers-tickets-123456789"
  },
  {
    title: "Tech Empowerment (AI and Us: Ethical Choices and Everyday Actions)",
    start: "2025-10-08T13:00:00",
    end: "2025-10-08T14:30:00",
    location: "Forest Park Public Library, 7555 Jackson Blvd, Forest Park, IL 60130",
    description:
      "Explore the intersection of AI and ethics — let's navigate the digital world together!",
    link: "https://www.eventbrite.com/e/tech-empowerment-ai-and-us-tickets-987654321"
  },
  {
    title: "Chicago Tech Career Fair: Exclusive Tech Hiring Event",
    start: "2025-10-31T11:00:00",
    end: "2025-10-31T14:00:00",
    location: "Virtual Event (Online, Chicago, IL 60602)",
    description:
      "Virtual Tech Career Fair with hiring partners from startups and Fortune 500s, focused on diversity and inclusion.",
    link: "https://careerscrossroad.com/signup?code=ChiTCF"
  }
];

const calendar = new Calendar(calendarEl, {
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  editable: false,
  selectable: false,
  events: events,

  eventDidMount: function(info) {
    // Create and append a "Register" button dynamically
    const btn = document.createElement('a');
    btn.textContent = 'Register';
    btn.href = info.event.extendedProps.link;
    btn.target = '_blank';
    btn.style.display = 'inline-block';
    btn.style.marginTop = '6px';
    btn.style.padding = '4px 8px';
    btn.style.backgroundColor = '#007bff';
    btn.style.color = 'white';
    btn.style.borderRadius = '4px';
    btn.style.textDecoration = 'none';
    btn.style.fontSize = '12px';

    const titleEl = info.el.querySelector('.fc-event-title');
    if (titleEl) {
      titleEl.appendChild(document.createElement('br'));
      titleEl.appendChild(btn);
    }
  },

  eventClick: function(info) {
    info.jsEvent.preventDefault(); // prevent default navigation
    alert(
      `Event: ${info.event.title}\n\n` +
      `Date: ${info.event.start.toLocaleString()}\n` +
      `Location: ${info.event.extendedProps.location || 'N/A'}\n\n` +
      `Details: ${info.event.extendedProps.description || 'No details provided.'}`
    );
  }
});

calendar.render();
