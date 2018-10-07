import React, { Component } from "react";
import {Input, Submit, textArea} from "../../components/search";
import API from "../../utils/API";
import {ArticleList, ArticleListItem} from "../../components/results";
import { Link } from "react-router-dom"

class Home extends Component {
    state = {
        articles: [],
        articlesSearch: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getArticles(this.state.articlesSearch)
        .then(res => {
            this.setState({ articles: res.data.docs })
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <form>
                    <Input
                        name="articlesSearch"
                        value={this.state.articlesSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search for a NY times article"
                    />
                    <a href="/results">
                    <Submit
                        onClick={this.handleFormSubmit}
                    >Search!</Submit>
                    </a>
                </form>
                {!this.state.articles.length ? (
                    <h1 className="text-center">No Articles to Display</h1>
                ) : (
                    <ArticleList>
                        {this.state.articles.map(article => {
                            return (
                                <ArticleListItem
                                    key={article.headline.main}
                                    title={article.headline.main}
                                    sneakPeak={article.snippet}
                                    href={article.web_url}
                                />
                            );
                        })}
                    </ArticleList>
                )}
            </div>
        );
    }
}

export default Home;