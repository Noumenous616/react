import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';





const MyPosts = (props) => {



    let postElements = props.posts
        .map(p => <Post message={p.message} likeCount={p.likesCount}/>)

    let newPostElement = React.createRef();


    let onAddPost = () => {
        props.addPost();

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>

                <div>
                    <textarea onChange={onPostChange} ref={ newPostElement } value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;