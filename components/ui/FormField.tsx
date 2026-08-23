'use client';

interface FormFieldProps {
  id?: string;
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  className?: string;
}

export default function FormField({
  id,
  label,
  name,
  type = 'text',
  value,
  onChange,
  required,
  rows,
  className = '',
}: FormFieldProps) {
  const fieldId = id ?? `field-${name}`;

  return (
    <div className={`floating-field ${className}`}>
      {type === 'textarea' ? (
        <textarea
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows ?? 5}
          placeholder=" "
          className="floating-input floating-textarea"
        />
      ) : (
        <input
          type={type}
          id={fieldId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder=" "
          className="floating-input"
        />
      )}
      <label htmlFor={fieldId} className="floating-label">
        {label}
        {required && <span className="text-danger ml-0.5">*</span>}
      </label>
    </div>
  );
}
