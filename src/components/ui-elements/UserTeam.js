import React from 'react';

class UserTeam extends React.Component {

  formRef = React.createRef();
  userNameRef = React.createRef();
  teamRed = React.createRef();
  teamBlue = React.createRef();

  userTeamAssign = (e) => {
    e.preventDefault();
    if (this.formRef.current[1].checked) {
      const user = {
        userName: this.userNameRef.current.value,
        team: 'red'
      }
      this.props.teamAssign(user)
      this.props.localUser(user)
    } else {
      const user = {
        userName: this.userNameRef.current.value,
        team: 'blue'
      }
      this.props.teamAssign(user)
      this.props.localUser(user)
    }
  }

  nameInput = () => {
    if (this.props.localUserDefault !== null) {
      console.log('not null path')
      console.log(this.props.localUserDefault)
      return (
        <>
        <input
          id="user-name"
          className="push"
          name="user-name"
          type="text"
          ref={this.userNameRef}
          required
          placeholder="Enter Username"
          defaultValue={this.props.localUserDefault.userName}
        />
        <label className="hidden" htmlFor="user-name">Username</label>
        </>
      )
    } else {
      console.log('else path')
      console.log(this.props.localUserDefault)
      return (
        <>
          <input
            id="user-name"
            className="push"
            name="user-name"
            type="text"
            ref={this.userNameRef}
            required
            placeholder="Enter Username"
          />
          <label className="hidden" htmlFor="user-name">Username</label>
        </>
      )
    }
  }

  render() {
    return (
      <div className="user-team-pop-up-overlay">
        <form className="user-team-pop-up island-2 text-center" ref={this.formRef} onSubmit={this.userTeamAssign}>
          <h2 className="headline-4">Pick your name &amp; team!</h2>
          <p>(You can change your team later if you need to!)</p>
          {this.nameInput()}
          <div>
            <input
              id="team-red"
              value="team-red"
              className="hidden"
              name="team-check"
              type="radio"
              ref={this.teamRed}
              defaultChecked
            />
            <label className="btn btn-red btn-medium inline-block push push-r" htmlFor="team-red">Red Team</label>
            <input
              id="team-blue"
              value="team-blue"
              className="hidden"
              name="team-check"
              type="radio"
              ref={this.teamBlue}
            />
            <label className="btn btn-blue btn-medium inline-block push" htmlFor="team-blue">Blue Team</label>
          </div>
          <button
            className="btn"
            type="submit"
          >
            Join Game!
          </button>
        </form>
      </div>
    )
  }

}

export default UserTeam;