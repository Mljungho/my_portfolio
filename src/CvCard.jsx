import React from "react";
import { Item, Image } from "semantic-ui-react";

const CvCard = ({ cv }) => {
    return (

        <Item>
        <Item.Image size='small' src={cv.image} />

        <Item.Content>
            <Item.Header as='a'>{cv.name}</Item.Header>
            <Item.Header as='a'>{cv.prevwork}</Item.Header>
            <Item.Meta>{cv.label}</Item.Meta>
            <Item.Description>
            </Item.Description>
            <Item.Extra>{cv.email}</Item.Extra>
            <Item.Extra>{cv.summary}</Item.Extra>
        </Item.Content>
        </Item>

    );
};

export default CvCard;