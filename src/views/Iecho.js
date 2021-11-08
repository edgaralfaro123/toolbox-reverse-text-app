import React,{useState,useEffect} from "react";
import Header from "../components/header";
import Body from "../components/Body";
import Consts from '../consts/index'
import { useDispatch ,useSelector} from 'react-redux'
const Iecho = ()=>{
    const dispatch = useDispatch();
    const list = useSelector(state => state?.listReducer?.list)
    const [result, setResult] = useState([])

    useEffect(() => {
        setResult(list)
    }, [])

    const request =  (inputValue) => {
        fetch(`${Consts.BaseRoute}${Consts.ReverseText}${inputValue}`)
        .then(response => response.json())
        .then(data => {
            if(data?.error===undefined){
                const formatedData =  [{...data, textoriginal: inputValue}]
                dispatch({ type: 'ADD_LIST', payload: {list:[...list,...formatedData]} });
                setResult([...list , ...formatedData])
            }else{
                alert(`${data?.error}`)
            }
        });
    }

    return (
        <div >
            <Header request={(event)=>request(event)}/>
            <div className='container p-3 m-5 bg-light justify-content-center m-0'>
                <Body data={result}></Body>
            </div>
        </div>
    )
}

export default Iecho;