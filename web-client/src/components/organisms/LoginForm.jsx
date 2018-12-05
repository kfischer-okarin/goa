import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import _ from 'lodash';

class LoginForm extends React.Component {
  state = {
    user: '',
    password: '',
  };

  propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleLogin = () => {
    const { onLogin } = this.props;
    onLogin(_.pick(this.state, ['user', 'password']));
  };

  render = () => {
    const { user, password } = this.state;

    return (
      <Grid container>
        <Grid item xs={12}>
          <TextField fullWidth label="User" value={user} onChange={this.handleChange('user')} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="password"
            label="Password"
            value={password}
            onChange={this.handleChange('password')}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={this.handleLogin}>
            Login
          </Button>
        </Grid>
      </Grid>
    );
  };
}

export default LoginForm;