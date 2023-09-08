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

export const findSecondLargest = (array) => {
  let x1 = array[0]
  let x2 = array[1]

  if (x2 > x1) [x1, x2] = [x2, x1]

  for (let i = 1; i < array.length; i++) {
    let x = array[i]

    if (x > x1) {
      let oldx1 = x1
      ;(x1 = x), (x2 = oldx1)
    } else if (x1 > x && x > x2) {
      x2 = x
    }
    console.log('x1 =', x1, 'x2 =', x2)
  }

  console.log('=======================')
}
;[1, 4, 3, 2, 6, 8]
