// Get all cards parent
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
    const companyName = parent.querySelector(".job-name").innerText;

    // Check whether jobs in interview or reject list
    const interview = interviewJobList.find(
      (job) => job.companyName === companyName,
    );
    const rejected = rejectedJobList.find(
      (job) => job.companyName === companyName,
    );

    if (interview || rejected) {
      alert(
        "Job cannot be deleted because it is in Interview or Rejected list.",
      );
      return;
    }

    jobs = jobs.filter((job) => job.companyName !== companyName);

    calculateCount();
    renderAll();
  }
});

const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("interview-btn")) {
    const parent = e.target.parentNode.parentNode;
    const companyName = parent.querySelector(".job-name").innerText;
    const jobTitle = parent.querySelector(".job-title").innerText;
    const jobDetails = parent.querySelector(".job-details").innerText;
    const jobStatus = parent.querySelector(".job-status").innerText;
    const jobNote = parent.querySelector(".job-note").innerText;

    parent.querySelector(".job-status").innerText = "Interview";
    const cardInfo = {
      parent,
      companyName,
      jobTitle,
      jobDetails,
      jobStatus: "Interview",
      jobNote,
    };
    // Get the job Object
    const jobExist = interviewJobList.find(
      (job) => job.companyName === cardInfo.companyName,
    );
    //insert data into interview array
    if (!jobExist) {
      interviewJobList.push(cardInfo);
    }
    // Remove current from reject list
    rejectedJobList = rejectedJobList.filter(
      (job) => job.companyName !== cardInfo.companyName,
    );
    calculateCount();
    updateAvailableCount();
    // rendering in reject items after deleting current item
    if (currentStatus == "toggle-rejected-btn") {
      renderRejectJobs();
    }
  } else if (e.target.classList.contains("rejected-btn")) {
    const parent = e.target.parentNode.parentNode;
    const companyName = parent.querySelector(".job-name").innerText;
    const jobTitle = parent.querySelector(".job-title").innerText;
    const jobDetails = parent.querySelector(".job-details").innerText;
    const jobStatus = parent.querySelector(".job-status").innerText;
    const jobNote = parent.querySelector(".job-note").innerText;

    parent.querySelector(".job-status").innerText = "Rejected";
    const cardInfo = {
      parent,
      companyName,
      jobTitle,
      jobDetails,
      jobStatus: "Rejected",
      jobNote,
    };
    const jobExist = rejectedJobList.find(
      (job) => job.companyName === cardInfo.companyName,
    );

    if (!jobExist) {
      rejectedJobList.push(cardInfo);
    }
    document.getElementById("job-available").innerText = rejectedJobList.length;
    // Remove job from interview list
    interviewJobList = interviewJobList.filter(
      (job) => job.companyName !== cardInfo.companyName,
    );
    calculateCount();
    updateAvailableCount();
    //  rendering in interview items after deleting current item
    if (currentStatus == "toggle-interview-btn") {
      renderInterviewJobs();
    }
  }
});

// Render job for interview job
const cardInsert = document.getElementById("cardInsert");

const renderInterviewJobs = () => {
  cardInsert.innerHTML = "";
  emptyItem(interviewJobList, cardInsert);

  for (let interviewJob of interviewJobList) {
    const div = document.createElement("div");
    div.className = "card flex justify-between bg-slate-100 rounded-lg";
    div.innerHTML = `
      <div class="p-6">
        <h2 class="job-name font-semibold text-[#002C5C] mb-2">
          ${interviewJob.companyName}
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
          <button class="interview-btn border-2 border-green-300 p-2 text-[#10B981] font-bold cursor-pointer">
            INTERVIEW
          </button>

          <button class="rejected-btn border-2 border-red-300 p-2 text-[#EF4444] font-bold cursor-pointer">
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
  emptyItem(rejectedJobList, cardInsert);
  for (let rejectJob of rejectedJobList) {
    const div = document.createElement("div");
    div.className = "card flex justify-between bg-slate-100 rounded-lg";
    div.innerHTML = `
      <div class="p-6">
        <h2 class="job-name font-semibold text-[#002C5C] mb-2">
          ${rejectJob.companyName}
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
          <button class="interview-btn border-2 border-green-300 p-2 text-[#10B981] font-bold cursor-pointer">
            INTERVIEW
          </button>

          <button class="rejected-btn border-2 border-red-300 p-2 text-[#EF4444] font-bold cursor-pointer">
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

// Delete items from interview jobs
cardInsert.addEventListener("click", (e) => {
  if (e.target.classList.contains("job-delete-btn")) {
    const parent = e.target.closest(".card");
    console.log(parent);
    const companyName = parent.querySelector(".job-name").innerText;
    console.log(companyName);

    //filtering job for interview job
    interviewJobList = interviewJobList.filter(
      (job) => job.companyName !== companyName,
    );

    //filtering job for rejected job
    rejectedJobList = rejectedJobList.filter(
      (job) => job.companyName !== companyName,
    );
    calculateCount();
    updateAvailableCount();
    if (currentStatus === "toggle-interview-btn") {
      renderInterviewJobs();
    } else if (currentStatus === "toggle-rejected-btn") {
      renderRejectJobs();
    }
  }
});
