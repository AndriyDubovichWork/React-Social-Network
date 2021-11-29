import React from 'react';


class ProfileStatus extends React.Component {
    
    state = {
      EditMode:false,
      status:this.props.status
    }
    activateEditMode = ()=>{

      this.state.setState({
        EditMode:true
      }).bind(this)
    }  
    deactivateEditMode = ()=>{
      this.state.setState({
        EditMode:false
      })
      this.props.UpdateStatus(this.state.status)
    }  
    StatusChange=(e)=>{
      this.state.setState({
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
      
    return (       
        <div>
          {!this.state.EditMode&&
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status|| 'Account has nostatus'}</span>
          </div>
          }
          {this.state.EditMode&&
          <div>
            <input autoFocus={true} ref={this.statusInput}
            onBlur={this.deactivateEditMode.bind(this)} type='text' 
            value={this.state.status} onChange={this.StatusChange}/>  
          </div>        
          }
            
        </div>
    );
    }
};

export default ProfileStatus;
