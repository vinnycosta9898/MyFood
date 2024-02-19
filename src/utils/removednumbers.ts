export const removedNumbers = (text: string) => {
  return text.replace(/\d+/g, '').split(',').filter(item => item.trim() !== '')
}
