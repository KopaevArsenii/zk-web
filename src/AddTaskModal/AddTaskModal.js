import { useFormik } from 'formik'
import * as Yup from 'yup';

import './AddTaskModal.css'

const AddTaskModal = ({isVisiable=false, onClose}) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            culture: '',
            employee1: false, 
            employee2: false,
            employee3: false
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Обязательное поле'),
            culture: Yup.string().required('Выберите культуру'),
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        }
    })

    return !isVisiable ? null :
    (
        <div className='Modal'>
            <div className='Modal-dialog'>
                <div className='Modal-header'>
                    <span className='Modal-title'>Add new task</span>
                    <span className='Modal-close' onClick={onClose}>&times;</span>
                </div>
                <div className='Modal-content'>
                    <form className='Modal__form' onSubmit={formik.handleSubmit}>
                        <span>Enter task name</span>
                        <input id="name" name="name" type="text" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                        {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
                        <p>
                            <select id="culture" name="culture" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                <option>select culture</option>
                                <option value="culture 1">culture 1</option>
                                <option value="culture 2">culture 2</option>
                                <option value="culture 3">culture 3</option>
                            </select>
                            {formik.errors.culture && formik.touched.culture ? <div>{formik.errors.culture}</div> : null}
                        </p>
                        <p><span>Choose the employee</span></p>
                        <p><input type="checkbox" name="employee1" value={formik.values.employee1} onChange={formik.handleChange}/>employee1</p>
                        <p><input type="checkbox" name="employee2" value={formik.values.employee2} onChange={formik.handleChange}/>employee2</p>
                        <p><input type="checkbox" name="employee3" value={formik.values.employee3} onChange={formik.handleChange}/>employee3</p>
                        <button type='submit'>Add task</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal