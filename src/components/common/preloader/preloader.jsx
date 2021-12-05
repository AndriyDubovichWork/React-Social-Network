import React from 'react'
import preloader from '../../../assets/images/preloader.svg';
import style from './preloader.module.css'


const Preloader = (props)=>{

  return(
    <div className={style.proloader}>
      <img alt='' src={preloader} />
    </div>   
  )


}
export default Preloader