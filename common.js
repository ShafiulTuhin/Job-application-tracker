// Toggling button

const toggleBtn = (id) => {
  const filterBtn = document.querySelectorAll(".filter-btn");
  filterBtn.forEach((btn) => {
    btn.classList.remove("bg-blue-500", "text-white");
    btn.classList.add("bg-slate-100", "text-black");
  });

  const selectedBtn = document.getElementById(id);
  selectedBtn.classList.add("bg-blue-500", "text-white");
  selectedBtn.classList.remove("bg-slate-100", "text-black");
  currentStatus = id;
  const availableJob = document.getElementById("job-available");

  if (id == "toggle-interview-btn") {
    cardInsert.classList.remove("hidden");
    allCards.classList.add("hidden");
    renderInterviewJobs();
    availableJob.innerText = interviewJobList.length;
  } else if (id == "toggle-all-btn") {
    cardInsert.classList.add("hidden");
    allCards.classList.remove("hidden");
    availableJob.innerText = jobs.length;
  } else if (id == "toggle-rejected-btn") {
    cardInsert.classList.remove("hidden");
    allCards.classList.add("hidden");
    renderRejectJobs();
    availableJob.innerText = rejectedJobList.length;
  }
};
// count available job after click button
const updateAvailableCount = () => {
  const availableJob = document.getElementById("job-available");
  if (currentStatus === "toggle-all-btn") {
    availableJob.innerText = jobs.length;
  } else if (currentStatus === "toggle-interview-btn") {
    availableJob.innerText = interviewJobList.length;
  } else if (currentStatus === "toggle-rejected-btn") {
    availableJob.innerText = rejectedJobList.length;
  }
};
