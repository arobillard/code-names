import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <header className="masthead">
        <div className="wrapper gutter pad-t">
          <h1 className="push-0">
            <Link to='/'>Codenames</Link>
          </h1>
        </div>
      </header>
    )
  }

}

export default Header;