function Homepage() {
    return <div className={"homepage"}>
        <h1>Welcome to React.</h1>
        <a href={`/name`}>
            <button className={"button"}>Press this to add a name</button>
        </a>
    </div>;
}

export default Homepage;