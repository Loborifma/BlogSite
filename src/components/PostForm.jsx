import React, {useState, useRef} from 'react';
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
 
const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) =>{
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''});
      }
    return (
        <form>
            <MyInput 
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text" 
                placeholder="Post name"
            />
            <MyInput
              value={post.body}
              onChange={e => setPost({...post, body: e.target.value})} 
              type="text"
              placeholder="Post desc"
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
    );
};
 
export default PostForm;