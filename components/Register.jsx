import s from '../styles/Register.module.sass'
import Modal from './Modal'
import { useForm } from 'react-hook-form'


const Register = ({setModal}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()
    const onSubmit = data => console.log(data)
    return (
        <Modal setModal={setModal}>
            <div className={s.register}>
                <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.input}>
                        <input name='name' type="text" {...register("name")} placeholder="Name" />
                    </div>
                    <div className={s.input}>
                        <input name='phone' type="text" {...register("phone")} placeholder="Phone" />
                    </div>
                    <div className={s.input}>
                        <input name='email' type="text" {...register("email")} placeholder="Email" />
                    </div>

                    <div className={s.check}>
                        <input name='check' type="checkbox" id="check" {...register("check")} />
                        <label htmlFor="check">Я согласен на обработку моих персональных данных Я согласен на обработку моих персональных данных Я согласен на обработку моих персональных данных Я согласен на обработку моих персональных данных</label>
                    </div>
                    <button className={s.submit} type="submit">Submit</button>
                </form>
            </div>
        </Modal>
    )
}


export default Register