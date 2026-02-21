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
//  available job quantity
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

// Count section
const totalJob = document.querySelector(".total-job");
const interviewJob = document.getElementById("interview-job");
const rejectedJob = document.getElementById("rejected-job");
const availableJob = document.getElementById("job-available");
const calculateCount = () => {
  totalJob.innerText = jobs.length;
  availableJob.innerText = jobs.length;
  interviewJob.innerText = interviewJobList.length;
  rejectedJob.innerText = rejectedJobList.length;
};

//When items is empty
const emptyItem = (list, parent) => {
  if (list.length === 0) {
    parent.innerHTML = `
         <div class="bg-slate-100 text-center py-30 space-y-5 rounded-lg">
          <i class="fa-solid fa-file text-[#64748B] text-7xl"></i>
          <h2 class="text-[#002C5C] font-bold text-2xl">No jobs available</h2>
          <p class="text-[#64748B]">Check back soon for new job opportunities</p>
        </div>
      `;
    return;
  }
};
