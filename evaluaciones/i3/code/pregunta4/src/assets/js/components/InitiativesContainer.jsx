import React from 'react';
import Initiatives from './Initiatives';

export default class InitiativesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initiatives: null,
    };
  }

  componentDidMount() {
    fetch('/initiatives')
      .then(response => response.json())
      .then(initiatives => this.setState({ initiatives }));
  }

  render() {
    const { initiatives, selectedInitiativeId } = this.state;
    if (initiatives) {
      return <Initiatives initiatives={initiatives} />;
    }
    return <div>Loading...</div>;
  }
}
