import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Input from 'react-toolbox/lib/input';
import InputTheme from './input.theme.scss';
import config from '../../../../config';

class HomeRoute extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Home</title>
        </Helmet>

        <h2>{config('welcomeMessage')}</h2>

        <p>
          This starter kit contains all the build tooling and configuration you
          need to kick off your next universal React project, whilst containing a
          minimal project set up allowing you to make your own architecture
          decisions (Redux/Mobx etc).
        </p>
        <Input
          theme={InputTheme}
          type="text"
          label="Notes"
          name="notes"
          value={this.state.notes}
          onChange={value => this.handleChange('notes', value)}
        />
      </article>
    );
  }
}

export default HomeRoute;
