import React, {useState} from "react";
import { Collapse, Card, CardBody, CardText, CardTitle, Container, Row, Col } from 'reactstrap';
// import Chevron from "./Chevron.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import TextForCards from "./TextForCards";



const IndCard = (props) => {
    const {utcConverter, dayConverter, daily, toTitleCase}  = props;
    const [openState, setOpenState] = useState(false);

    return(
        <Col>
            <Card key="firstCard"
                tabIndex={0}
                onClick={() => setOpenState(!openState)}>
                <CardBody>
                    <CardTitle>
                        {dayConverter(utcConverter(daily.dt))}
                        <span id="forecast-icon">
                            {(typeof props.weather2 != "undefined") && props.weather2.current ? <img src={`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`} /> : " "}
                        </span>
                    </CardTitle>
                    <div>
                            <i key={openState} className={`fas ${openState ? 'fa-chevron-up' : 'fa-chevron-down'}`}/>
                            {toTitleCase(daily.weather[0].description)}
                            {Math.round(daily.temp.day)}&#176;F

                    </div>
                    <Collapse isOpen={openState} className="my-2">
                        <CardText>
                            <TextForCards cardNum={1} daily={daily} />
                        </CardText>
                    </Collapse>
                </CardBody>
            </Card>
        </Col>
    )
}

export default IndCard;
