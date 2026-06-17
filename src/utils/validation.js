
import * as Yup from 'yup';

export const todoValidationSchema = Yup.object().shape({
  value: Yup.string()
    .trim()
    .min(3, 'Мінімум 3 символи')
    .max(150, 'Максимум 150 символів')
    .required('Обов\'язкове поле! Введіть назву задачі.'),
  deadline: Yup.date().nullable(), 
});