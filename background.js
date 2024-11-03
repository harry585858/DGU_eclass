chrome.runtime.onInstalled.addListener(() =>{
    chrome.scripting.registerContentScripts([{
        id:"remove-css",
        matches:["<all_urls>"],
        js:["contents.js"],
        runAt: "document_idle"
    }]);
}
)