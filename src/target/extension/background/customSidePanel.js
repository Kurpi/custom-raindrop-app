import browser from 'webextension-polyfill'

export default function () {
  /*
   Allows users to open the side panel by clicking on the action toolbar icon + by related shortcut
   Docs: https://developer.chrome.com/docs/extensions/reference/api/sidePanel?hl=pl#open-action-icon
   Below line overrides built-in extenstion options for toolbar icon (built-in appearance: "Mini app" / "Clipper")
  */
  browser.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
}
