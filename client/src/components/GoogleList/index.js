import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both bookList and bookListItem from this file

// bookList renders a bootstrap list item
export function GoogleList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// bookListItem renders a bootstrap list item containing data from the book api call
export function GoogleListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  summary,
  href
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Summary: {summary}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to your book!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
