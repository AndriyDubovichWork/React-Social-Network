import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks=(props)=> {
    const [EditMode,setEditMode] = useState(false)  
    const [status,setStatus] = useState(props.status)  

    useEffect(()=>{
      setStatus(props.status)
    },[props.status])

    const activateEditMode =()=>{
      setEditMode(true)
    }
    const deactivateEditMode =()=>{
      setEditMode(false)
      props.UpdateStatus(status)
    }
    const StatusChange=(e)=>{
      setStatus(e.currentTarget.value)
    }
    return (       
        <div>
          {!EditMode&&
          <div>
            <span onDoubleClick={activateEditMode}>{status|| 'Account has no status'}</span>
          </div>
          }
          {EditMode&&
          <div>
            <input autoFocus={true} 
            type='text' value={status}
            onBlur={deactivateEditMode}
            onChange={StatusChange}
            />  
          </div>        
          }
            
        </div>
    );
    
};

export default ProfileStatusWithHooks;
