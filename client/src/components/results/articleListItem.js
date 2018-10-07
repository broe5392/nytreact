import React from "react";

export const ArticleListItem = props => (
    <li className="list-group-item">
        <h2>{props.title}</h2>
        <p>Sneak Peak: {props.sneakPeak}</p>
        <a href={props.href}>
            Go to article!
        </a>
    </li>
);