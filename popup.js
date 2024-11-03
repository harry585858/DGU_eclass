document.getElementById("runScriptButton").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: yourFunction
  });
});

function yourFunction() {
  // 여기에서 JavaScript 코드를 작성합니다.
  alert("JavaScript 코드가 실행되었습니다!");
}
