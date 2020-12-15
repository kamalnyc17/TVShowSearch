import React, { Component } from "react";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import FetchAPI from "../utils/API";
import Results from "../components/Results";
import VisitSiteBtn from "../components/VisitSiteBtn";
import NoImage from "../assets/no-image-available.jpg"

class Search extends Component {
  state = {
    search: "",
    results: []
  };
  
  searchTVMaze = query => {
    let query1 = query.replace(" ", "+");
    FetchAPI(query1)
      .then(res => this.setState({ results: res.data, search: ""}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleBookSearch = event => {
    event.preventDefault();
    this.searchTVMaze(this.state.search);
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Heading>
              <h1>PennyMac React App</h1>
              <h3>Search for Television Shows</h3>
            </Heading>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <SearchBar>              
              <h3>Search by Show Title</h3>
                <form>
                  <Input
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    name="search"
                    placeholder="Enter some text of the title you are looking for"
                  />                                    
                  <FormBtn
                    disabled={!(this.state.search)}
                    onClick={this.handleBookSearch}
                  >
                    Search
                  </FormBtn>
                </form>
            </SearchBar>
          </Col>
        </Row>
        {this.state.results.length > 0 &&
        <Row>
          <Col size="md-12">
            <Results>
              <ul className="list-group">
                {this.state.results.map(result => (
                  <li className="list-group-item" key={result.show.id}>
                    <Row>
                      <Col size="md-2">
                          {result.show.image !== null ?
                            <img alt={result.show.name} className="img-fluid" src={result.show.image.medium} />
                            : <img alt={result.show.name} className="img-fluid" src={NoImage} />}
                      </Col>
                      <Col size="md-9" className="text-justify">
                        <b>Rating: </b>{result.show.rating && result.show.rating.average && result.show.rating.average.toString()}
                        {" "}<b>Language: </b>{result.show.language}
                        {" "}<b>Network: </b>{result.show.network && result.show.network.name}
                        {" "}<b>Genres: </b>{result.show.genres && result.show.genres.join(', ')}
                        {" "}<b>Status: </b>{result.show.status} <br />
                        <hr className="hr-line"/>
                        <div dangerouslySetInnerHTML={{ __html: result.show.summary }} />
                      </Col>
                      <Col size="md-1">
                        <VisitSiteBtn onClick={() => window.open(result.show.officialSite)}/>
                      </Col>            
                    </Row>
                  </li>
                ))}
              </ul>
            </Results>
          </Col>
        </Row>}
      </Container>
    );
  }
}

export default Search;