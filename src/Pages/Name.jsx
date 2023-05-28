import Message from '../Components/Message.jsx';
import {useState} from "react";
import Button from "../Components/Button";
import HomeButton from "../Components/HomeButton";

function Name() {
    const [name, setName] = useState("");
    const [val, setVal] = useState("enter text here");

    function buttonClicked() {
        setName(val);
        setVal("");
    }

    const change = event => {
        setVal(event.target.value)
    }
    return (
            <>
                <div>
                    <Message name={name}/>
                    <Button setName={buttonClicked} />
                    <input onChange={change} value={val}/>
                </div>
                <HomeButton />
            </>
    );
}

export default Name;