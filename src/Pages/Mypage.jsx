import APIService from '../API/API';
import { useEffect, useState } from 'react';
import style from '../styles/MyPage.module.css'
import { useNavigate } from 'react-router-dom';
import PostsList from '../Components/MyPagePosts'

const MyPage = () => {
    const [userData, setUserData] = useState()
    const [userName, setUserName] = useState()
    const [recruitments, setRecruitments] = useState([])

    const [id, setUserId] = useState(localStorage.getItem('userId'))

    const navigator = useNavigate()

    useEffect(()=> {
        if(!id) {
            alert('로그인을 해주세요.')
            navigator('/login')
        } else {
            userHandler()
        }
    })
    const userHandler = async () => {
        try {
            const res = await APIService.userData(id)
            setUserData(res.data[0])
            setUserName(userData.name)
            setRecruitments(userData.recruitments)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={style.MyPage_container}>
            <div className={style.MyPage_userName}>
                <h3>{userName}</h3>
            </div>
            <div className={style.Posts_list}>
                {
                    recruitments && recruitments.map((a, i) => {
                        return (
                            <PostsList key={i} postsId={a.id} title={a.title} content={a.content} name={userName} isDone={a.isDone} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyPage