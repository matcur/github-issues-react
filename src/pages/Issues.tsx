import React from "react"
import { useParams } from "react-router-dom"

const Issues = () => {
  const {owner} = useParams<{owner: string}>()

  return (
    <div>
      <div className="repository-info container">
        <div className="repositry-name-wrapper">
          <svg className="repository-name-svg octicon octicon-repo color-text-secondary mr-2" viewBox="0 0 16 16"
               version="1.1" width="16" height="16" aria-hidden="true">
            <path className="gray-path" fillRule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
          </svg>
          <span className="user-name">facebook</span>
          <span>/</span>
          <span className="repository-name">react</span>
        </div>
        <div className="repository-stats-list">
          <div className="repository-stats">
            <div className="stats-name-wrapper hover-element  hover-element-border lr-4">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16"
                   width="16" className="octicon octicon-eye">
                <path className="gray-path" fillRule="evenodd"
                      d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
              <span className="stats-name">Watch</span>
              <div className="dropdown-caret"/>
            </div>
            <div className="count">55K</div>
          </div>
          <div className="repository-stats">
            <div className="stats-name-wrapper hover-element hover-element-border lr-4">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16"
                   width="16" className="octicon octicon-star mr-1">
                <path className="gray-path" fillRule="evenodd"
                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
              </svg>
              <span className="stats-name">Star</span>
            </div>
            <div className="count">5K</div>
          </div>
          <div className="repository-stats">
            <div className="stats-name-wrapper hover-element hover-element-border lr-4">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16"
                   width="16" className="octicon octicon-repo-forked">
                <path className="gray-path" fillRule="evenodd"
                      d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
              </svg>
              <span className="stats-name">Fork</span>
            </div>
            <div className="count">155K</div>
          </div>
        </div>
      </div>
      <ul className="repository-links container">
        <li className="repository-link">
          <svg className="repository-link-svg small-svg">
            <path
              className="gray-path"
              fillRule="evenodd"
              d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"/>
          </svg>
          <span className="repository-link-name">Code</span>
        </li>
        <li className="repository-link active-repository-link">
          <svg className="repository-link-svg small-svg">
            <path className="gray-path" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
            <path className="gray-path" fillRule="evenodd"
                  d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
          </svg>
          <span className="repository-link-name">Issues</span>
          <span className="link-count">594</span>
        </li>
        <li className="repository-link">
          <svg className="repository-link-svg small-svg">
            <path className="gray-path" fillRule="evenodd"
                  d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/>
          </svg>
          <span className="repository-link-name">Pull requests</span>
          <span className="link-count">594</span>
        </li>
        <li className="repository-link">
          <svg className="repository-link-svg small-svg">
            <path className="gray-path" fillRule="evenodd"
                  d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"/>
          </svg>
          <span className="repository-link-name">Actions</span>
        </li>
        <li className="repository-link">
          <svg className="repository-link-svg small-svg">
            <path className="gray-path" fillRule="evenodd"
                  d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"/>
          </svg>
          <span className="repository-link-name">Projects</span>
        </li>
        <li className="repository-link">
          <svg className="repository-link-svg small-svg">
            <path className="gray-path" fillRule="evenodd"
                  d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"/>
          </svg>
          <span className="repository-link-name">Wiki</span>
        </li>
        <li className="repository-link">
          <svg className="repository-link-svg small-svg">
            <path className="gray-path" fillRule="evenodd"
                  d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"/>
          </svg>
          <span className="repository-link-name">Security</span>
        </li>
        <li className="repository-link">
          <svg className="repository-link-svg small-svg">
            <path className="gray-path" fillRule="evenodd"
                  d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"/>
          </svg>
          <span className="repository-link-name">Insights</span>
        </li>
      </ul>
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
      <div className="pinned-issues container inner-container">
        <h3 className="pinned-issues-title">Pinned Issues</h3>
        <div className="pinned-issues-list">
          <div className="pinned-issue">
            <div className="pinned-issue-name">
              The primary branch has been renamed from "master" to "main"
            </div>
            <div className="pinned-issue-info">
              #21767 opened on Jun 29 by bvaughn
            </div>
            <div className="pinned-issue-bottom">
              <div className="issue-status-wrapper aic">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
                <span className="issue-name">Open</span>
              </div>
              <div className="issue-comment-wrapper aic p-3">
                <svg className="issue-comment-svg small-svg">
                  <path className="gray-path" fillRule="evenodd"
                        d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                </svg>
                <span className="comment-count">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="issue-filter container inner-container">
        <div className="filters-wrapper">
          <div className="issues-search-form rr-4">
            <div className="hover-element hover-element-border lr-4">
              <span className="filters-span">Filters</span>
              <div className="dropdown-caret"/>
            </div>
            <div className="issues-search-input-wrapper">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16"
                   width="16" className="octicon octicon-search subnav-search-icon">
                <path className="gray-path" fillRule="evenodd"
                      d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"/>
              </svg>
              <input type="text" className="clear-input rr-4 issues-search-input"/>
            </div>
          </div>
          <div className="filter-tags">
            <div className="filter-tag lr-4 labels hover-element">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16"
                   width="16" className="octicon octicon-tag">
                <path className="gray-path" fillRule="evenodd"
                      d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"/>
              </svg>
              <span className="filter-tag-name">Labels</span>
              <div className="link-count">55K</div>
            </div>
            <div className="filter-tag rr-4 milestones hover-element">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16"
                   width="16" className="octicon octicon-tag">
                <path className="gray-path" fillRule="evenodd"
                      d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"/>
              </svg>
              <span className="filter-tag-name">Milestones</span>
              <div className="link-count">55K</div>
            </div>
          </div>
          <div className="new-issue">
            <button className="btn btn-green">New Issue</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="issues inner-container">
          <div className="issues-header">
            <div className="issues-status-info">
              <a href="#" className="opened-issues issue-status">
                <svg className="octicon octicon-issue-opened mr-5" viewBox="0 0 16 16" version="1.1" width="16"
                     height="16" aria-hidden="true">
                  <path className="gray-path" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path className="gray-path" fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
                <span>592 Opened</span>
              </a>
              <a href="#" className="closed-issues issue-status mr-5">
                <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16"
                     width="16" className="octicon octicon-check">
                  <path className="gray-path" fillRule="evenodd"
                        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
                </svg>
                <span>11, 213 Closed</span>
              </a>
            </div>
            <div className="sort-options">
              <div className="sort-option">
                <div className="sort-option-name">Author</div>
                <div className="dropdown-caret"/>
                <div className="sort-option-dropdown">
                  <div className="dropdown-header">
                    <span className="dropdown-filter-name">Filter by author</span>
                    <svg aria-label="Close menu" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                         height="16" width="16" className="octicon octicon-x gray-path">
                      <path fillRule="evenodd"
                            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"/>
                    </svg>
                  </div>
                  <div className="option-items-filter-wrapper">
                    <input type="text" placeholder="Filter users" className="option-items-filter clear-input"/>
                  </div>
                  <div className="option-items">
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sort-option">
                <div className="sort-option-name">Label</div>
                <div className="dropdown-caret"/>

                <div className="sort-option-dropdown">
                  <div className="dropdown-header">
                    <span className="dropdown-filter-name">Filter by author</span>
                    <svg aria-label="Close menu" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                         height="16" width="16" className="octicon octicon-x gray-path">
                      <path fillRule="evenodd"
                            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"/>
                    </svg>
                  </div>
                  <div className="option-items-filter-wrapper">
                    <input type="text" placeholder="Filter users" className="option-items-filter clear-input"/>
                  </div>
                  <div className="option-items">
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sort-option">
                <div className="sort-option-name">Milestones</div>
                <div className="dropdown-caret"/>

                <div className="sort-option-dropdown">
                  <div className="dropdown-header">
                    <span className="dropdown-filter-name">Filter by author</span>
                    <svg aria-label="Close menu" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                         height="16" width="16" className="octicon octicon-x gray-path">
                      <path fillRule="evenodd"
                            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"/>
                    </svg>
                  </div>
                  <div className="option-items-filter-wrapper">
                    <input type="text" placeholder="Filter users" className="option-items-filter clear-input"/>
                  </div>
                  <div className="option-items">
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sort-option">
                <div className="sort-option-name">Projects</div>
                <div className="dropdown-caret"/>

                <div className="sort-option-dropdown">
                  <div className="dropdown-header">
                    <span className="dropdown-filter-name">Filter by author</span>
                    <svg aria-label="Close menu" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                         height="16" width="16" className="octicon octicon-x gray-path">
                      <path fillRule="evenodd"
                            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"/>
                    </svg>
                  </div>
                  <div className="option-items-filter-wrapper">
                    <input type="text" placeholder="Filter users" className="option-items-filter clear-input"/>
                  </div>
                  <div className="option-items">
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sort-option">
                <div className="sort-option-name">Assignee</div>
                <div className="dropdown-caret"/>

                <div className="sort-option-dropdown">
                  <div className="dropdown-header">
                    <span className="dropdown-filter-name">Filter by author</span>
                    <svg aria-label="Close menu" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                         height="16" width="16" className="octicon octicon-x gray-path">
                      <path fillRule="evenodd"
                            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"/>
                    </svg>
                  </div>
                  <div className="option-items-filter-wrapper">
                    <input type="text" placeholder="Filter users" className="option-items-filter clear-input"/>
                  </div>
                  <div className="option-items">
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sort-option">
                <div className="sort-option-name">Sort</div>
                <div className="dropdown-caret"/>

                <div className="sort-option-dropdown">
                  <div className="dropdown-header">
                    <span className="dropdown-filter-name">Filter by author</span>
                    <svg aria-label="Close menu" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                         height="16" width="16" className="octicon octicon-x gray-path">
                      <path fillRule="evenodd"
                            d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"/>
                    </svg>
                  </div>
                  <div className="option-items-filter-wrapper">
                    <input type="text" placeholder="Filter users" className="option-items-filter clear-input"/>
                  </div>
                  <div className="option-items">
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                    <div className="option-item">
                      <img src="https://avatars.githubusercontent.com/u/34961288?s=40&v=4" alt=""
                           className="option-item-img user-avatar small-avatar"/>
                        <div className="option-item-name">matcur</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="issue-list">
            <div className="issue-item">
              <div className="issue-status">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
              </div>
              <div className="issue-info">
                <span className="issue-name">[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree</span>
                <span className="issue-title">
              <a className="issue-tag component-developer-tools">
                Component: Developer Tools
              </a>
              <a className="issue-tag status-uncomfirmed">
                Status: Unconfirmed
              </a>
              <a className="issue-tag type-bug">
                Type: Bug
              </a>
              <a className="issue-tag react-version">
                React
              </a>
            </span>
                <div className="issue-bottom">
                  #22034 opened 2 days ago by saiyerniakhil
                </div>
              </div>
              <div className="issue-comments-info-wrapper">
                <div className="issue-comments-info">
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                       data-view-component="true" height="16" width="16"
                       className="octicon octicon-comment v-align-middle comment-svg">
                    <path className="gray-path" fillRule="evenodd"
                          d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                  </svg>
                  <span className="comment-count">3</span>
                </div>
              </div>
            </div>
            <div className="issue-item">
              <div className="issue-status">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
              </div>
              <div className="issue-info">
                <span className="issue-name">[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree</span>
                <span className="issue-title">
              <a className="issue-tag component-developer-tools">
                Component: Developer Tools
              </a>
              <a className="issue-tag status-uncomfirmed">
                Status: Unconfirmed
              </a>
              <a className="issue-tag type-bug">
                Type: Bug
              </a>
              <a className="issue-tag react-version">
                React
              </a>
            </span>
                <div className="issue-bottom">
                  #22034 opened 2 days ago by saiyerniakhil
                </div>
              </div>
              <div className="issue-comments-info-wrapper">
                <div className="issue-comments-info">
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                       data-view-component="true" height="16" width="16"
                       className="octicon octicon-comment v-align-middle comment-svg">
                    <path className="gray-path" fillRule="evenodd"
                          d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                  </svg>
                  <span className="comment-count">3</span>
                </div>
              </div>
            </div>
            <div className="issue-item">
              <div className="issue-status">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
              </div>
              <div className="issue-info">
                <span className="issue-name">[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree</span>
                <span className="issue-title">
              <a className="issue-tag component-developer-tools">
                Component: Developer Tools
              </a>
              <a className="issue-tag status-uncomfirmed">
                Status: Unconfirmed
              </a>
              <a className="issue-tag type-bug">
                Type: Bug
              </a>
              <a className="issue-tag react-version">
                React
              </a>
            </span>
                <div className="issue-bottom">
                  #22034 opened 2 days ago by saiyerniakhil
                </div>
              </div>
              <div className="issue-comments-info-wrapper">
                <div className="issue-comments-info">
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                       data-view-component="true" height="16" width="16"
                       className="octicon octicon-comment v-align-middle comment-svg">
                    <path className="gray-path" fillRule="evenodd"
                          d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                  </svg>
                  <span className="comment-count">3</span>
                </div>
              </div>
            </div>
            <div className="issue-item">
              <div className="issue-status">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
              </div>
              <div className="issue-info">
                <span className="issue-name">[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree</span>
                <span className="issue-title">
              <a className="issue-tag component-developer-tools">
                Component: Developer Tools
              </a>
              <a className="issue-tag status-uncomfirmed">
                Status: Unconfirmed
              </a>
              <a className="issue-tag type-bug">
                Type: Bug
              </a>
              <a className="issue-tag react-version">
                React
              </a>
            </span>
                <div className="issue-bottom">
                  #22034 opened 2 days ago by saiyerniakhil
                </div>
              </div>
              <div className="issue-comments-info-wrapper">
                <div className="issue-comments-info">
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                       data-view-component="true" height="16" width="16"
                       className="octicon octicon-comment v-align-middle comment-svg">
                    <path className="gray-path" fillRule="evenodd"
                          d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                  </svg>
                  <span className="comment-count">3</span>
                </div>
              </div>
            </div>
            <div className="issue-item">
              <div className="issue-status">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
              </div>
              <div className="issue-info">
                <span className="issue-name">[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree</span>
                <span className="issue-title">
              <a className="issue-tag component-developer-tools">
                Component: Developer Tools
              </a>
              <a className="issue-tag status-uncomfirmed">
                Status: Unconfirmed
              </a>
              <a className="issue-tag type-bug">
                Type: Bug
              </a>
              <a className="issue-tag react-version">
                React
              </a>
            </span>
                <div className="issue-bottom">
                  #22034 opened 2 days ago by saiyerniakhil
                </div>
              </div>
              <div className="issue-comments-info-wrapper">
                <div className="issue-comments-info">
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                       data-view-component="true" height="16" width="16"
                       className="octicon octicon-comment v-align-middle comment-svg">
                    <path className="gray-path" fillRule="evenodd"
                          d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                  </svg>
                  <span className="comment-count">3</span>
                </div>
              </div>
            </div>
            <div className="issue-item">
              <div className="issue-status">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
              </div>
              <div className="issue-info">
                <span className="issue-name">[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree</span>
                <span className="issue-title">
              <a className="issue-tag component-developer-tools">
                Component: Developer Tools
              </a>
              <a className="issue-tag status-uncomfirmed">
                Status: Unconfirmed
              </a>
              <a className="issue-tag type-bug">
                Type: Bug
              </a>
              <a className="issue-tag react-version">
                React
              </a>
            </span>
                <div className="issue-bottom">
                  #22034 opened 2 days ago by saiyerniakhil
                </div>
              </div>
              <div className="issue-comments-info-wrapper">
                <div className="issue-comments-info">
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                       data-view-component="true" height="16" width="16"
                       className="octicon octicon-comment v-align-middle comment-svg">
                    <path className="gray-path" fillRule="evenodd"
                          d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                  </svg>
                  <span className="comment-count">3</span>
                </div>
              </div>
            </div>
            <div className="issue-item">
              <div className="issue-status">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
              </div>
              <div className="issue-info">
                <span className="issue-name">[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree</span>
                <span className="issue-title">
              <a className="issue-tag component-developer-tools">
                Component: Developer Tools
              </a>
              <a className="issue-tag status-uncomfirmed">
                Status: Unconfirmed
              </a>
              <a className="issue-tag type-bug">
                Type: Bug
              </a>
              <a className="issue-tag react-version">
                React
              </a>
            </span>
                <div className="issue-bottom">
                  #22034 opened 2 days ago by saiyerniakhil
                </div>
              </div>
              <div className="issue-comments-info-wrapper">
                <div className="issue-comments-info">
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                       data-view-component="true" height="16" width="16"
                       className="octicon octicon-comment v-align-middle comment-svg">
                    <path className="gray-path" fillRule="evenodd"
                          d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                  </svg>
                  <span className="comment-count">3</span>
                </div>
              </div>
            </div>
            <div className="issue-item">
              <div className="issue-status">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
              </div>
              <div className="issue-info">
                <span className="issue-name">[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree</span>
                <span className="issue-title">
              <a className="issue-tag component-developer-tools">
                Component: Developer Tools
              </a>
              <a className="issue-tag status-uncomfirmed">
                Status: Unconfirmed
              </a>
              <a className="issue-tag type-bug">
                Type: Bug
              </a>
              <a className="issue-tag react-version">
                React
              </a>
            </span>
                <div className="issue-bottom">
                  #22034 opened 2 days ago by saiyerniakhil
                </div>
              </div>
              <div className="issue-comments-info-wrapper">
                <div className="issue-comments-info">
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                       data-view-component="true" height="16" width="16"
                       className="octicon octicon-comment v-align-middle comment-svg">
                    <path className="gray-path" fillRule="evenodd"
                          d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                  </svg>
                  <span className="comment-count">3</span>
                </div>
              </div>
            </div>
            <div className="issue-item">
              <div className="issue-status">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
              </div>
              <div className="issue-info">
                <span className="issue-name">[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree</span>
                <span className="issue-title">
              <a className="issue-tag component-developer-tools">
                Component: Developer Tools
              </a>
              <a className="issue-tag status-uncomfirmed">
                Status: Unconfirmed
              </a>
              <a className="issue-tag type-bug">
                Type: Bug
              </a>
              <a className="issue-tag react-version">
                React
              </a>
            </span>
                <div className="issue-bottom">
                  #22034 opened 2 days ago by saiyerniakhil
                </div>
              </div>
              <div className="issue-comments-info-wrapper">
                <div className="issue-comments-info">
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                       data-view-component="true" height="16" width="16"
                       className="octicon octicon-comment v-align-middle comment-svg">
                    <path className="gray-path" fillRule="evenodd"
                          d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                  </svg>
                  <span className="comment-count">3</span>
                </div>
              </div>
            </div>
            <div className="issue-item">
              <div className="issue-status">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
              </div>
              <div className="issue-info">
                <span className="issue-name">[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree</span>
                <span className="issue-title">
              <a className="issue-tag component-developer-tools">
                Component: Developer Tools
              </a>
              <a className="issue-tag status-uncomfirmed">
                Status: Unconfirmed
              </a>
              <a className="issue-tag type-bug">
                Type: Bug
              </a>
              <a className="issue-tag react-version">
                React
              </a>
            </span>
                <div className="issue-bottom">
                  #22034 opened 2 days ago by saiyerniakhil
                </div>
              </div>
              <div className="issue-comments-info-wrapper">
                <div className="issue-comments-info">
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                       data-view-component="true" height="16" width="16"
                       className="octicon octicon-comment v-align-middle comment-svg">
                    <path className="gray-path" fillRule="evenodd"
                          d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                  </svg>
                  <span className="comment-count">3</span>
                </div>
              </div>
            </div>
            <div className="issue-item">
              <div className="issue-status">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
              </div>
              <div className="issue-info">
                <span className="issue-name">[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree</span>
                <span className="issue-title">
              <a className="issue-tag component-developer-tools">
                Component: Developer Tools
              </a>
              <a className="issue-tag status-uncomfirmed">
                Status: Unconfirmed
              </a>
              <a className="issue-tag type-bug">
                Type: Bug
              </a>
              <a className="issue-tag react-version">
                React
              </a>
            </span>
                <div className="issue-bottom">
                  #22034 opened 2 days ago by saiyerniakhil
                </div>
              </div>
              <div className="issue-comments-info-wrapper">
                <div className="issue-comments-info">
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                       data-view-component="true" height="16" width="16"
                       className="octicon octicon-comment v-align-middle comment-svg">
                    <path className="gray-path" fillRule="evenodd"
                          d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                  </svg>
                  <span className="comment-count">3</span>
                </div>
              </div>
            </div>
            <div className="issue-item">
              <div className="issue-status">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
              </div>
              <div className="issue-info">
                <span className="issue-name">[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree</span>
                <span className="issue-title">
              <a className="issue-tag component-developer-tools">
                Component: Developer Tools
              </a>
              <a className="issue-tag status-uncomfirmed">
                Status: Unconfirmed
              </a>
              <a className="issue-tag type-bug">
                Type: Bug
              </a>
              <a className="issue-tag react-version">
                React
              </a>
            </span>
                <div className="issue-bottom">
                  #22034 opened 2 days ago by saiyerniakhil
                </div>
              </div>
              <div className="issue-comments-info-wrapper">
                <div className="issue-comments-info">
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                       data-view-component="true" height="16" width="16"
                       className="octicon octicon-comment v-align-middle comment-svg">
                    <path className="gray-path" fillRule="evenodd"
                          d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                  </svg>
                  <span className="comment-count">3</span>
                </div>
              </div>
            </div>
            <div className="issue-item">
              <div className="issue-status">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
              </div>
              <div className="issue-info">
                <span className="issue-name">[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree</span>
                <span className="issue-title">
              <a className="issue-tag component-developer-tools">
                Component: Developer Tools
              </a>
              <a className="issue-tag status-uncomfirmed">
                Status: Unconfirmed
              </a>
              <a className="issue-tag type-bug">
                Type: Bug
              </a>
              <a className="issue-tag react-version">
                React
              </a>
            </span>
                <div className="issue-bottom">
                  #22034 opened 2 days ago by saiyerniakhil
                </div>
              </div>
              <div className="issue-comments-info-wrapper">
                <div className="issue-comments-info">
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                       data-view-component="true" height="16" width="16"
                       className="octicon octicon-comment v-align-middle comment-svg">
                    <path className="gray-path" fillRule="evenodd"
                          d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                  </svg>
                  <span className="comment-count">3</span>
                </div>
              </div>
            </div>
            <div className="issue-item">
              <div className="issue-status">
                <svg className="pinned-issues-status opened-issue small-svg mr-5">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path fillRule="evenodd"
                        d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
              </div>
              <div className="issue-info">
                <span className="issue-name">[DevTools Bug]: React Devtools on Firefox initially shows an empty (blank) component tree</span>
                <span className="issue-title">
              <a className="issue-tag component-developer-tools">
                Component: Developer Tools
              </a>
              <a className="issue-tag status-uncomfirmed">
                Status: Unconfirmed
              </a>
              <a className="issue-tag type-bug">
                Type: Bug
              </a>
              <a className="issue-tag react-version">
                React
              </a>
            </span>
                <div className="issue-bottom">
                  #22034 opened 2 days ago by saiyerniakhil
                </div>
              </div>
              <div className="issue-comments-info-wrapper">
                <div className="issue-comments-info">
                  <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                       data-view-component="true" height="16" width="16"
                       className="octicon octicon-comment v-align-middle comment-svg">
                    <path className="gray-path" fillRule="evenodd"
                          d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"/>
                  </svg>
                  <span className="comment-count">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pagination">
          <div className="previous-page page-navigation navigation-padding navigation-hover unavaible-page-navigation">
            <div className="caret left-caret"/>
            <span className="page-navigation-type">Previous</span>
          </div>
          <div className="pages">
            <div className="page navigation-padding navigation-hover current-page">
              1
            </div>
            <div className="page navigation-padding navigation-hover">
              2
            </div>
            <div className="page navigation-padding navigation-hover">
              3
            </div>
            <div className="page navigation-padding navigation-hover">
              4
            </div>
            <div className="page navigation-padding navigation-hover">
              5
            </div>
            <div className="page-shift navigation-padding">...</div>
            <div className="page navigation-padding navigation-hover">
              23
            </div>
            <div className="page navigation-padding navigation-hover">
              24
            </div>
          </div>
          <div className="next-page avaible-page-navigation page-navigation navigation-padding navigation-hover">
            <span className="page-navigation-type">Next</span>
            <div className="caret right-caret"/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="tip-block">
          <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16"
               className="octicon octicon-light-bulb color-text-secondary">
            <path className="gray-path" fillRule="evenodd"
                  d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"/>
          </svg>
          <strong>ProTip!</strong> Find everything you created by searching <a href="#"> author:matcur</a>.
        </div>
      </div>
      <div className="container">
        <div className="split-line"/>
      </div>
    </div>
  )
}

export {Issues}