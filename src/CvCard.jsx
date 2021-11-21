import React from "react";
import { Card } from "semantic-ui-react";

const CvCard = ({ cv }) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{cv.name}</Card.Header>
                <Card.Description>{cv.label}</Card.Description>
                <Card.Description>{cv.label}</Card.Description>
                <Card.Description>{cv.label}</Card.Description>
                <Card.Description>{cv.label}</Card.Description>
            </Card.Content>
        </Card>
    );
};

export default CvCard;