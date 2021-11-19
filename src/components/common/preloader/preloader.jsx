import React from 'react'
import preloader from '../../../assets/images/preloader.svg';

const Preloader = (props)=>{

  return(
    <div style={{ backgroundColor: '#00000' }}>
      <img alt='' src={preloader} />
    </div>   
  )


}
export default Preloader