import '../App.css';
import Records from '../data.json'
import { useRef } from 'react';

function Sharing({onShare, SharingDone, sharingPostID}) {
    const inputRef = useRef();
    function postSharingData(){
        Records.map((record) => {
            return record.sharingContent = inputRef.current.value;
        })
    }
    
    return(
        <div className='pop-up'>
        {Records.map((record,i) => {
            return(
        <div className='sharing' key={record.id}>
            <div className='sharing-header'>
                <h2>Share Post</h2>
            </div>
            <div className='sharing-content'>
                <input type='text' ref={inputRef} placeholder='Enter data' />
                <div className='sharing-post-content'>
                    <img alt='' src={record.img} />
                    <p>{record.postContent}</p>
                </div>
            </div>
            <div className='sharing-footer'>
            <button onClick={() =>{postSharingData(); onShare(sharingPostID); SharingDone()}}>Share</button>

            </div>
        </div>
            )
        })
    }
    </div>
    )
}

export default Sharing;