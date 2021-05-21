import React, { Component } from "react";
import {Media,Container,Col,Row, ListGroup, Card} from "react-bootstrap";

/////hook examples

// class Example extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0
//       };
//     }
  
//     render() {
//       return (
//         <div>
//           <p>Вы кликнули {this.state.count} раз(а)</p>
//           <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//             Нажми на меня
//           </button>
//         </div>
//       );
//     }
//   }

//    function Example() {
//      const [count, setCount] = useState(0);

//     return (
//        <div>
//          <p>Вы кликнули {count} раз(а)</p>
//          <button onClick={() => setCount(count + 1)}>
//          Нажми на меня
//         </button>
//       </div>
//    );
//  }

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    lorem ipsum dolor
                                </p>
                            </Media.Body>

                        </Media>
                        <Media className="m-5">
                            <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    lorem ipsum dolor
                                </p>
                            </Media.Body>

                        </Media>
                        <Media className="m-5">
                            <img 
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    lorem ipsum dolor
                                </p>
                            </Media.Body>

                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item >Html/Css</ListGroup.Item>
                                <ListGroup.Item >JavaScript</ListGroup.Item>
                                <ListGroup.Item >Pyton</ListGroup.Item>
                                <ListGroup.Item >Java</ListGroup.Item>
                                <ListGroup.Item >C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet v
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}