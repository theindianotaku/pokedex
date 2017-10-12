import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

class Pokemon extends Component {
  render() {
    return (
      <li className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="ui card pokemon">
          <div
            className="wrapper"
            style={{
              backgroundImage: `url(${require('../assets/sprites/abomasnow-mega.gif')})`
            }}
          ></div>
          <div className="content">
            <div className="header">Abomasnow-Mega</div>
            <div className="meta">Frost Tree Pokemon</div>
            <div className="description">It blankets wide areas in snow by whipping up blizzards. It is also known as "The Ice Monster."</div>
          </div>
          <div className="extra content">
            <Label color="red">
              Mega
            </Label>
          </div>
        </div>
      </li>
    );
  }
}

export default Pokemon;
