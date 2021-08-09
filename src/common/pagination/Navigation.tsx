import React from "react"

type Props = {
  available: boolean
  onClick: () => void
}

const Navigation: React.FC<Props> = ({available, children, onClick}) => {
  const classes = 'page-navigation navigation-padding navigation-hover'
  const onNavigateClick = () => {
    if (available) {
      onClick()
    }
  }

  return (
    <div
      className={
        classes + (available? ' avaible-page-navigation': ' unavaible-page-navigation')}
      onClick={onNavigateClick}>
      {children}
    </div>
  )
}

export {Navigation}