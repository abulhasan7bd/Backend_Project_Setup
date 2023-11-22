/* eslint-disable no-unused-vars */
function removeNullValues(obj) {
  let filterEntries = Object.entries(obj).filter(
    ([key, value]) => value !== null,
  )
  let newObj = Object.fromEntries(filterEntries)
  return newObj
}

// eslint-disable-next-line no-undef
module.exports = { removeNullValues }
