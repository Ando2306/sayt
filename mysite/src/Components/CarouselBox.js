import React,{Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import forestImg from "../assets/forest.jpg";
import dforestImg from "../assets/dforest.jpg";
import sforestImg from "../assets/sforest.jpg";

export default class CarouselBox extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    alt="Nature1"
                    src={forestImg}
                    />
                    <Carousel.Caption>
                        <h3>Nature1 image</h3>
                        <p>Lorem ipsum dolor sit amet!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    alt="Nature2"
                    src={dforestImg}
                    />
                    <Carousel.Caption>
                        <h3>Nature2 image</h3>
                        <p>Lorem ipsum dolor sit amet!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    alt="Nature3"
                    src={sforestImg}
                    />
                    <Carousel.Caption>
                        <h3>Nature3 image</h3>
                        <p>Lorem ipsum dolor sit amet!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        )
    }
}