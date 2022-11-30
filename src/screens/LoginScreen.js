import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(event) {
    if(event.target.id == "email")
      this.setState({email: event.target.value});
    else if(event.target.id == "password")
      this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    URL = "https://iitb.placementcontrols.com/iitb-node/authenticate"
    fetch(URL, {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
      },
      "body": "{\n  \"email\": \"" + this.state.email + "\",\n  \"password\": \"" + this.state.password + "\",\n  \"app_version\": \"1.6.96\"\n}",
      "method": "POST"
    }).then(res => res.json())
    .then((result) => {
      var token, student_id, error;
      if(result.status == 'success') {
        token = result.data.token;
        student_id = result.data.user.student_id;
        error = null;
      } else {
        token = null;
        student_id = null;
        error = result.data.message;
      }
      const Telegram = window.Telegram;
      Telegram.WebApp.sendData(JSON.stringify({token, student_id, error}));
      Telegram.WebApp.close();
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email: <input id="email" type="text" value={this.state.email} onChange={this.handleChange}></input></label> <br />
        <label>Password: <input id="password" type="password" value={this.state.password} onChange={this.handleChange}></input></label> <br />
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}
