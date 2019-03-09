import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";
import { FluidJumbotron } from "../components/Jumbotron";
import { List, ListItemTwo } from "../components/List";

class Favorites extends Component {
    state = {
        favBooks: []
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = () => {
        dbAPI.getBooks().then(res => {
            this.setState({ favBooks: res.data });
        });
    };

    deleteBook = bookID => {
        dbAPI.deleteBook(bookID).then(res => {
            this.loadBooks();
        });
    };

    render() {
        return (
            <div>
                <FluidJumbotron>
                    <h1 className="display-4">Saved Books!</h1>
                </FluidJumbotron>

                {this.state.favBooks.length > 0 ? (
                    <List>
                        {this.state.favBooks.map(book => (
                            <ListItemTwo
                                id={book._id}
                                key={book._id}
                                title={book.title}
                                authors={book.authors}
                                image={book.image || "N/A"}
                                description={book.description}
                                link={book.link}
                                deleteBook={this.deleteBook}
                            />
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}

            </div>
        );
    }
}

export default Favorites;