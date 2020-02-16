
export const ADD_STEP = 'ADD_STEP';
export const RESET_STEPS = 'RESET_STEPS';

//Action creators
export const addStep = () => {
    return { type: ADD_STEP } 
}


export const resetSteps = () => {
    return { type: RESET_STEPS }
}

