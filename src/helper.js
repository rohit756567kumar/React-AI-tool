export function checkHeading(str){
    return /^(\*)(\*)(.*)*$/.test(str)
}

export function replaceHeadingstarts(str) {
  return str.replace(/^(\*)(\*)|(\*)\$/g,'')
}
