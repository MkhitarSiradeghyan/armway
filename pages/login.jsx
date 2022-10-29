import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import Container from '../components/Container'
import s from '../styles/Login.module.sass'

const Login = () => {

    const {
        register,
        watch,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm()

    const onSubmit = data => console.log(data)

    return (
        <div className={s.login}>
            <Container>
                <div className={s.wrap}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.name}>
                            <input name='name' className={s.input} {...register("name")} placeholder='Name' type="text" />
                        </div>
                        <div className={s.pass}>
                            <input name="password" className={s.input} {...register("password")} placeholder='********' type="password" />
                        </div>
                        <Button title="Login"/>
                    </form>
                </div>
            </Container>
        </div>
    )
}


export default Login