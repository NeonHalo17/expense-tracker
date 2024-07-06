import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


function Calendar() {
    return (
        <div className ="flex justify-center shrink">
            <div className="mt-20 border shadow p-4">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                </LocalizationProvider>
            </div>
            <div className="mt-4 px-4 border mx-4">
                <h1 className="mt-20 ml-20 pr-16">list of transactions goes here</h1>
            </div>
        </div>
    )
}

export default Calendar;
