import colors from './colors'

const sans = {
  fontFamily: 'Roboto, sans-serif'
}
const caps = {
  textTransform: 'uppercase',
  letterSpacing: '.1em'
}

export default {
  colors,
  fontSizes: [ 64, 48, 24, 18, 16, 14, 12 ],

  name: 'Biblio',
  fontFamily: 'Palatino, Georgia, serif',
  color: colors.black,
  backgroundColor: colors.white,

  borderColor: `rgba(0, 0, 0, ${1/8})`,

  scale: [
    0, 12, 24, 48, 96
  ],

  fontSizes: [
    72, 64, 48, 32, 18, 16, 14
  ],

  bold: 500,

  Heading_alt: {
    opacity: 1,
    ...sans,
    ...caps,
    fontSize: 14,
    color: colors.red
  },

  Banner: {
    backgroundColor: '#f6fee6',
    // backgroundImage: 'none',
    boxShadow: 'inset 0 0 320px 0 rgba(128, 64, 0, .5), inset 0 0 0 99999px rgba(128, 128, 96, .25)'
  },

  Toolbar: {
    color: 'inherit',
    backgroundColor: '#fff',
    borderBottom: `1px solid rgba(0, 0, 0, ${1/8})`
  },

  Button: {
    ...sans,
    ...caps,
    fontSize: 12
  },
  ButtonOutline: {
    ...sans,
    ...caps,
    fontSize: 12
  },
  NavItem: {
    ...sans,
    ...caps,
    fontSize: 12
  },
  PanelHeader: {
    ...sans,
  },
  Label: {
    ...sans,
    ...caps,
    fontSize: 12,
    opacity: 5/8
  },
  SequenceMap: {
    ...sans,
    ...caps,
    fontSize: 12
  },
  Donut: {
    ...sans,
  },
  Stat: {
    ...sans,
  },
  Breadcrumbs: {
    ...sans,
    color: '#e54',
  },

  PageHeader: {
    borderColor: '#e54',
  },
  SectionHeader: {
    borderColor: '#e54',
  },
}
