import React, {useState} from "react";
import { Collapse, Card, CardBody, CardText, CardTitle, Container, Row, Col } from 'reactstrap';
// import Chevron from "./Chevron.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
// import TextForCards from "./TextForCards";

function utcConverter(utcTime) {
    var d = new Date(0);
    d.setUTCSeconds(utcTime)
    var d2 = d.getDay()
    return d2;
}


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function dayConverter(dayNum) {
    console.log(days[dayNum])
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
    // const [setActive, setActiveState] = useState("active");
    // const [setRotate, setRotateState] = useState("arrow");

    // function rotateArrow(){
    //     setActiveState(setActive === "" ? "active" : "") 
    //     setRotateState(
    //         setActive === "active" ? "rotate-arrow" : "arrow"
    //     );
    // }
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
                                        {/* <Chevron className={`${setRotate}`} width={7} fill={"#777"} /> */}
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
                                            {/* <TextForCards cardNum={1} props={props} /> */}
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
                                                                      
                                        {/* <Chevron className={`${setRotate}`} width={7} fill={"#777"} /> */}
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
    
                                            {/* <TextForCards cardNum={2} props={props}/> */}
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
                                        {/* <Chevron className={`${setRotate}`} width={7} fill={"#777"} /> */}
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
    
                                            {/* <TextForCards cardNum={3} props={props}/> */}
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
                                        {/* <Chevron className={`${setRotate}`} width={7} fill={"#777"} /> */}
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
                                            {/* <TextForCards cardNum={4} props={props}/> */}
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
                                        {/* <Chevron className={`${setRotate}`} width={7} fill={"#777"} /> */}
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
                                            {/* <TextForCards cardNum={5} props={props}/> */}
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
            <p>error</p>
        )
    }

}



export default Cards;

// if (typeof props.weather2 != "undefined" && props.weather2.daily) {
    //     props.weather2.daily.forEach((daily, index) => {
    //         if (index > 0 && index < 6) {
    //             cardStorage.push(
    //                 <Col>
    //                     <Card key="firstCard"
    //                         tabIndex={0}
    //                         onClick={() => props.cardOneState()}>
    //                         <CardBody>
    //                             <CardTitle>
    //                                  {dayConverter(utcConverter(daily.dt))}
    //                                 <span id="forecast-icon">
    //                                      {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`} /> : " "}
    //                                 </span>
    //                             </CardTitle>
    //                             <div>
    //
    //                                       {toTitleCase(daily.weather[0].description)}
    //                                       {Math.round(daily.temp.day)}&#176;F
    //
    //                             </div>
    //                             <Collapse in={props.Collapse1} className="my-2">
    //                                 <CardText>
    //                                     <TextForCards cardNum={1} daily={daily} />
    //                                 </CardText>
    //                             </Collapse>
    //                         </CardBody>
    //                     </Card>
    //                 </Col>
    //             )
    //         }
    //     })
    // }