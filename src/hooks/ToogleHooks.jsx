import {useState} from 'react';

export const useToogle= () =>{
    const [status, setStatus]= useState(false);
    const toogleStatus = () => setStatus((previous) => !previous);
    console.log(status);
    return {status, toogleStatus};
}
