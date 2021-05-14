import React from 'react'

const InputHook = (obj) => {
    const [state, setState] = React.useState(obj);
    const handleInput = (e) => {
        setState({...state, [e.target.name]: e.target.value});
      };
    const clear = () => {
      setState(obj);
    }
    return [state, handleInput, clear];
}

export default InputHook
