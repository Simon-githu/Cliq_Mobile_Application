import React,{ useState} from 'react';

//Navigation Rootstack
import RootStack from './src/navigators/RootStack';



import { store } from './src/store';
import { Provider } from 'react-redux';


export default function App() {
 
  const [storedCredentials,setStoredCredentials]=useState("");

  // //if app is not ready return apploading cmponents
 

  return (
  <Provider store={store}> 
 
  <RootStack/>

  </Provider> 
  );
}
