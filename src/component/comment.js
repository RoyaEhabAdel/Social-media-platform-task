import '../App.css';
import Records from '../data.json'
import { useRef } from 'react';

function Comment({onComment, CommentDone, desiredPostsID}) {
    const inputRef = useRef();
    function postCommentData(){
        Records.map((record) => {
            return record.sharingContent = inputRef.current.value;
        })
    }
    
    return(
        <div className='pop-up'>
            
        
        <div className='comment'>
            <div className='comment-header'>
                <h2>Comment</h2>
            </div>
            <div className='comment-content-body'>
                <input type='text' ref={inputRef} placeholder='Enter a comment' />
                
            </div>
            <div className='comment-footer'>
            <button onClick={() =>{postCommentData(); onComment(desiredPostsID); CommentDone(); }}>Comment</button>

            </div>
        </div>
          
    
    </div>
    )
}

export default Comment;