import { useState } from "react";

export function useForm(initialValues, validateFn) {
  const [formData, setFormData] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    const newData = {
      ...formData,
      [name]: value,
    };

    setFormData(newData);

    if (validateFn) {
      setErrors(validateFn(newData));
    }
  }

  function handleSubmit(onSubmit) {
    const validationErrors = validateFn ? validateFn(formData) : {};

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    Promise.resolve(onSubmit(formData)).finally(() => {
      setIsSubmitting(false);
    });
  }

  function reset() {
    setFormData(initialValues);
    setErrors({});
  }

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset,
  };
}
