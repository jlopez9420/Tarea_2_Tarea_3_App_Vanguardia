import React from 'react';
import {Header} from 'semantic-ui-react';

const CardHeader = props => (
  <Header as="h2" textAlign="center" style={{margin: 3}}>
    {props.department}
  </Header>
);

export default CardHeader;
