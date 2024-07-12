export const generateRandomString = (length) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let result = ''

  // Create an array of 32-bit unsigned integers
  const randomValues = new Uint32Array(length)

  // Generate random values
  window.crypto.getRandomValues(randomValues)
  randomValues.forEach((value) => {
    result += characters.charAt(
      value % charactersLength
    )
  })
  return result
}

export const openNewWindow = (link) => {
  window.open(link, '__blank')
}

export const handleImageName = (name) => {
  const imageNameToArray = name.split('.')
  return imageNameToArray[0]
}

export const openURL = (url) => {
  window.open(url)
}
