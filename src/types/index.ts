export interface Solution {
  id: string;
  title: string;
  titleTh: string;
  description: string;
  descriptionTh: string;
  icon: string;
  href: string;
  badge: string;
  color: string;
}

export interface Industry {
  id: string;
  name: string;
  nameTh: string;
  icon: string;
}

export interface NavItem {
  label: string;
  labelTh: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  result: string;
  logo: string | null;
}

export interface Award {
  year: string;
  title: string;
  org: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  industryType: string;
  message: string;
}

export interface DemoBookingData {
  name: string;
  company: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  product: string;
  attendees: number;
  notes: string;
}

export interface SAPServiceLayerConfig {
  baseUrl: string;
  companyDB: string;
  username: string;
  password: string;
}
