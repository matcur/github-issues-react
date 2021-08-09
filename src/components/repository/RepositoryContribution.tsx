import React from "react"

type Props = {}

const RepositoryContribution = ({}: Props) => {
  return (
    <div className="container">
      <div className="contribute-notification inner-container">
          <span className="notification-line">
            <span>👋</span>
            <span className="contribute-title">Want to contribute to facebook/react?</span>
          </span>
        <span className="notification-line">If you have a bug or an idea, read the <a href="link">contributing guidelines</a> before opening an issue.</span>
        <span className="notification-line">If you're ready to tackle some open issues, <a href="">we've collected some good first issues for you.</a></span>
      </div>
    </div>
  )
}

export {RepositoryContribution}