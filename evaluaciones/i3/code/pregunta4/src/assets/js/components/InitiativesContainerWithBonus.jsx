import React from 'react';
import Initiatives from './Initiatives';

export default class InitiativesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initiatives: null,
      selectedInitiativeId: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('/initiatives')
      .then(response => response.json())
      .then(initiatives => this.setState({ initiatives }));
  }

  handleClick(selectedInitiativeId) {
    this.setState({ selectedInitiativeId });
  }

  render() {
    const { initiatives, selectedInitiativeId } = this.state;
    if (initiatives) {
      return <Initiatives initiatives={initiatives} selected={selectedInitiativeId} onClick={this.handleClick} />;
    }
    return <div>Loading...</div>;
  }
}
