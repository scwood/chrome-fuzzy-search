export const getTabs = (options = {}) => {
  return new Promise((resolve) => {
    window.chrome.tabs.query(options, (tabs) => {
      resolve(tabs)
    })
  })
}

export default {
  getTabs: /localhost/.test(window.location.href)
    ? () =>
        Promise.resolve([
          {
            active: false,
            audible: false,
            autoDiscardable: true,
            discarded: false,
            favIconUrl: 'https://cdn.devdocs.io/favicon.ico',
            height: 767,
            highlighted: false,
            id: 109270236,
            incognito: false,
            index: 0,
            mutedInfo: {muted: false},
            pinned: true,
            selected: false,
            status: 'complete',
            title: 'DevDocs API Documentation',
            url: 'http://devdocs.io/',
            width: 1440,
            windowId: 109270234,
          },
          {
            active: false,
            audible: false,
            autoDiscardable: true,
            discarded: false,
            favIconUrl:
              'https://ssl.gstatic.com/ui/v1/icons/mail/images/2/unreadcountfavicon/3_2x.png',
            height: 767,
            highlighted: false,
            id: 109270237,
            incognito: false,
            index: 1,
            mutedInfo: {muted: false},
            pinned: true,
            selected: false,
            status: 'complete',
            title: 'Inbox (3) - swood@qualtrics.com - Qualtrics Mail',
            url: 'https://mail.google.com/mail/u/0/#inbox',
            width: 1440,
            windowId: 109270234,
          },
          {
            active: false,
            audible: false,
            autoDiscardable: true,
            discarded: false,
            favIconUrl: 'https://co1.qualtrics.com/favicon.ico?v=1797867',
            height: 251,
            highlighted: false,
            id: 109270478,
            incognito: false,
            index: 2,
            mutedInfo: {muted: false},
            pinned: false,
            selected: false,
            status: 'complete',
            title: 'Target Audience API Documentation',
            url:
              'https://co1.qualtrics.com/WRAPI/Contacts/docs.php#importContacts_2.3',
            width: 1440,
            windowId: 109270234,
          },
          {
            active: true,
            audible: false,
            autoDiscardable: true,
            discarded: false,
            height: 251,
            highlighted: true,
            id: 109270481,
            incognito: false,
            index: 3,
            mutedInfo: {muted: false},
            pinned: false,
            selected: true,
            status: 'complete',
            title: 'XM Programs Provo 2 Scrum Board - Agile Board - JIRA',
            url:
              'https://qualtrics.atlassian.net/secure/RapidBoard.jspa?rapidView=556&quickFilter=2069',
            width: 1440,
            windowId: 109270234,
          },
        ])
    : getTabs,
}
