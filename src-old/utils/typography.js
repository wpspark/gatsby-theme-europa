import Typography from 'typography'
import wordpress2016Theme from 'typography-theme-wordpress-2016'
 

wordpress2016Theme.headerLineHeight = 1.1
wordpress2016Theme.overrideThemeStyles = () => {
  return {
    a: {
      color: `rgb(60,99,243)`,
    },
    h1: {
      lineHeight: 1,
    },
  }
}

const typography = new Typography(wordpress2016Theme)

export const { rhythm, scale } = typography
export default typography
