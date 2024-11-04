document.getElementById("runScriptButton").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: eclasstime
  });
});
document.getElementById("attendance").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: attendancemod
  });
});
function eclasstime() {
  // 여기에서 JavaScript 코드를 작성합니다.
 var inp = parseInt(prompt("시청시간 초단위 입력"));

if (isNaN(inp)) {
    alert("올바른 숫자를 입력해 주세요.");
} else {
    StudyRecordDTO.studyTotalTime = inp;
    StudyRecordDTO.webSessionTime = inp;
    LessonWork.editStudyRecord (StudyRecordDTO, learningControl, 1, editStudyRecordCallback);
//기간 후 수강시간 변경
    StudyRecordDTO.studyAfterTime = 0;
    StudyRecordDTO.webAfterTime = 0;
    LessonWork.editStudyRecord(StudyRecordDTO, learningControl, O, editStudyRecordCallback);
    alert("실행되었습니다!");
}
}
function attendancemod(){
    //출석수정
    alert("Course.do 위치인지 확인하세요");
    
}
