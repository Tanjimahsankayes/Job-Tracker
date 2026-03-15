function showOnly(id){
    const allJobs = document.getElementById("all-job");
    const interReject = document.getElementById("inter-reject");

    allJobs.classList.add("hidden");
    interReject.classList.add("hidden");

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}