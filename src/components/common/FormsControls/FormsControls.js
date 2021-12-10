import React from 'react';
import { Field } from 'redux-form';
import styles from './FormsControlss.module.css';

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={styles.formControl}>
      <div className={hasError ? styles.error : ''}>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const TextArea = (props) => {
  const { input, meta, ...restprops } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restprops} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, ...restprops } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restprops} />
    </FormControl>
  );
};

export const createFields = (component, name, type, placeholder, validate) => (
  <Field
    component={component}
    name={name}
    type={type}
    placeholder={placeholder}
    validate={validate}
  />
);
