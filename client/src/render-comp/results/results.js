import React, {Component} from "react";
import {ArticleList, ArticleListItem} from "../../components/results";

class Results extends Component {
    state = {
        articles: []
    };

    render () {
        return (
            <ul>
                <ArticleListItem />
            </ul>
        );
    }
}

export default Results;