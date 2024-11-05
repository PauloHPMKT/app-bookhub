import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  sofitHideVisibility: {
    visibility: 'hidden',
    opacity: 0,
    display: 'none'
  },
  sofitShowVisibility: {
    visibility: 'visible',
    display: 'block',
    animation: '$fadeIn 0.3s ease-in-out'
  },

  '@keyframes fadeIn': {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  }
})