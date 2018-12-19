const React = require('react');
const { Card, Container, Row, Col, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } = require('reactstrap');


class ImageTeaser extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <CardImg
                top width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and
                  make up the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

module.exports = ImageTeaser;
