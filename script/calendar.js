//달력
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
    });
    calendar.render();
});

let calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,listWeek'
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            start: 'dayGridMonth,timeGridWeek,timeGridDay custom1',
            center: 'title',
            end: 'custom2 prevYear,prev,next,nextYear'
        },
        footerToolbar: {
            start: 'custom1,custom2',
            center: '',
            end: 'prev,next'
        },
        customButtons: {
            custom1: {
                text: 'custom 1',
                click: function () {
                    alert('clicked custom button 1!');
                }
            },
            custom2: {
                text: 'custom 2',
                click: function () {
                    alert('clicked custom button 2!');
                }
            }
        }
    });

    calendar.render();
});