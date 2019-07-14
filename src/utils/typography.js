import Typography from 'typography'
import altonTheme from 'typography-theme-alton'

altonTheme.googleFonts = [
  {
    name: 'Poppins',
    styles: [
      '700',
      '600',
      '500',
      '400',
      '200'
    ],
  },
  {
    name: 'Open Sans',
    styles: [
      '700',
      '600',
      '500',
      '400',
      '200'
    ],
  },
]
altonTheme.headerFontFamily = ['Poppins']
altonTheme.bodyFontFamily = ['Open Sans']
altonTheme.baseFontSize = '10px'
altonTheme.bodyWeight = '400'

const typography = new Typography(altonTheme)

export default typography
export const rhythm = typography.rhythm
