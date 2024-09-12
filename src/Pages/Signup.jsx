import { useState } from 'react'
import APIService from '../API/API'
import style from '../styles/Signup.module.css'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [userId, setUserId] = useState()
    const [password, setPassword] = useState()
    const [check_password, setCheck_password] = useState()
    const [name, setName] = useState()

    const navigator = useNavigate()

    const RegisterHandler = () => {
        try {
            const res = APIService.register(userId, password, check_password, name)
            if (res.status === 200) {
                alert('회원가입에 성공하였습니다.')
                localStorage.setItem('userId', userId)
                navigator('/')
            }
        } catch (e) {
            console.log(e)
            if(e.status === 409) {

            }
        }
    }
    return (
        <div className={style.container}>
            <form className={style.form_container} onSubmit={(e) => {
                e.preventDefault()
                RegisterHandler()}}>
                <h2 style={{textAlign:"center"}}>회원가입</h2>
                <input
                    type="text"
                    placeholder='아이디를 입력해주세요.'
                    onChange={(e) => {
                        setUserId(e.target.value)
                    }} />
                <input
                    type="password"
                    placeholder='비밀번호를 입력해주세요.'
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                <input
                    type="password"
                    placeholder='비밀번호 재입력'
                    onChange={(e) => {
                        setCheck_password(e.target.value)
                    }} />
                <input 
                    type="text"
                    placeholder='이름을 입력해주세요.'
                    onChange={(e) => {
                    setName(e.target.value)
                }} />
                <button type='submit'>회원 가입</button>
            </form>
        </div>
    )
}

export default Signup