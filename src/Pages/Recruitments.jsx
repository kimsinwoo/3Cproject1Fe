import { useState, useEffect } from 'react'
import APIService from '../API/API'
import style from '../styles/Recruitments.module.css'
import { useNavigate } from 'react-router-dom'
import PostsList from '../Components/PostsList'
import Post from '../Components/Post'

const Recruitments = () => {
    const [posts, setPosts] = useState()
    const [name, setName] = useState()
    const [postModel, setPostsModel] = useState(false)
    const navigator = useNavigate()
    useEffect(() => {
        PostsRefresh()
    }, [])

    const PostsRefresh = async () => {
        const res = await APIService.recruitmentsPosts()
        setName(res.name)
        setPosts(res.Posts)
    }
    return (
        <div className={style.Recruitents_body}>
            {postModel && <Post setPostsModel={setPostsModel}/>}
            <div className={style.recruitents_button}>
                <div>
                    <button onClick={() => navigator("/mypage")}>
                        내 게시물 확인하기
                    </button>
                    <button onClick={() => setPostsModel(true)}>
                        게시물 포스트
                    </button>
                </div>
            </div>
            {
                posts && posts.map((a, i) => {
                    const utcDatetime = a.createAt;

                    // Date 객체 생성
                    const date = new Date(utcDatetime);

                    // 한국 표준시(KST)로 변환하기 위한 옵션 설정
                    const options = {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        timeZone: 'Asia/Seoul',
                        hour12: false
                    };

                    // 날짜와 시간을 KST로 포맷
                    const formatter = new Intl.DateTimeFormat('en-US', options);
                    const formattedDate = formatter.format(date);
                    return (
                        <PostsList className={style.PostsList} key={i} isDone={a.isDone} title={a.title} content={a.content} name={name} create={formattedDate} />
                    )
                })
            }
        </div>
    )
}

export default Recruitments