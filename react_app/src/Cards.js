import React from "react";
import {Button, Card, CardBody, CardText, CardTitle, Fade} from 'reactstrap';


const Cards = (fade1, cardOneState, fade2, cardTwoState ) => {
    return(
        <>
        <Card key = "firstCard" className="display-3">
        <CardBody>
          <CardTitle>My Card</CardTitle>
          <Button onClick = {() => cardOneState}>Button</Button>
          <Fade in={fade1} className="my-2">
            <CardText>
              Was up bro...this is fade1
            </CardText>
          </Fade>
        </CardBody>
      </Card>
      <Card className="display-3">
        <CardBody>
          <CardTitle>My SecondCard</CardTitle>
          <Button onClick = {() => cardTwoState}>Button</Button>
          <Fade in={fade2} className="my-2">
            <CardText>
              Was up bro..this is fade2
            </CardText>
          </Fade>
        </CardBody>
        </Card>
        </>
    )
}

export default Cards;