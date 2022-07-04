import { useFormik } from 'formik'
import * as Yup from 'yup';

import './LoginPage.css'

const LoginPage = ({setIsLogined}) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Обязательное поле!'),
            password: Yup.string().required('Обязательное поле!')
        }),
        onSubmit: values => {   
            console.log(JSON.stringify(values, null, 2));
            setIsLogined(true);
        }, 
    })

    return(
        <div className='LoginPage__wrapper'>
            <div className='LoginPage__title'>Here is ZK project! Login to continue</div>
            <form onSubmit={formik.handleSubmit} className='LoginPage__form'>

                <input type="text" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} id="name" name="username" className='LoginPage__input' placeholder='username'/>
                {formik.errors.username && formik.touched.username ? <div>{formik.errors.username}</div> : null}

                <input type="text" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id="password" name="password" className='LoginPage__input' placeholder='password'/>
                {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}

                <button type="submit">Submit</button>

            </form>
        </div>   
    )
}

export default LoginPage