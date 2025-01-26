import React from 'react';
import { createRoot } from 'react-dom/client';
import { useForm } from '@tanstack/react-form';


function FieldInfo({ field }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em>{field.state.meta.errors.join(", ")}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  );
}

//form with 3 validated fields fields, tanstack used to create form
//its sends out data with fetch
export default function App() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      try {
        const requestData = {
          email: value.email,
          password: value.password,  // Send raw password
        };
    
        const response = await fetch("http://localhost:8000/review", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        });
    
        if (!response.ok) {
          throw new Error("Failed to send data");
        }
    
        const result = await response.json();
        console.log("Data successfully sent:", result);
        alert("Form submitted successfully!");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please try again.");
      }
    }    
  });

  return (
    <div>
      <h1>Simple Form Example</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div>
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? 'Email must not be empty'
                  : value.length < 3
                    ? 'Email must be at least 3 letters long'
                    : !/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(value)
                      ? 'Invalid email format (Johndoe@gmail.com)'
                      : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return (
                  value.includes('error') &&
                  'No "error" allowed in email'
                );
              },
            }}
            children={(field) => (
              <>
                <label htmlFor={field.name}>Email</label>
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
            validators={{
              onChange: ({ value }) =>
                !value
                  ? 'Password must not be empty'
                  : value.length < 8
                    ? 'Password must be at least 8 characters long'
                    : !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(value)
                      ? 'Password must include at least one lowercase letter, one uppercase letter, one number, and one special character'
                      : undefined,
              onChangeAsyncDebounceMs: 500,
            }}
            children={(field) => (
              <>
                <label htmlFor={field.name}>Password</label>
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
            name="passwordVerify"
            validators={{
              onChange: ({ value }) =>
                value !== form.getFieldValue('password')
                  ? 'Passwords must match'
                  : undefined,
            }}
            children={(field) => (
              <>
                <label htmlFor={field.name}>Verify Password:</label>
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

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button type="submit" disabled={!canSubmit}>
              {isSubmitting ? '...' : 'Submit'}
            </button>
          )}
        />
      </form>
    </div>
  );
}