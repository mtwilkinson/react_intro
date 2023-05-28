function Button({setName}) {
    return <>
        <button className={"button"} onClick={setName}>Change message</button>
    </>;
}

export default Button;