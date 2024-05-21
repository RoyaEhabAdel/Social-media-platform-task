import '../App.css';
import {React, useState} from 'react';
import Records from '../data.json';
import Sharing from './sharing';
import Comment from './comment';

function Post(){
    const [posts, setPosts] = useState(
        Records.map(post => ({
          ...post,
          likeNum: 0,
          liked: false,
        }))
      )
    const [likedPostsIDs, setLikedPostsIDs] = useState([])
    const [desiredPostsID, setDesiredPostsID] = useState(null)
    const [sharingPostID, setSharingPostID] = useState(null)

    const [showSharing, setShowSharing] = useState(false);
    const [showComment, setShowComment] = useState(false)
    
   

    function handleincrementLike(id) {
        
        if(likedPostsIDs.includes(id)){
            const updatedPosts = posts.map(post => {
          
            return post.id === id ?{
              ...post,
              likeNum: post.likeNum - 1,
            } : post
          
        })
        setPosts(updatedPosts)
        const filteredIDs = likedPostsIDs.filter(item => item!==id)
        setLikedPostsIDs(filteredIDs)
      }
      else{
       
        const updatedPosts = posts.map(post => {
              return post.id === id ?  {
                ...post,
                likeNum: post.likeNum + 1,
              } : post
            

          })
          setPosts(updatedPosts)
          setLikedPostsIDs([...likedPostsIDs, id])
      }
}

    function handleComment()
        {
            setShowComment(showComment => !showComment)
        }
    function handleShare() {
            setShowSharing(showSharing => !showSharing)
        }

    function incrementShare(id){
            const updatedPosts = posts.map(post => {
                return post.id === id ?  {
                  ...post,
                  shareNum: post.shareNum + 1,
                } : post
            
            })
            setPosts(updatedPosts)
            setSharingPostID(null)
        }
    function incrementComment(id){
            
            const updatedPosts = posts.map(post => {
                return post.id === id ?  {
                  ...post,
                  commentNum: post.commentNum + 1,
                } : post
            
            })
            setPosts(updatedPosts)
            setDesiredPostsID(null)
        }
        

        
    return(

    <div>
    <div className='post'>

    {posts.map((record,i) => {
        return(
            <div key={record.id}>
            <div className='post-header'>
            <div className='person-info'>
                <img alt='' src={record.profileImage}/>
                <div className='person-identity'>
                 <h4>{record.name}</h4>
                 <h6>{record.email}</h6>  
                </div>
            </div>
            <div>
                <span>:</span>
            </div>
        </div>

        <div className='post-content'>
            <p>{record.postContent}</p>
            <img alt='' src={record.img} />
        </div>
        <div className='post-footer'>
            <div>
                <i className='bx bxs-like' onClick={() => {handleincrementLike(record.id)}}></i>
                <span>{record.likeNum}</span>
            </div>
            <div>
                <i className='bx bxs-comment-dots' onClick={() =>{handleComment(); setDesiredPostsID(record.id)}}></i>
                <span>{record.commentNum}</span>
            </div>
            <div>
                <i className='bx bxs-share' onClick={() =>{handleShare(); setSharingPostID(record.id)}}></i>
                <span>{record.shareNum}</span>
            </div>
        </div>
        </div>
        )
    })}
        
        

    </div>
    {
    showSharing && (<Sharing onShare={incrementShare} SharingDone={handleShare} sharingPostID={sharingPostID}/>)
    }
    {
    showComment && (<Comment onComment={incrementComment} CommentDone={handleComment} desiredPostsID={desiredPostsID}/>)
    }
    
    
    </div>
)
}

export default Post;
