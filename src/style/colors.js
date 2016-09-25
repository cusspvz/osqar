export const base = {
  black: '#111',
  white: '#fff',
  gray: '#ddd',
  border: '#eee',
  midgray: '#888',
  blue: '#1d8add',
  red: '#db4e23',
  orange: '#f57d0d',
  green: '#0cd669'
}

export const theme = {
  primary: base.blue,
  secondary: base.midgray,
  default: base.black,
  info: base.blue,
  success: base.green,
  warning: base.orange,
  error: base.red
}

export default {
  ...base,
  ...theme
}
