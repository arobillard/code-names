import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <header className="masthead">
        <div className="wrapper gutter pad-t-4 pad-b">
          <h1 className="push-0 headline-2">
            <Link to='/'>Codenames</Link>
          </h1>
        </div>
      </header>
    )
  }

}

export default Header;