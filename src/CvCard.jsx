import React from "react";
import { Item, Image } from "semantic-ui-react";

const CvCard = ({ cv }) => {
    return (
        // <Card>
        //     <Image src={cv.image} wrapped ui={false} />
        //     <Card.Content>
        //         <Card.Header>{cv.name}</Card.Header>
        //         <Card.Header>{cv.prevwork}</Card.Header>
        //         <Card.Meta>{cv.label}</Card.Meta>
        //         <Card.Description>{cv.email}</Card.Description>
        //         <Card.Description>{cv.phone}</Card.Description>
        //         <Card.Description>{cv.summary}</Card.Description>
        //     </Card.Content>
        // </Card>

        <Item>
        <Item.Image size='small' src={cv.image} />

        <Item.Content>
            <Item.Header as='a'>{cv.name}</Item.Header>
            <Item.Header as='a'>{cv.prevwork}</Item.Header>
            <Item.Meta>{cv.label}</Item.Meta>
            <Item.Description>
            </Item.Description>
            <Item.Extra>{cv.email}</Item.Extra>
        </Item.Content>
        </Item>



    );
};

export default CvCard;