import React from 'react';
import { useForm } from 'react-hook-form';
import { FormSchema } from '../types/formTypes';

const FormPreview: React.FC<{ schema: FormSchema }> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h2>{schema.formTitle}</h2>
      <p>{schema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {schema.fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            <input
              id={field.id}
              {...register(field.id, { 
                required: field.required, 
                pattern: field.validation 
                  ? { value: new RegExp(field.validation.pattern), message: field.validation.message }
                  : undefined 
              })}
              placeholder={field.placeholder}
              type={field.type}
            />
            {errors[field.id] && (
              <span>{(errors[field.id] as any).message}</span>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPreview;
