import React from 'react';
import styles from './FormsControlss.module.css';

export const TextArea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl}>
            <div className={hasError ? styles.error : ''}>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};
