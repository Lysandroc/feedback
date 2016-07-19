import React from 'react';
import Header from './header';
import Questions from './questions';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class Invite extends React.Component {

  state = { invite: {} }

  constructor(props) {
    super(props);

    if(this.props.invite) {
      this.state.invite = this.props.invite;
    }

  }

  componentDidMount() {
    if(!this.props.invite) {
      fetch(`/invites/${this.props.params.id}.json`).then(
        res => res.json().then( this.refresh )
      );
    }

  }

  refresh = item => {
    this.setState({invite: item});
  }

  update = (ev, value) => {

    const el = ev.currentTarget.name;
    const json = {};
    json[el] = value;
    fetch(`/invites/${this.state.invite.id}.json`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    });

  }

  render() {

    const invite = this.state.invite;
    const name = (invite)? invite.name: '';
    const {url} = invite;
    const onChange = this.update.bind(this);

    const inviteText = `${name} o convida para dar um Feedback sobre o que voce admiria que ele pretende conservar e melhorar o que pode te incomodar`;

    return(
      <Card className="invite">
        <CardHeader
          title={inviteText}
          subtitle="16 de jul a 20 de jul"
          avatar={url}
        />
        <CardText>
          <Questions invite={this.state.invite} onChange={onChange} />
        </CardText>
      </Card>
    )
  }

}