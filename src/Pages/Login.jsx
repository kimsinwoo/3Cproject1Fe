import { useState } from 'react'
import APIService from '../API/API'
import {Cookies} from 'react-cookie';
import style from '../styles/Login.module.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const cookies = new Cookies();
    const [res,setData] = useState()
    const [userId,setId] = useState()
    const [password, setPassword] = useState()
    const navigator = useNavigate()

    const LoginHandler = async () => {
        try {
            const res = await APIService.login(userId, password)
            setData(res)
            if(res.status === 200) {
                localStorage.setItem('userId', userId)
                alert('로그인이 완료되었습니다.')
                navigator('/')
            }
        } catch (error) {
            if(error.status === 404) {
                alert('존재하지 않는 계정입니다.')
            } else if (error.status == 403) {
                alert('비밀번호 또는 아이디가 틀렸습니다.')
            }
        }
    }

    return (
        <div>
            <form className={style.LoginForm} action="" onSubmit={(e) => {
                e.preventDefault()
                LoginHandler()}
                }
            >
                <h3>로그인</h3>
                <input placeholder='아이디를 입력해주세요.' className={style.IdInput} type="text" onChange={(e) => {
                    setId(e.target.value)
                }} />
                <input placeholder='비밀번호를 입력해주세요.' className={style.PasswordInput} type="password" onChange={(e) => {
                    setPassword(e.target.value)
                    console.log(password)
                }} />
                <input type="submit" value="로그인" />
            </form>
        </div>
    )
}

export default Login