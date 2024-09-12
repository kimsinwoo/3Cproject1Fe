import style from '../styles/PostModel.module.css';
import { useEffect, useState } from 'react';
import APIService from '../API/API';

const Post = ({ setPostsModel }) => {
    const [title, setTitle] = useState('');
    const [subcontent, setSubContent] = useState('');
    const [sns, setSns] = useState('');
    const [content, setContent] = useState('');
    const isDone = false;
    const authorId = localStorage.getItem('userId');

    useEffect(() => {
        setContent(`${subcontent} ${sns}`);
    }, [subcontent, sns]);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            // content를 useEffect 외부에서 직접 조작하는 대신, 최신 상태를 사용하도록 보장
            const currentContent = `${subcontent} ${sns}`;

            // API 호출
            const res = await APIService.recruitments(title, currentContent, isDone, authorId);
            console.log(res);

            // 제출 후 모달 닫기
            setPostsModel(false);
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={style.container}>
            <form className={style.form_container} onSubmit={submitHandler}>
                <button type="button" onClick={() => setPostsModel(false)}>X</button>
                <h3>게시물 작성</h3>
                <div className={style.input_box}>
                    <input
                        type="text"
                        placeholder="제목을 입력해주세요."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="상세 설명을 입력해주세요."
                        value={subcontent}
                        onChange={(e) => setSubContent(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="연락 가능한 sns 아이디를 입력해주세요."
                        value={sns}
                        onChange={(e) => setSns(e.target.value)}
                    />
                    <button type="submit">제출</button>
                </div>
            </form>
        </div>
    );
};

export default Post;