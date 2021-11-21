import React from "react";
import { Card, Image } from "semantic-ui-react";

const CvCard = ({ cv }) => {
    return (
        <Card>
            <Image src={cv.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{cv.name}</Card.Header>
                <Card.Header>{cv.prevwork}</Card.Header>
                <Card.Meta>{cv.label}</Card.Meta>
                <Card.Description>{cv.email}</Card.Description>
                <Card.Description>{cv.phone}</Card.Description>
                <Card.Description>{cv.summary}</Card.Description>
            </Card.Content>
        </Card>
    );
};

export default CvCard;