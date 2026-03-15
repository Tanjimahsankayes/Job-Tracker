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