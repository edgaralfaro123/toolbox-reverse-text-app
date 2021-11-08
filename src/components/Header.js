import React,{useState} from "react";
const Header = ({request}) => {
    const [inputValue, setInputValue] = useState('')
    const onChangeValue = ({target}) =>{
        setInputValue(target?.value)
    }

    return (
        <div className='row justify-content-center m-0 bg-danger'>
            <div className="col-lg-4 cardContainer pt-4 pb-4">
                <input className="form-control" value={inputValue} onChange={onChangeValue}></input>
            </div>
            <div className="col-lg-2 cardContainer pt-4 pb-4">
                <button className="btn btn-primary" onClick={()=>request(inputValue)}>Envíar</button>
            </div>
        </div>
    )
}

export default Header;