document.getElementById("runScriptButton").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: yourFunction
  });
});

function yourFunction() {
  // 여기에서 JavaScript 코드를 작성합니다.
  StudyRecordDTO.studyTotalTime = 6974;
StudyRecordDTO.webSessionTime = 6974;
LessonWork.editStudyRecord (StudyRecordDTO, learningControl, 1, editStudyRecordCallback);
//기간 후 수강시간 변경
StudyRecordDTO.studyAfterTime = 0;
StudyRecordDTO.webAfterTime = 0;
LessonWork.editStudyRecord(StudyRecordDTO, learningControl, O, editStudyRecordCallback);
  alert("실행되었습니다!");
}
