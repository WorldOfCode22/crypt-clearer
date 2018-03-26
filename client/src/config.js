let mode = 'dev'

export const connectionString = () => {
  if (mode === 'dev') {
    return 'http://localhost:4000'
  } else {
    return ''
  }
}

export const fetchObject = (method) => {
  return {
    method,
    credentials: 'include'
  }
}
