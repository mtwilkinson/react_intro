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
            <div className={"name"}>
                <Message name={name}/>
                <div>
                    <Button setName={buttonClicked} />
                    <input className={"textbox"} onChange={change} value={val}/>
                </div>
                <HomeButton />
            </div>
    );
}

export default Name;