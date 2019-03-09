import React, { Component } from "react";
import dbAPI from "../utils/dbAPI";


class Favorites extends Component{
    state= {
        favBooks: []
    };

    componentDidMount(){
        dbAPI.getBooks().then(res=> {
            this.setState({favBooks: res});
        });
    }

    render() {
        return (
            <h1>Favorites Page!</h1>
        );
    }
}

export default Favorites;