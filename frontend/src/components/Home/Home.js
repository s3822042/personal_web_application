import React from 'react'

class Home extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    page: null,
  };

  componentDidMount() {
    fetch('landing_page/index.html')
      .then((result) => result.text())
      .then((page) => {
        this.setState(
          {
            page: { __html: page },
          },
          () => {
            window.$.getScript('landing_page/js/index.js')
          },
        )
      })
  }

  render() {
    const { page } = this.state
    return (
      <>
        <h2>
          <span>Inserting project using React </span>
          <code>dangerouslySetInnerHTML</code>
          :
        </h2>
        <div dangerouslySetInnerHTML={page && page} />
      </>
    )
  }
}

export default Home
