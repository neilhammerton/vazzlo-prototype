// Mock data used in the dashboards — values preserved exactly from the monolith.

export const customerMessages = [
  { d: "11 Jul, 09:14", c: "Sarah Mitchell", ph: "07700 123456", s: "Wants to reschedule cleaning appointment to next week. Callback requested.", act: "Message", st: "Pending" },
  { d: "11 Jul, 08:51", c: "James Cooper", ph: "07700 234567", s: "New patient enquiry. Booked into Calendly for 14 Jul 10am.", act: "Booking", st: "Booked" },
  { d: "10 Jul, 18:32", c: "Unknown Caller", ph: "Withheld", s: "After-hours call. Emergency toothache. Directed to NHS 111.", act: "Escalated", st: "Resolved" },
  { d: "10 Jul, 16:45", c: "Emily Watson", ph: "07700 345678", s: "Price query for teeth whitening. Sales callback requested.", act: "Message", st: "Pending" },
  { d: "10 Jul, 14:10", c: "Tom Richards", ph: "07700 456789", s: "Asked about insurance acceptance. AI confirmed. Booked 15 Jul 2pm.", act: "Booking", st: "Booked" },
  { d: "9 Jul, 19:55", c: "Lisa Chen", ph: "07700 567890", s: "Out of hours. Needs emergency appointment. Left message for morning.", act: "Message", st: "Pending" },
  { d: "9 Jul, 11:30", c: "Mark Davies", ph: "07700 678901", s: "Requested to speak to Dr Smith. Transferred to fallback number.", act: "Transfer", st: "Resolved" },
];

export const affiliateCustomers = [
  { n: "ABC Dental Ltd", num: "0333 014 2847", p: "Standard", m: "£99", s: "Active", calls: 47, joined: "3 Jul 2026" },
  { n: "Smith & Co Solicitors", num: "0333 014 3921", p: "Standard", m: "£99", s: "Active", calls: 32, joined: "5 Jul 2026" },
  { n: "Peak Fitness Gym", num: "0333 014 5502", p: "Standard", m: "£99", s: "Active", calls: 28, joined: "6 Jul 2026" },
  { n: "Riverside Veterinary", num: "0333 014 6610", p: "Standard", m: "£99", s: "Active", calls: 19, joined: "7 Jul 2026" },
  { n: "Brighton Bakery", num: "0333 014 7734", p: "Standard", m: "£99", s: "Active", calls: 15, joined: "8 Jul 2026" },
  { n: "Coastal Plumbing", num: "0333 014 8851", p: "Standard", m: "£99", s: "Trial", calls: 3, joined: "11 Jul 2026" },
];

export const affiliateOwnMessages = [
  { d: "11 Jul, 14:20", caller: "Mike T.", s: "Partnership enquiry. Wants to discuss referral programme.", act: "Message" },
  { d: "10 Jul, 10:15", caller: "Sales Rep", s: "Pricing question about volume discounts.", act: "Message" },
  { d: "9 Jul, 16:30", caller: "Supplier", s: "Invoice query. Callback requested.", act: "Transfer" },
];
