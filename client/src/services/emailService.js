import emailjs from '@emailjs/browser';

export const sendContactForm = async (formData) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error: error.text || 'Failed to send message' };
  }
};

export const validateFormData = (data) => {
  const errors = {};
  
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/;
  if (!data.phone || !phoneRegex.test(data.phone.replace(/\s/g, ''))) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  if (!data.service || data.service === '') {
    errors.service = 'Please select a service';
  }
  
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return errors;
};