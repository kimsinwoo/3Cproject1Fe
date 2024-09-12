import { useState } from 'react'
import style from '../styles/PostsList.module.css'
import { useEffect } from 'react'

const PostsList = ({title, content, name, create, isDone}) => {
    const [container,setContainer] = useState()
    const [titleStyle,setTitleStyle] = useState()
    const [user,setUser] = useState()
    useEffect(() => {
        isDoneHandler()
    },[])
    const isDoneHandler = () => {
        if(isDone === true) {
            setContainer(style.container2)
            setTitleStyle(style.title_content2)
            setUser(style.user_date2)
        } else {
            setContainer(style.container)
            setTitleStyle(style.title_content)
            setUser(style.user_date)
        }
    }
    return (
        <div className={container}>
            <div className={titleStyle}>
                <h2>{title}</h2>
                <h3>{content}</h3>
            </div>
            <div className={user}>
                <h6>작성자 : {name}</h6>
                <h6>업로드 날짜 : {create}</h6>
            </div>
            {
                isDone === true ?
                <div className={style.isDone}>
                    <h2>모집 완료!</h2>
                </div>
                :
                ""
            }
        </div>
    )
}

export default PostsList