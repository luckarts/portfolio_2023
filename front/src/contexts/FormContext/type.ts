import { ReactNode } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { UseFormRegister, UseFormHandleSubmit, FieldValues, FieldErrors } from 'react-hook-form';
import { RulesType } from 'src/common/rules/type';
export interface FormContextProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  errors: FieldErrors<FieldValues>;
  fields: any[];
  title: string;
  rules?: RulesType;
  handleOnDrop?: (e: React.DragEvent) => void;
  onSubmit: SubmitHandler<FieldValues>;
  addFields?: () => void;
  defaultValue?: any;
}

export interface FormProviderProps {
  fields: any[];
  title: string;
  rules?: RulesType;
  handleOnDrop?: (e: any) => void;
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  addFields?: () => void;
  defaultValue?: any;
}
