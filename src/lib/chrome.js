export const getTabs = (options = {}) => {
  return new Promise((resolve) => {
    window.chrome.tabs.query(options, (tabs) => {
      resolve(tabs)
    })
  })
}

export default {
  getTabs,
  // getTabs: () => Promise.resolve([{id: 'a', title: 'Test', url: 'http...'}]),
}
