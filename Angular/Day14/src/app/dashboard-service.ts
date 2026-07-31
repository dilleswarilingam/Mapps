import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  
   getTimeZones() {
    return [
      { country: 'India (IST)', time: '10:30 AM' },
      { country: 'USA (EST)', time: '01:00 AM' },
      { country: 'UK (GMT)', time: '06:00 AM' }
    ];
  }

  getHelpdesk() {
    return [
      { id: 'HD001', issue: 'Laptop Issue', status: 'Open' },
      { id: 'HD002', issue: 'VPN Request', status: 'In Progress' }
    ];
  }

  getEvents() {
    return [
      { date: '05 Aug', event: 'Angular Training' },
      { date: '15 Aug', event: 'Independence Day Celebration' }
    ];
  }

  getArtifacts() {
    return [
      { name: 'Employee Handbook.pdf', date: '20 Jul 2026' },
      { name: 'Leave Policy.pdf', date: '18 Jul 2026' }
    ];
  }

  getTimesheetData(){
    return [
  { startDate: "2026-07-01", endDate: "2026-07-07", totalHours: 40, submittedDate: "2026-07-08", status: "Approved", approvedDate: "2026-07-09" },
  { startDate: "2026-07-08", endDate: "2026-07-14", totalHours: 38, submittedDate: "2026-07-15", status: "Rejected", approvedDate: "---" },
  { startDate: "2026-07-15", endDate: "2026-07-21", totalHours: 42, submittedDate: "2026-07-22", status: "Submitted", approvedDate: "---" },
  { startDate: "2026-07-22", endDate: "2026-07-28", totalHours: 36, submittedDate: "---", status: "Draft", approvedDate: "---" },
  { startDate: "2026-06-24", endDate: "2026-06-30", totalHours: 40, submittedDate: "2026-07-01", status: "Approved", approvedDate: "2026-07-02" },
  { startDate: "2026-06-17", endDate: "2026-06-23", totalHours: 39, submittedDate: "2026-06-24", status: "Approved", approvedDate: "2026-06-25" },
  { startDate: "2026-06-10", endDate: "2026-06-16", totalHours: 35, submittedDate: "2026-06-17", status: "Rejected", approvedDate: "---" },
  { startDate: "2026-06-03", endDate: "2026-06-09", totalHours: 41, submittedDate: "2026-06-10", status: "Submitted", approvedDate: "---" },
  { startDate: "2026-05-27", endDate: "2026-06-02", totalHours: 37, submittedDate: "---", status: "Draft", approvedDate: "---" },
  { startDate: "2026-05-20", endDate: "2026-05-26", totalHours: 40, submittedDate: "2026-05-27", status: "Approved", approvedDate: "2026-05-28" }
];
  }

}
