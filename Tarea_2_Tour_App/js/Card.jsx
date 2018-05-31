import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';
import CardHeader from './CardHeader';

const DepartmentCard = props => (
  <Card centered color="blue" fluid>
    <CardHeader department={props.department} depimg={props.depimg} />
    <Image src={props.img} />
    <Card.Content>
      <Card.Header>
        {props.capital}
      </Card.Header>
      <Card.Meta>
        <span className="date">
          {props.founded}
        </span>
      </Card.Meta>
      <Card.Description>
        {props.info}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="users" />
      {props.population}
    </Card.Content>
  </Card>
);

export default DepartmentCard;
