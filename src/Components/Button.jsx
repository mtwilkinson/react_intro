function Button({setName}) {
    return <>
        <button className={"App-button"} onClick={setName}>Change message</button>
    </>;
}

export default Button;