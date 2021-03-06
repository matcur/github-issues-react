const Header = () => {
    return (
        <div className="header container">
            <div className="header-left-part header-part">
                <svg className="github-icon mr-15">
                    <path
                        className="github-icon-path common-path"
                        fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <details className="search-form mr-15">
                    <summary className="search-input-wrapper">
                        <input type="text" className="search-input" placeholder="Search or jump to..."/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" className="search-input-icon">
                            <path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"/>
                            <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"/>
                        </svg>
                    </summary>
                    <div className="search-results">
                        <div className="search-result-item header-item">
                            <div className="item-left-part">
                                <div className="markbook">
                                    <svg height="16" width="16" className="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img">
                                        <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/></svg>
                                    <svg height="16" width="16" className="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img">
                                        <path fillRule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"/></svg>
                                    <svg height="16" width="16" className="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img">
                                        <path fillRule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"/></svg>
                                </div>
                                <div className="item-title">typescript/react</div>
                            </div>
                            <div className="item-right-part">
                                Jump to
                            </div>
                        </div>
                    </div>
                </details>
                <div className="header-nav-bar mr-15">
                    <a href="#" className="header-nav-bar-item">Pull requests</a>
                    <a href="#" className="header-nav-bar-item">Issues</a>
                    <a href="#" className="header-nav-bar-item">Markeplace</a>
                    <a href="#" className="header-nav-bar-item">Explore</a>
                </div>
            </div>
            <div className="header-right-part header-part">
                <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="bell mr-15">
                    <path className="common-path" d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"/>
                    <path className="common-path" fillRule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"/>
                </svg>
                <details className="header-plus">
                    <summary className="aic mr-15">
                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" className="plus p-3">
                            <path className="common-path" fillRule="evenodd" d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"/>
                        </svg>
                        <span className="dropdown-caret"/>
                    </summary>
                    <div className="header-plus-items">
                        <div className="header-plus-item header-item">
                            New repository
                        </div>
                        <div className="header-plus-item header-item">
                            Import repository
                        </div>
                        <div className="header-plus-item header-item">
                            New gist
                        </div>
                        <div className="header-plus-item header-item">
                            New organization
                        </div>
                    </div>
                </details>
                <details className="user-avatar-wrapper">
                    <summary>
                        <div className="aic">
                            <img src="https://avatars.githubusercontent.com/u/34961288?s=60&v=4" alt="" className="user-avatar small-avatar"/>
                            <span className="dropdown-caret m-3"/>
                        </div>
                    </summary>
                    <div className="user-info-list">
                        <span className="singned-caption">
                            Signed in as matsur
                        </span>
                        <div className="header-item">Your profile</div>
                        <div className="header-item">Your repositories</div>
                        <div className="header-item">Your codespaces</div>
                        <div className="header-item">Your projects</div>
                        <div className="header-item">Signed out</div>
                    </div>
                </details>
            </div>
        </div>)
}

export { Header }