import { Button, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Main() {
    return (
    <div>
    <Link className="btn btn-primary" to={'/home'}>Home</Link>
    <Link to={'/saved'}>Saved</Link>
    </div>
    )
}

export default Main