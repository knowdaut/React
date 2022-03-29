import React, { useState } from "react";
import { Collapse, Card, CardBody, CardText, CardTitle, Col } from 'reactstrap';
// import Chevron from "./Chevron.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Cards/Cards.css";
import TextForCards from "../../TextForCards";



const IndCard = (props) => {
    const { utcConverter, dayConverter, daily } = props;
    const [openState, setOpenState] = useState(false);

    return (
        <Col>
            <Card key="firstCard"
                tabIndex={0}
                onClick={() => setOpenState(!openState)}>
                <CardBody>
                    <CardTitle>
                        <center>
                            <div>
                                {dayConverter(utcConverter(daily.dt))}
                                <i key={openState} className={`fas ${openState ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ marginLeft: '5px' }} />
                            </div>
                            <img src={`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`} id="forecast-icon" />
                        </center>
                    </CardTitle>
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
