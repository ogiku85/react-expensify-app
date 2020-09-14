import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';
import Header from '../components/header';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
  }) => (
      <Route {...rest} component={(props) => (
        isAuthenticated ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) : (
            <Redirect to="/" />
          )
      )} />
    );
export const PrivateRouteOLD = (props) =>{
    console.log('props in private route =', props);
    console.log('props.isAuthenticated =',props.isAuthenticated);
 return (<Route {...props}  component={(props)=>{
     return props.isAuthenticated ? 
     (<div>
         <Header/>
         {/* <props.component.name {...props}/> */}
     </div>)
     :
      (<Redirect to="/" />);

    //   const jsx =  props.isAuthenticated ? (<div><Header/><prop.component {...props}/> </div>)
    //   :(<Redirect to="/" />);
    // console.log('jsx =', jsx);
    //   return (jsx);
 }}/>);
};

const mapStateToProps = (state) =>{
    return {
        isAuthenticated: !!state.auth.uid
    }
};

export default connect(mapStateToProps)(PrivateRoute);