import {useState} from 'react';

const useToogle= () =>{
    const [status, setStatus]= useState(false);
    const toogleStatus = () => (previous => !previous);
    return [status, toogleStatus];
}