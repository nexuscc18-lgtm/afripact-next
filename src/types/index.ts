export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  examples: string[];
  icon: string;
}

export interface ContactFormData {
  name: string;
  company?: string;
  phone: string;
  email: string;
  message: string;
  service?: string;
  submissionType: 'contact' | 'quote';
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
}
