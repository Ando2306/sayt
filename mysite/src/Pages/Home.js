import React ,{Component} from "react";
import CarouselBox from "../Components/CarouselBox";
import  Carousel from "react-bootstrap/Carousel";
import {Container,CardDeck,Card,Button} from "react-bootstrap";


export default class Home extends Component{
    render(){
        return(
            <>
           <CarouselBox/>
           <Container>
               <h2 className="text-center m-4">Our team</h2>
               <CardDeck>
                   <Card bg="success">
                       <Card.Img
                       variant="top"
                       src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                       />
                       <Card.Body>
                           <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </Card.Text>
                            <Button varian="primary">Amout team</Button>
                       </Card.Body>
                   </Card>
                   <Card>
                      
                       <Card.Body>
                           <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </Card.Text>
                            <Button varian="primary">Amout team</Button>
                       </Card.Body>
                       <Card.Img
                       variant="bottom"
                       src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                       />
                   </Card>
                   <Card>
                       <Card.Img
                       variant="top"
                       src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                       />
                       <Card.Body>
                           <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            </Card.Text>
                            <Button varian="primary">Amout team</Button>
                       </Card.Body>
                   </Card>
               </CardDeck>
           </Container>
           </>

        )
    }
}