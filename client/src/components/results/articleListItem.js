import React from "react";

export const ArticleListItem = props => (
    <li className="list-group-item">
        <h2>{props.title}</h2>
        <p>Published: {props.date}</p>
        <a href={props.href}>
            Go to article!
        </a>
    </li>
);