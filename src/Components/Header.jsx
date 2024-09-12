import { Link } from "react-router-dom"
import style from '../styles/Header.module.css'
import { useState } from "react"
import { useEffect } from "react"

const Header = () => {
    const [isLogin, setIsLogin] = useState(false)
    const userId = localStorage.getItem('userId')
    useEffect(() => {
        if(userId) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    },[])
    return (
        <div className={style.Header_Container}>
            <ul>
                <li>
                    <Link className={style.Link} to="/">BeatChase</Link>
                </li>
                <li>
                    <Link className={style.Link} to="">대회 목록</Link>
                </li>
                <li>
                    <Link className={style.Link} to="/recruitments">참가자 모집</Link>
                </li>
            </ul>
            {
                isLogin === true ?
                    <ul>
                        <li><button 
                            className={style.logoutbuttone} 
                            onClick={() => {
                            setIsLogin(false)
                            localStorage.removeItem('userId')
                        }}>로그아웃</button></li>
                        <li><Link className={style.Link} to="/mypage">마이 페이지</Link></li>
                    </ul> :
                    <ul>
                        <li>
                            <Link className={style.Link} to="/login">로그인</Link>
                        </li>
                        <li>
                            <Link className={style.Link} to="/signup">회원가입</Link>
                        </li>
                    </ul>
            }
        </div>
    )
}

export default Header