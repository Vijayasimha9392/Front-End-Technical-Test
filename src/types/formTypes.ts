export interface FormField {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  validation?: {
    pattern: string;
    message: string;
  };
}

export interface FormSchema {
  formTitle: string;
  formDescription: string;
  fields: FormField[];
}
