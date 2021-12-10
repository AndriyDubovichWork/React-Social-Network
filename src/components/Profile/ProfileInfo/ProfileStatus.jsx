import React from 'react';


class ProfileStatus extends React.Component {
    
    state = {
      EditMode:false,
      status:this.props.status
    }
    activateEditMode = ()=>{

      this.setState({
        EditMode:true
      })
    }  
    deactivateEditMode = ()=>{
      this.setState({
        EditMode:false
      })
      this.props.UpdateStatus(this.state.status)
    }  
    StatusChange=(e)=>{
      this.setState({
        status:e.currentTarget.value
      })
    }
    componentDidUpdate(prevProps,PrevState){
     
      if(prevProps.status!==this.props.status){
        this.setState({
          state:this.props.status
        })
      }
    }
    
    render(){
      console.log(this.state.status)
    return (       
        <div>
          {!this.state.EditMode&&
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.state.status|| 'Account has no status'}</span>
          </div>
          }
          {this.state.EditMode&&
          <div>
            <input autoFocus={true} 
            onBlur={this.deactivateEditMode.bind(this)} type='text' 
            value={this.state.status} onChange={this.StatusChange}/>  
          </div>        
          }
            
        </div>
    );
    }
};

export default ProfileStatus;
