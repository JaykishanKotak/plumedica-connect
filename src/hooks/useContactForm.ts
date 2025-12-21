import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional().refine((val) => {
    // if (!val || val.trim() === '') return true; // Phone is optional - allow empty
    // Basic phone validation - allows various formats
    return /^[\d\s\-\+\(\)]+$/.test(val) && val.replace(/\D/g, '').length >= 10;
  }, 'Please enter a valid phone number (at least 10 digits)'),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(100, 'Subject must be less than 100 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const useContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // Construct email body with name and contact number
    const emailBody = `Name: ${data.name}\nContact Number: ${data.phone || 'Not provided'}\n\nMessage:\n${data.message}`;
    
    // Check if user email is Gmail
    const isGmail = data.email.toLowerCase().endsWith('@gmail.com');
    
    if (isGmail) {
      // Open Gmail compose in new tab
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@plumedica.com&su=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(gmailUrl, '_blank');
    } else {
      // Open Outlook or default email client
      const mailtoUrl = `mailto:info@plumedica.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoUrl, '_blank');
    }

    // Reset form
    // form.reset();
  };

  return {
    form,
    onSubmit,
  };
};
