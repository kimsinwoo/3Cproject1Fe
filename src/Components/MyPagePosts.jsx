import style from '../styles/PostsList.module.css'
import APIService from '../API/API'

const MyPagePosts = ({ title, content, name, isDone, postsId }) => {
    const isDoneHandler = async () => {
        const res = await APIService.isDone(postsId)
        console.log(res)
    }
    const DeleteHandler = async () => {
        const res = await APIService.recuritmentsDelete(postsId)
        console.log(res)
    }
    return (
        isDone === false
            ?
            <div className={style.container} >
                <div className={style.title_content}>
                    <h2>{title}</h2>
                    <h3>{content}</h3>
                </div>
                <div className={style.user_date}>
                    <h6>작성자 : {name}</h6>
                    <button
                        onClick={() => {
                            try {
                                isDoneHandler()
                            } catch (error) {
                                console.log(error)
                            }
                        }}
                    >
                        모집 완료
                    </button>
                    <button
                        className={style.DeleteButton}
                        onClick={() => {
                            try {
                                DeleteHandler()
                            } catch (e) {
                                console.log(e)
                            }
                        }}>삭제</button>
                </div>
            </div >
            :
            <div className={style.container2} >
                <div className={style.title_content2}>
                    <h2>{title}</h2>
                    <h3>{content}</h3>
                </div>
                <div className={style.user_date2}>
                    <h6>작성자 : {name}</h6>
                    <button disabled >모집 완료</button>
                    <button 
                        className={style.DeleteButton}
                        onClick={() => {
                            try {
                                DeleteHandler()
                            } catch (e) {
                                console.log(e)
                            }
                        }}
                    >삭제</button>
                </div>
            </div >
    )
}

export default MyPagePosts