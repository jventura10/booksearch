import React, { Component } from "react";
import googleAPI from "../utils/googleAPI";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import dbAPI from "../utils/dbAPI";

class Search extends Component {
    state = {
        searchedBooks: [],
        title: "",
        error: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        //SEARCH GOOGLE BOOKS API
        event.preventDefault();
        googleAPI.searchBook(this.state.title).then(res => {
            console.log(res.data.items);
            this.setState({ searchedBooks: res.data.items, error: ""});
        }).catch(err=> {
            this.setState({error: err.message, searchedBooks: []});
        });
    };

    saveBook = dbEntry => {
        dbAPI.saveBook(dbEntry);
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Search Google Books API!</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Enter Title (required)"
                            />
                            <FormBtn
                                //disabled={!(this.state.author && this.state.title)}
                                onClick={this.handleFormSubmit}
                            >
                                Submit Book
                            </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Search Results</h1>
                        </Jumbotron>
                        {this.state.searchedBooks.length > 0 ? (
                            <List>
                                {this.state.searchedBooks.map(book => (
                                    <ListItem  
                                    key={book.id}  
                                    title={book.volumeInfo.title} 
                                    authors={book.volumeInfo.authors}
                                    image={book.volumeInfo.imageLinks.smallThumbnail || "N/A"}
                                    description={book.volumeInfo.description}
                                    link={book.volumeInfo.previewLink} 
                                    saveBook={this.saveBook}
                                    />
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;