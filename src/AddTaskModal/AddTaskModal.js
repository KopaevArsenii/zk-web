import { useFormik } from 'formik'
import * as Yup from 'yup';

import './AddTaskModal.css'

const AddTaskModal = ({isVisiable=false, onClose, addTask}) => {
    let employeeList=[{name: 'Кирилл Равель', id: 1}, {name: 'Копаев Арсений', id: 2}, {name: 'Попов Арсений', id: 3}];          //Временная data 
   
    const formik = useFormik({
        initialValues: {
            name: '',
            date: '',
            culture: '',
            employees: []
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Вы не ввели имя задачи!'),
            date: Yup.string().matches(/^[0-9]+\.[0-9]+\.[0-9]+$/, 'Неправильный формат даты!').required('Введите дату посадки!'),
            culture: Yup.string().required('Вы не выбрали культуру!'),
            employees: Yup.array().min(1,'Выберите хотя бы одного сотрудника!')
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))

            addTask(values.name, 'some state', values.date, values.culture, values.employees)             //Функция по созданию нового элемента списка
            
            values.name='';
            values.culture='';
            values.employees=[];
            values.date='';
        }
    })

    const handleChange = (e) => {
        const {checked, name} = e.target; 
        if (checked) {
            formik.setFieldValue("employees", [...formik.values.employees, name])
        } else {
            formik.setFieldValue("employees", formik.values.employees.filter((v) => v !== name))
        }
    }

    let employees = employeeList.map((item) => {
        return(
            <div key={item.id}>
                <p>
                    <input type="checkbox" name={item.id} value={item.id} onChange={handleChange} onBlur={formik.handleBlur} key={item.id}/>
                    <span>{item.name}</span>
                </p>
            </div>
        )
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

                        <p></p>
                        <span>Select planting date</span>
                        <input id="date" name="date" type="text" value={formik.values.date} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                        {formik.errors.date && formik.touched.date ? <div>{formik.errors.date}</div> : null}

                        <p></p>
                        <select id="culture" name="culture" value={formik.values.culture} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                            <option value="">Select the culture</option>
                            <option value="culture 1">culture 1</option>
                            <option value="culture 2">culture 2</option>
                            <option value="culture 3">culture 3</option>
                        </select>
                        {formik.errors.culture && formik.touched.culture ? <div>{formik.errors.culture}</div> : null}

                        <p></p>
                        <span>Choose the employee</span>
                        {formik.errors.employees && formik.touched.employees ? <div>{formik.errors.employees}</div> : null}
                        {employees}


                        <button type='submit'>Add task</button>


                    </form>
            </div>
        </div>
    </div>
    )
}

export default AddTaskModal