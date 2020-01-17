import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { GoogleList, GoogleListItem } from "./components/GoogleList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    books: [],
    googleSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
  console.log(this.state.googleSearch)
    // When the form is submitted, prevent its default behavior, get book update the books state
    event.preventDefault();
    API.getGoogleBooks(this.state.googleSearch)
      .then(res => {
        console.log(res)
        this.setState({ books: res.data.items })})
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="googleSearch"
                        value={this.state.googleSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book!"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                <GoogleList>
                  {this.state.books.map(books => {
                    return (
                      <GoogleListItem
                        key={books.volumeInfo.title}
                        title={books.volumeInfo.title}
                        href={books.volumeInfo.previewLinks}
                        summary={books.volumeInfo.description}
                        thumbnail={books.volumeInfo.imageLinks.thumbnail}
                      />
                    );
                  })}
                </GoogleList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
