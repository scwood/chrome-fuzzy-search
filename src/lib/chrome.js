const chrome = window.chrome

const getTabs = (options = {}) => {
  return new Promise((resolve) => {
    chrome.tabs.query(options, resolve)
  })
}

const activateTab = (tab) => {
  return new Promise((resolve) => {
    const updateTab = () => {
      chrome.tabs.update(tab.id, {active: true}, resolve)
    }
    chrome.windows.getCurrent((window) => {
      if (tab.windowId !== window.id) {
        chrome.windows.update(tab.windowId, {focused: true}, updateTab)
      } else {
        updateTab()
      }
    })
  })
}

export default {
  getTabs,
  activateTab,
}
