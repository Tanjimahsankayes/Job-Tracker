let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
const jobCountText = document.getElementById("job-count");

const allCardSection = document.getElementById("all-job");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("reject-container");

const interviewEmpty = document.getElementById("interview-empty");
const rejectEmpty = document.getElementById("reject-empty");

function updateStatusButton(card, status) {
  const statusBtn = card.querySelector(".status-btn");
  if (!statusBtn) return;

  if (status === "interview") {
    statusBtn.innerText = "INTERVIEW";
    statusBtn.classList.remove("btn-red-500", "text-red-600", "border-red-600");
    statusBtn.classList.add(
      "btn-green-500",
      "text-green-600",
      "border-green-600",
    );
  } else if (status === "rejected") {
    statusBtn.innerText = "REJECTED";
    statusBtn.classList.remove(
      "btn-green-500",
      "text-green-600",
      "border-green-600",
    );
    statusBtn.classList.add("btn-red-500", "text-red-600", "border-red-600");
  }
}

function calculateCount() {
  const totalJobs = allCardSection.children.length;

  total.innerText = totalJobs;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;

  interviewEmpty.style.display = interviewList.length ? "none" : "block";
  rejectEmpty.style.display = rejectedList.length ? "none" : "block";

  const activeSection = document.querySelector(
    "#all-job:not(.hidden), #inter-job:not(.hidden), #reject-job:not(.hidden)",
  );

  if (!activeSection) return;

  if (activeSection.id === "all-job") {
    jobCountText.innerText = `${totalJobs} jobs`;
  } else if (activeSection.id === "inter-job") {
    jobCountText.innerText = `${interviewList.length} of ${totalJobs} jobs`;
  } else if (activeSection.id === "reject-job") {
    jobCountText.innerText = `${rejectedList.length} of ${totalJobs} jobs`;
  }
}

calculateCount();

function showOnly(id, button) {
  const allJobs = document.getElementById("all-job");
  const interview = document.getElementById("inter-job");
  const reject = document.getElementById("reject-job");

  allJobs.classList.add("hidden");
  interview.classList.add("hidden");
  reject.classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");

  const activeBtn = document.querySelector(".filter-btn.btn-primary");
  if (activeBtn) activeBtn.classList.remove("btn-primary");
  button.classList.add("btn-primary");

  calculateCount();
}

function deleteCard(cardId) {
  const card = document.getElementById(cardId);

  if (card) card.remove();

  interviewList.forEach((c) => {
    if (c.id === cardId) c.remove();
  });

  rejectedList.forEach((c) => {
    if (c.id === cardId) c.remove();
  });

  interviewList = interviewList.filter((c) => c.id !== cardId);
  rejectedList = rejectedList.filter((c) => c.id !== cardId);

  calculateCount();
}

function attachCardLogic(card) {
  const interviewBtn = card.querySelector(".interview-btn");
  const rejectedBtn = card.querySelector(".rejected-btn");

  interviewBtn.addEventListener("click", function () {
    if (card.dataset.status === "interview") return;

    rejectedList = rejectedList.filter((c) => c.id !== card.id);
    const rejectCard = [...rejectContainer.children].find(
      (c) => c.id === card.id,
    );
    if (rejectCard) rejectCard.remove();

    card.dataset.status = "interview";

    if (allCardSection.contains(card)) {
      const clone = card.cloneNode(true);

      updateStatusButton(card, "interview");
      updateStatusButton(clone, "interview");

      interviewContainer.appendChild(clone);
      interviewList.push(clone);
      attachCardLogic(clone);
    } else {
      updateStatusButton(card, "interview");

      interviewContainer.appendChild(card);
      interviewList.push(card);
    }

    calculateCount();
  });

  rejectedBtn.addEventListener("click", function () {
    if (card.dataset.status === "rejected") return;

    interviewList = interviewList.filter((c) => c.id !== card.id);
    const interCard = [...interviewContainer.children].find(
      (c) => c.id === card.id,
    );
    if (interCard) interCard.remove();

    card.dataset.status = "rejected";

    if (allCardSection.contains(card)) {
      const clone = card.cloneNode(true);

      updateStatusButton(card, "rejected");
      updateStatusButton(clone, "rejected");

      rejectContainer.appendChild(clone);
      rejectedList.push(clone);
      attachCardLogic(clone);
    } else {
      updateStatusButton(card, "rejected");

      rejectContainer.appendChild(card);
      rejectedList.push(card);
    }

    calculateCount();
  });
}

const allCards = allCardSection.querySelectorAll(".bg-base-100");
allCards.forEach((card) => attachCardLogic(card));
