const allCards = document.getElementById("allCards");
// Rendering all jobs
renderAll();
// Initial array lists
let interviewJobList = [];
let rejectedJobList = [];
let currentStatus = "all";
// call count function
calculateCount();
// Delete items from all jobs
allCards.addEventListener("click", (e) => {
  if (e.target.classList.contains("job-delete-btn")) {
    const parent = e.target.closest(".card");
    const jobName = parent.querySelector(".job-name").innerText;
    console.log(parent, jobName);

    jobs = jobs.filter((job) => job.jobName !== jobName);

    calculateCount();
    renderAll();
  }
});

const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("interview-btn")) {
    const parent = e.target.parentNode.parentNode;
    const jobName = parent.querySelector(".job-name").innerText;
    const jobTitle = parent.querySelector(".job-title").innerText;
    const jobDetails = parent.querySelector(".job-details").innerText;
    const jobStatus = parent.querySelector(".job-status").innerText;
    const jobNote = parent.querySelector(".job-note").innerText;

    parent.querySelector(".job-status").innerText = "Interview";
    const cardInfo = {
      parent,
      jobName,
      jobTitle,
      jobDetails,
      jobStatus: "Interview",
      jobNote,
    };
    // Get the job Object
    const jobExist = interviewJobList.find(
      (job) => job.jobName === cardInfo.jobName,
    );
    //insert data into interview array
    if (!jobExist) {
      interviewJobList.push(cardInfo);
    }
    // Remove job from reject list
    rejectedJobList = rejectedJobList.filter(
      (job) => job.jobName !== cardInfo.jobName,
    );
    calculateCount();
    updateAvailableCount();
    // rendering depend on changing status
    if (currentStatus == "toggle-rejected-btn") {
      renderRejectJobs();
    }
  } else if (e.target.classList.contains("rejected-btn")) {
    const parent = e.target.parentNode.parentNode;
    const jobName = parent.querySelector(".job-name").innerText;
    const jobTitle = parent.querySelector(".job-title").innerText;
    const jobDetails = parent.querySelector(".job-details").innerText;
    const jobStatus = parent.querySelector(".job-status").innerText;
    const jobNote = parent.querySelector(".job-note").innerText;

    parent.querySelector(".job-status").innerText = "Rejected";
    const cardInfo = {
      parent,
      jobName,
      jobTitle,
      jobDetails,
      jobStatus: "Rejected",
      jobNote,
    };
    const jobExist = rejectedJobList.find(
      (job) => job.jobName === cardInfo.jobName,
    );

    if (!jobExist) {
      rejectedJobList.push(cardInfo);
    }
    document.getElementById("job-available").innerText = rejectedJobList.length;
    // Remove job from interview list
    interviewJobList = interviewJobList.filter(
      (job) => job.jobName !== cardInfo.jobName,
    );
    calculateCount();
    updateAvailableCount();
    if (currentStatus == "toggle-interview-btn") {
      renderInterviewJobs();
    }
  }
});

// Render job for interview job
const cardInsert = document.getElementById("cardInsert");
const renderInterviewJobs = () => {
  cardInsert.innerHTML = "";
  for (let interviewJob of interviewJobList) {
    const div = document.createElement("div");
    div.className = "card flex justify-between bg-slate-100 rounded-lg";
    div.innerHTML = `
      <div class="p-6">
        <h2 class="job-name font-semibold text-[#002C5C] mb-2">
          ${interviewJob.jobName}
        </h2>

        <p class="job-title text-[#64748B]">
          ${interviewJob.jobTitle}
        </p>

        <p class="job-details mt-3 text-[#64748B]">
          ${interviewJob.jobDetails}
        </p>

        <h2 class="job-status bg-slate-200 px-5 py-2 mt-3 w-[200px] text-center rounded-lg">
          ${interviewJob.jobStatus}
        </h2>

        <p class="job-note my-4 text-[#323B49]">
          ${interviewJob.jobNote}
        </p>

        <div class="space-x-3">
          <button class="interview-btn border-2 border-green-300 p-2 text-[#10B981] font-bold">
            INTERVIEW
          </button>

          <button class="rejected-btn border-2 border-red-300 p-2 text-[#EF4444] font-bold">
            REJECTED
          </button>
        </div>
        
      </div>
      <div class="p-6">
          <button
              class=" bg-slate-200 p-2 rounded-lg text-[#323B49] cursor-pointer"
            >
              <i class="fa-solid fa-trash job-delete-btn"></i>
        </button> 
        </div>
    `;
    cardInsert.appendChild(div);
  }
};
// Rendering job reject list
const renderRejectJobs = () => {
  cardInsert.innerHTML = "";
  for (let rejectJob of rejectedJobList) {
    const div = document.createElement("div");
    div.className = "card flex justify-between bg-slate-100 rounded-lg";
    div.innerHTML = `
      <div class="p-6">
        <h2 class="job-name font-semibold text-[#002C5C] mb-2">
          ${rejectJob.jobName}
        </h2>

        <p class="job-title text-[#64748B]">
          ${rejectJob.jobTitle}
        </p>

        <p class="job-details mt-3 text-[#64748B]">
          ${rejectJob.jobDetails}
        </p>

        <h2 class="job-status bg-slate-200 px-5 py-2 mt-3 w-[200px] text-center rounded-lg">
          ${rejectJob.jobStatus}
        </h2>

        <p class="job-note my-4 text-[#323B49]">
          ${rejectJob.jobNote}
        </p>

        <div class="space-x-3">
          <button class="interview-btn border-2 border-green-300 p-2 text-[#10B981] font-bold">
            INTERVIEW
          </button>

          <button class="rejected-btn border-2 border-red-300 p-2 text-[#EF4444] font-bold">
            REJECTED
          </button>
        </div>
        
      </div>
      <div class="p-6">
          <button
              class=" bg-slate-200 p-2 rounded-lg text-[#323B49] cursor-pointer"
            >
              <i class="fa-solid fa-trash job-delete-btn"></i>
        </button> 
        </div>
    `;
    cardInsert.appendChild(div);
  }
};
