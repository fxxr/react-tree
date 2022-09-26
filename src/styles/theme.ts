import { IAppSettings } from 'styled-components'
import type { ThemeSettings } from '../Tree'

const reactTreeBuiltInThemes: ThemeSettings = {
  dark: {
    text: '#fafafa',
    bg: '#2d3439',
    indicator: '#64abd4',
    separator: '#555',
    icon: '#64abd4',
    selectedBg: '#3f464e',
    selectedText: '#fafafa',
    hoverBg: '#505a63',
    hoverText: '#fafafa',
    accentBg: '#2d3439',
    accentText: '#999',
    fontSize: 'default',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`,
    nodeHeight: '40px'
  },
  light: {
    text: '#333',
    bg: '#fafafa',
    indicator: '#64abd4',
    separator: '#eee',
    icon: '#64abd4',
    selectedBg: '#f0f0f0',
    selectedText: '#333',
    hoverBg: '#ccc',
    hoverText: '#333',
    accentBg: '#fafafa',
    accentText: '#ccc',
    fontSize: 'default',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`,
    nodeHeight: '40px'
  }
}

const reactTreeAppSettings: IAppSettings = {
  fontSizes: {
    xlarge: '34px',
    large: '20px',
    default: '17px',
    small: '13px',
    xsmall: '10px'
  }
}

export default {
  themes: {
    ...reactTreeBuiltInThemes
  },
  app: {
    ...reactTreeAppSettings
  }
}
