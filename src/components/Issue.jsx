import React from 'react';
import { Link } from "react-router-dom";

    const Issue = (props) => {
        return (
        <div>
            <a href={props.issue.url}><h1>{props.issue.title}</h1></a>
            <p>{props.issue.body}</p>
        </div>
    )
};

export default Issue;