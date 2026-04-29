import { useState, useRef } from 'react';
import { sendContactForm, validateFormData } from '@/services/emailService';

export const useContactForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: formRef.current?.name?.value || '',
      email: formRef.current?.email?.value || '',
      phone: formRef.current?.phone?.value || '',
      service: formRef.current?.service?.value || '',
      message: formRef.current?.message?.value || '',
    };

    // Validate form
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement.focus();
      }
      return;
    }

    // Clear previous errors
    setErrors({});
    setLoading(true);
    setShowSuccess(false);
    setShowError(false);

    // Send email
    const result = await sendContactForm(formData);

    if (result.success) {
      setShowSuccess(true);
      resetForm();
      // Auto hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } else {
      setShowError(true);
      setErrorMessage(result.error || 'Failed to send message. Please try again.');
      // Auto hide error message after 5 seconds
      setTimeout(() => setShowError(false), 5000);
    }

    setLoading(false);
  };

  return {
    formRef,
    loading,
    errors,
    showSuccess,
    showError,
    errorMessage,
    handleSubmit,
  };
};