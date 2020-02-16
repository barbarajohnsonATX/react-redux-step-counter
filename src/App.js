import React from 'react';
import { connect } from 'react-redux';
import { addStep, resetSteps } from './actions';
import './App.css';




function App({steps, addStep, resetSteps}) {
 
  return (
    <div className="App">
      <div>You've walked {steps} today!</div>
      <button onClick={addStep}>Add a Step</button>
      <button onClick={resetSteps}>Reset Steps</button>

    </div>
  );
}

const mapStateToProps = state => {
  return { steps: state.steps }};

 

export default connect(mapStateToProps, {addStep, resetSteps})(App);
