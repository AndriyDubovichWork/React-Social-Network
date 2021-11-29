export const Required = (value) => {
    if (!value) {
        return 'This Field is required';
    }
    return undefined;
};
export const MaxLenghtCreator = (maxLength) => (value) => {
    if (value && value.length >= maxLength) {
        return `Max Length ${maxLength} symbols`;
    }

    return undefined;
};
