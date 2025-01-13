import React from 'react';
import { useForm } from '@tanstack/react-form';

function FieldInfo({ field }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em>{field.state.meta.errors.join(', ')}</em>
      ) : (
        // Display a generic message if the field is empty
        field.state.value === '' && <em>This field is required</em>
      )}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  );
}

export default function App() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      verifyPassword: '',
    },
    onSubmit: async (formData) => {
        // Debug log for the formData and values
        console.log('Form data onSubmit:', formData);
      
        const { value } = formData || {};  // Correctly destructure the form values
        if (!value) {
          console.log('Form values are missing or undefined');
          return; // Check for undefined values and return early if invalid
        }
      
        const errors = {};
      
        // Email validation
        if (!value.email) {
          errors.email = 'Email is required';
        } else if (value.email.length < 3) {
          errors.email = 'Email must be at least 3 characters';
        }
      
        // Password validation
        const password = value.password;
        if (!password) {
          errors.password = 'Password is required';
        } else {
          const hasUpperCase = /[A-Z]/.test(password);
          const hasNumber = /[0-9]/.test(password);
          const hasSpecialChar = /[!@#$%^&*]/.test(password);
      
          if (!hasUpperCase) {
            errors.password = 'Password must contain at least one uppercase letter';
          } else if (!hasNumber) {
            errors.password = 'Password must contain at least one number';
          } else if (!hasSpecialChar) {
            errors.password = 'Password must contain at least one special character';
          }
        }
      
        // Verify password validation
        if (!value.verifyPassword) {
          errors.verifyPassword = 'Please confirm your password';
        } else if (value.verifyPassword !== password) {
          errors.verifyPassword = 'Passwords do not match';
        }
      
        // Log the errors object for debugging
        console.log('Errors found:', errors);
      
        // If errors exist, set them and do not proceed
        if (Object.keys(errors).length > 0) {
          form.setErrors(errors);
          return;
        }
      
        // No errors, proceed with form submission
        console.log('Form submitted successfully:', value);
      }
      ,
  });

  const hasErrors = Object.keys(form.errors || {}).length > 0;

  return (
    <div>
      <h1>Simple Form Example</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // Log before calling handleSubmit to ensure the submit is triggered
          console.log('Form submitted, invoking handleSubmit...');
          form.handleSubmit(); // Trigger form submission handler
        }}
      >
        <div>
          <form.Field
            name="email"
            children={(field) => (
              <>
                <label htmlFor={field.name}>е-пошта:</label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <div>
          <form.Field
            name="password"
            children={(field) => (
              <>
                <label htmlFor={field.name}>пароль:</label>
                <input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <div>
          <form.Field
            name="verifyPassword"
            children={(field) => (
              <>
                <label htmlFor={field.name}>підтвердити пароль:</label>
                <input
                  id={field.name}
                  name={field.name}
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {/* Display error message if verifyPassword field has an error */}
                {form.errors?.verifyPassword && (
                  <em style={{ color: 'red' }}>{form.errors.verifyPassword}</em>
                )}
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button type="submit" disabled={hasErrors || !canSubmit}>
              {isSubmitting ? '...' : 'Submit'}
            </button>
          )}
        />
      </form>
    </div>
  );
}
