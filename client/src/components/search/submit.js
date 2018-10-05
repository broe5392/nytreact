import React from "react";

export const Submit = props => (
    <button {...props} className="btn btn-primary">
        {props.children}
    </button>
);