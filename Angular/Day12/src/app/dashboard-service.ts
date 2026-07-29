import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  employeesDetails:any = [
  { id: 1, name: "Aarav Sharma", email: "aarav.sharma@example.com", mobile: "9876543210", department: "Development", workLocation: "Hyderabad" },
  { id: 2, name: "Priya Reddy", email: "priya.reddy@example.com", mobile: "9876543211", department: "Testing", workLocation: "Visakhapatnam" },
  { id: 3, name: "Rahul Verma", email: "rahul.verma@example.com", mobile: "9876543212", department: "HR", workLocation: "Bangalore" },
  { id: 4, name: "Sneha Nair", email: "sneha.nair@example.com", mobile: "9876543213", department: "Development", workLocation: "Hyderabad" },
  { id: 5, name: "Kiran Kumar", email: "kiran.kumar@example.com", mobile: "9876543214", department: "Testing", workLocation: "Bangalore" },
  { id: 6, name: "Anjali Singh", email: "anjali.singh@example.com", mobile: "9876543215", department: "HR", workLocation: "Visakhapatnam" },
  { id: 7, name: "Vikram Rao", email: "vikram.rao@example.com", mobile: "9876543216", department: "Development", workLocation: "Hyderabad" },
  { id: 8, name: "Pooja Mehta", email: "pooja.mehta@example.com", mobile: "9876543217", department: "Testing", workLocation: "Visakhapatnam" },
  { id: 9, name: "Arjun Patel", email: "arjun.patel@example.com", mobile: "9876543218", department: "Development", workLocation: "Bangalore" },
  { id: 10, name: "Divya Joshi", email: "divya.joshi@example.com", mobile: "9876543219", department: "HR", workLocation: "Hyderabad" },
  { id: 11, name: "Rohit Gupta", email: "rohit.gupta@example.com", mobile: "9876543220", department: "Testing", workLocation: "Bangalore" },
  { id: 12, name: "Meera Iyer", email: "meera.iyer@example.com", mobile: "9876543221", department: "Development", workLocation: "Visakhapatnam" },
  { id: 13, name: "Sandeep Das", email: "sandeep.das@example.com", mobile: "9876543222", department: "HR", workLocation: "Hyderabad" },
  { id: 14, name: "Neha Kapoor", email: "neha.kapoor@example.com", mobile: "9876543223", department: "Development", workLocation: "Bangalore" },
  { id: 15, name: "Manoj Reddy", email: "manoj.reddy@example.com", mobile: "9876543224", department: "Testing", workLocation: "Visakhapatnam" },
  { id: 16, name: "Kavya Sharma", email: "kavya.sharma@example.com", mobile: "9876543225", department: "HR", workLocation: "Hyderabad" },
  { id: 17, name: "Nikhil Jain", email: "nikhil.jain@example.com", mobile: "9876543226", department: "Development", workLocation: "Bangalore" },
  { id: 18, name: "Riya Malhotra", email: "riya.malhotra@example.com", mobile: "9876543227", department: "Testing", workLocation: "Hyderabad" },
  { id: 19, name: "Aditya Kulkarni", email: "aditya.kulkarni@example.com", mobile: "9876543228", department: "Development", workLocation: "Visakhapatnam" },
  { id: 20, name: "Shreya Bose", email: "shreya.bose@example.com", mobile: "9876543229", department: "HR", workLocation: "Bangalore" },
  { id: 21, name: "Harish Chandra", email: "harish.chandra@example.com", mobile: "9876543230", department: "Development", workLocation: "Hyderabad" },
  { id: 22, name: "Aisha Khan", email: "aisha.khan@example.com", mobile: "9876543231", department: "Testing", workLocation: "Visakhapatnam" },
  { id: 23, name: "Varun Mishra", email: "varun.mishra@example.com", mobile: "9876543232", department: "HR", workLocation: "Bangalore" },
  { id: 24, name: "Sahana Rao", email: "sahana.rao@example.com", mobile: "9876543233", department: "Development", workLocation: "Hyderabad" },
  { id: 25, name: "Deepak Yadav", email: "deepak.yadav@example.com", mobile: "9876543234", department: "Testing", workLocation: "Bangalore" }
];

  getEmployees(){
    return this.employeesDetails;
  }
  
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
