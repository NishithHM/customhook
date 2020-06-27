import React from 'react';
import { Route, withRouter} from 'react-router-dom'
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';

function App(props) {
  return (
    <div className="App">
      <Route render={()=> <Page1 {...props}/>} path='/' exact/>
      <Route render={()=> <Page2 {...props}/>} path='/2' exact/>
      <Route render={()=> <Page3 {...props}/>} path='/3' exact/>
    </div>
  );
}


export default withRouter(App);
