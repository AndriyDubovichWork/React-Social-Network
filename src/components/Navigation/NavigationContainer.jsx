import React from 'react';
import Navigation from './Navigation'
import StoreContext from './../../StoreContext'
const NavigationContainer = (props) => {
    
    return (
        
        <StoreContext.Consumer>
            {(store)=>{
                let state=store.getState()
                return <Navigation friends={state.sidebar.friends}/>

            }
        }       
        </StoreContext.Consumer>
        

            
        
    );
};

export default NavigationContainer;
