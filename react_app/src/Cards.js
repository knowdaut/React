import React, {useState} from "react";
import { Collapse, Card, CardBody, CardText, CardTitle, Container, Row, Col } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";

function utcConverter(utcTime) {
    let d = new Date(0);
    d.setUTCSeconds(utcTime)
    var d2 = d.getDay()
    return d2;
}


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function dayConverter(dayNum) {
    return days[dayNum]
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


const Cards = (props) => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

    if (typeof props.weather2 != "undefined" && props.weather2.daily) {
        return (
            <div>
                <Container className="card-container">
                    <Col>
                        <Row>
                            <Card key="firstCard" tabIndex={0} onKeyPress={(evt) => { if (evt.key === "Enter") { setIsOpen1(!isOpen1) } }} onClick={() => { setIsOpen1(!isOpen1)}}>
                                <CardBody>
                                    <center>
                                    <CardTitle>
                                        {dayConverter(utcConverter(props.weather2.daily[1].dt))}
                                    </CardTitle>
                                    <CardTitle>
                                        {<img src={`http://openweathermap.org/img/w/${props.weather2.daily[1].weather[0].icon}.png`} />}
                                    </CardTitle>
                                    </center>
                                    <Collapse isOpen={isOpen1}>
                                        <center>
                                        <CardText>
                                            <p>{toTitleCase(props.weather2.daily[1].weather[0].description)}</p>
                                            <p>Low: {Math.round(props.weather2.daily[1].temp.min)}&#176;F</p>
                                            <p>High: {Math.round(props.weather2.daily[1].temp.max)}&#176;F</p>
                                        </CardText>
                                        </center>
                                    </Collapse>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row>
                            <Card key="secondCard" tabIndex={0} onKeyPress={(evt) => { if (evt.key === "Enter") { setIsOpen2(!isOpen2) } }} onClick={() => { setIsOpen2(!isOpen2)}}>
                                <CardBody>
                                    <center>
                                    <CardTitle>
                                        {dayConverter(utcConverter(props.weather2.daily[2].dt))}
                                                                      
                                    </CardTitle>
                                    <CardTitle>
                                        {<img src={`http://openweathermap.org/img/w/${props.weather2.daily[2].weather[0].icon}.png`} />}
                                    </CardTitle>
                                    </center>
                                    <Collapse isOpen={isOpen2}>
                                        <center>
                                        <CardText>
                                            <p>{toTitleCase(props.weather2.daily[2].weather[0].description)}</p>
                                            <p>Low: {Math.round(props.weather2.daily[2].temp.min)}&#176;F</p>
                                            <p>High: {Math.round(props.weather2.daily[2].temp.max)}&#176;F</p>
    
                                        </CardText>
                                        </center>
                                    </Collapse>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row>
                            <Card key="thirdCard" tabIndex={0} onKeyPress={(evt) => { if (evt.key === "Enter") { setIsOpen3(!isOpen3) } }}onClick={() => { setIsOpen3(!isOpen3)}}>
                                <CardBody>
                                    <center>
                                    <CardTitle>
                                        {dayConverter(utcConverter(props.weather2.daily[3].dt))}
                                    </CardTitle>
                                    <CardTitle>
                                        {<img src={`http://openweathermap.org/img/w/${props.weather2.daily[3].weather[0].icon}.png`} />}
                                    </CardTitle>
                                    </center>
                                    <Collapse isOpen={isOpen3}>
                                        <center>
                                        <CardText>
                                            <p>{toTitleCase(props.weather2.daily[3].weather[0].description)}</p>
                                            <p>Low: {Math.round(props.weather2.daily[3].temp.min)}&#176;F</p>
                                            <p>High: {Math.round(props.weather2.daily[3].temp.max)}&#176;F</p>
    
                                        </CardText>
                                        </center>
                                    </Collapse>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row>
                            <Card key="fourthCard" tabIndex={0} onKeyPress={(evt) => { if (evt.key === "Enter") { setIsOpen4(!isOpen4) } }} onClick={() => { setIsOpen4(!isOpen4)}}>
                                <CardBody>
                                    <center>
                                    <CardTitle>
                                        {dayConverter(utcConverter(props.weather2.daily[4].dt))}
                                    </CardTitle>
                                    <CardTitle>
                                        {<img src={`http://openweathermap.org/img/w/${props.weather2.daily[4].weather[0].icon}.png`} />}
                                    </CardTitle>
                                    </center>
                                    <Collapse isOpen={isOpen4}>
                                        <center>
                                        <CardText>
                                            <p>{toTitleCase(props.weather2.daily[4].weather[0].description)}</p>
                                            <p>Low: {Math.round(props.weather2.daily[4].temp.min) }&#176;F</p>
                                            <p>High: {Math.round(props.weather2.daily[4].temp.max)}&#176;F</p>
                                        </CardText>
                                        </center>
                                    </Collapse>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row>
                            <Card key="fifthCard" tabIndex={0} onKeyPress={(evt) => { if (evt.key === "Enter") { setIsOpen5(!isOpen5) } }} onClick={() => { setIsOpen5(!isOpen5)}}>
                                <CardBody>
                                    <center>
                                    <CardTitle>
                                        {dayConverter(utcConverter(props.weather2.daily[5].dt))}
                                    </CardTitle>
                                    <CardTitle>
                                        {<img src={`http://openweathermap.org/img/w/${props.weather2.daily[5].weather[0].icon}.png`} />}
                                    </CardTitle>
                                    </center>
                                    <Collapse isOpen={isOpen5}>
                                        <center>
                                        <CardText>
                                            <p>{toTitleCase(props.weather2.daily[5].weather[0].description)}</p>
                                            <p>Low: { Math.round(props.weather2.daily[5].temp.min)}&#176;F</p>
                                            <p>High: {Math.round(props.weather2.daily[5].temp.max)}&#176;F</p>
                                        </CardText>
                                        </center>
                                    </Collapse>
                                </CardBody>
                            </Card>
                        </Row>
                    </Col>
                </Container>
            </div>
        )
    }
    else{
        return(
            <div>
                <Container className="card-container">
                    <Col>
                        <Row>
                            <Card key="firstCard" tabIndex={0} onKeyPress={(evt) => { if (evt.key === "Enter") { setIsOpen1(!isOpen1) } }} onClick={() => { setIsOpen1(!isOpen1)}}>
                                <CardBody>
                                    <center>
                                    <CardTitle>
                                    <p>day of week</p>
                                    </CardTitle>
                                    <CardTitle>
                                    <p>image error</p>
                                    </CardTitle>
                                    </center>
                                    <Collapse isOpen={isOpen1}>
                                        <center>
                                        <CardText>
                                            <p>data</p>
                                        </CardText>
                                        </center>
                                    </Collapse>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row>
                            <Card key="secondCard" tabIndex={0} onKeyPress={(evt) => { if (evt.key === "Enter") { setIsOpen2(!isOpen2) } }} onClick={() => { setIsOpen2(!isOpen2)}}>
                                <CardBody>
                                    <center>
                                    <CardTitle>
                                        <p>day of week</p>                                 
                                    </CardTitle>
                                    <CardTitle>
                                        <p>image error</p>
                                    </CardTitle>
                                    </center>
                                    <Collapse isOpen={isOpen2}>
                                        <center>
                                        <CardText>
                                            <p>data</p>
                                        </CardText>
                                        </center>
                                    </Collapse>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row>
                            <Card key="thirdCard" tabIndex={0} onKeyPress={(evt) => { if (evt.key === "Enter") { setIsOpen3(!isOpen3) } }}onClick={() => { setIsOpen3(!isOpen3)}}>
                                <CardBody>
                                    <center>
                                    <CardTitle>
                                        <p>day of week</p>
                                    </CardTitle>
                                    <CardTitle>
                                        <p>image error</p>
                                    </CardTitle>
                                    </center>
                                    <Collapse isOpen={isOpen3}>
                                        <center>
                                        <CardText>
                                            <p>data</p>
                                        </CardText>
                                        </center>
                                    </Collapse>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row>
                            <Card key="fourthCard" tabIndex={0} onKeyPress={(evt) => { if (evt.key === "Enter") { setIsOpen4(!isOpen4) } }} onClick={() => { setIsOpen4(!isOpen4)}}>
                                <CardBody>
                                    <center>
                                    <CardTitle>
                                        <p>day of week</p>
                                    </CardTitle>
                                    <CardTitle>
                                    <p>image error</p>
                                    </CardTitle>
                                    </center>
                                    <Collapse isOpen={isOpen4}>
                                        <center>
                                        <CardText>
                                            <p>data</p>
                                        </CardText>
                                        </center>
                                    </Collapse>
                                </CardBody>
                            </Card>
                        </Row>
                        <Row>
                            <Card key="fifthCard" tabIndex={0} onKeyPress={(evt) => { if (evt.key === "Enter") { setIsOpen5(!isOpen5) } }} onClick={() => { setIsOpen5(!isOpen5)}}>
                                <CardBody>
                                    <center>
                                    <CardTitle>
                                        <p>day of week</p>
                                    </CardTitle>
                                    <CardTitle>
                                        <p>image error</p>
                                    </CardTitle>
                                    </center>
                                    <Collapse isOpen={isOpen5}>
                                        <center>
                                        <CardText>
                                            <p>data</p>
                                        </CardText>
                                        </center>
                                    </Collapse>
                                </CardBody>
                            </Card>
                        </Row>
                    </Col>
                </Container>
            </div>
        )
    }

}



export default Cards;
