import React from "react";
const Test = ({name = "", setName }) => {
    return (
    <>
    <h1>The name is: {name}</h1>
    <input type="text" onChange={(e) => setName(e.target.value)}/>
    </>
    );
};

export default Test;