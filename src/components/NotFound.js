import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {

  render() {
    return (
      <>
        <h1>Not Found</h1>
        <Link to="/">Go Home</Link>
      </>
    )
  }

}

export default NotFound;