import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer pad-t-b-2 gutter" role="contentinfo">
        <div className="wrapper">
          <div>
            <small className="block push">Based on popular table top game <a href="https://czechgames.com" target="_blank" rel="noopener noreferrer">Codenames</a> by <a href="https://czechgames.com/en/codenames/" target="_blank" rel="noopener noreferrer">Czech Games</a>.</small>
            <small className="block">This site was built for personal use only, not for monetary gain.</small>
          </div>
          <div>
            <small className="block">Site designed and developed by <a href="https://adamrobillard.ca">Adam Robillard</a></small>
          </div>
        </div>
      </footer>
    )
  }

}

export default Footer;