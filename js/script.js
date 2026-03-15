// count function 

let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

const allCardSection = document.getElementById("all-job");

function calculateCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount()


// all are hide show only one 
function showOnly(id, button) {
  const allJobs = document.getElementById("all-job");
  const interview = document.getElementById("inter-job");
  const reject = document.getElementById("reject-job");

  allJobs.classList.add("hidden");
  interview.classList.add("hidden");
  reject.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");

  // button style change
  const activeBtn = document.querySelector(".filter-btn.btn-primary");

  if (activeBtn) {
    activeBtn.classList.remove("btn-primary");
  }

  button.classList.add("btn-primary");
}


// delete item

function deleteCard(cardId) {
  //get the card
  const card = document.getElementById(cardId);
  if (!card) {
    return;
  } else {
    card.remove();
  }
  // update total count
  const totalCount = getValueFromInput("total-count");
  totalCount.textContent = parseInt(totalCount.textContent) - 1;
}
