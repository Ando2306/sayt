import React ,{Component} from "react";
import{Container,Tab,Row,Col,Nav} from "react-bootstrap";


export default class About extends Component{
    render(){
        return(
           <Container>
               <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                   <Row>
                       <Col sm={3}>
                           <Nav variant="pills" className="flex-column mt-2">
                               <Nav.Item>
                                   <Nav.Link eventKey="first">Design</Nav.Link>
                                   <Nav.Link eventKey="second">Team</Nav.Link>
                                   <Nav.Link eventKey="third">Programming</Nav.Link>
                                   <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                   <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                               </Nav.Item>

                           </Nav>
                       </Col>
                       <Col sm={9}>
                           <Tab.Content className="mt-3">
                               <Tab.Pane eventKey="first">
                                   <img src="https://i.pinimg.com/originals/4e/6c/bb/4e6cbb5a04cf5a06bde6ef21a89de076.png" width="100%"/>
                                   <p>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been 
                                    the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a 
                                    galley of type and scrambled it to make a type specimen book. 
                                   </p>
                               </Tab.Pane>
                           </Tab.Content>
                           <Tab.Content>
                               <Tab.Pane eventKey="second">
                                   <img src="https://figma.imgix.net/2Bg3E11i36sqsemMasYMyK/b635c4ef507c46bfc30c2ce79db42628/designers.png?&w=1060&auto=compress%2Cformat&crop=entropy&fit=crop&q=75" width="100%"/>
                                   <p>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been 
                                    the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a 
                                    galley of type and scrambled it to make a type specimen book. 
                                   </p>
                               </Tab.Pane>
                           </Tab.Content>
                           <Tab.Content>
                               <Tab.Pane eventKey="third">
                                   <img src="https://rondesign.agency/wp-content/uploads/2020/03/Figma.png" width="100%"/>
                                   <p>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been 
                                    the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a 
                                    galley of type and scrambled it to make a type specimen book. 
                                   </p>
                               </Tab.Pane>
                           </Tab.Content>
                           <Tab.Content>
                               <Tab.Pane eventKey="fourth">
                                   <img src="https://i.pinimg.com/originals/c5/51/df/c551df1530c1040e09357d7b53b8ccdb.jpg" width="100%"/>
                                   <p>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been 
                                    the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a 
                                    galley of type and scrambled it to make a type specimen book. 
                                   </p>
                               </Tab.Pane>
                           </Tab.Content>
                           <Tab.Content>
                               <Tab.Pane eventKey="fifth">
                                   <img src="https://assets.materialup.com/uploads/080fe28a-a330-4ca3-9032-f5300566df9f/preview.png" width="100%"/>
                                   <p>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been 
                                    the industry's standard dummy text ever since 
                                    the 1500s, when an unknown printer took a 
                                    galley of type and scrambled it to make a type specimen book. 
                                   </p>
                               </Tab.Pane>
                           </Tab.Content>
                       </Col>
                   </Row>
               </Tab.Container>
           </Container>
        )
    }
}