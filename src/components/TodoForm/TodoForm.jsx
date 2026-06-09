import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import './TodoForm.scss';

const validationSchema = Yup.object().shape({
  value: Yup.string()
    .min(3, 'Мінімум 3 символи')
    .required('Обов\'язкове поле! Введіть назву задачі.'),
  deadline: Yup.date().nullable(), 
});

const TodoForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="todo-form-container">
   
      <Formik
        initialValues={{ value: '', deadline: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          
          dispatch(addTodo(values));
         
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="todo-form">
            
            <div className="input-group">
              <Field
                type="text"
                name="value"
                placeholder="Що потрібно зробити?"
              
                className={classNames('form-input', {
                  'form-input--error': errors.value && touched.value,
                })}
              />
            
              <ErrorMessage name="value" component="div" className="error-text" />
            </div>

            <div className="input-group">
              <Field
                type="date"
                name="deadline"
                className="form-input"
              />
            </div>

            <button type="submit" className="submit-btn">
              Додати
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoForm;