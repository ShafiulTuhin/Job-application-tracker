// Get all cards parent
const allCards = document.getElementById("allCards");

// Rendering all jobs
const renderAll = () => {
  allCards.innerHTML = "";
  //function call when items is emplty
  emptyItem(jobs, allCards);
  //rendering all items
  jobs.forEach((job) => {
    const card = createJobItem(job);
    allCards.appendChild(card);
  });
};
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
    const jobType = parent.querySelector(".job-type").innerText;
    const jobSalary = parent.querySelector(".job-salary").innerText;
    const jobStatus = parent.querySelector(".job-status");
    const jobNote = parent.querySelector(".job-note").innerText;

    parent.querySelector(".job-status").innerText = "Interview";
    const cardInfo = {
      companyName,
      jobTitle,
      jobType,
      jobSalary,
      jobStatus: "Interview",
      jobNote,
    };

    // Get the job
    const jobExist = interviewJobList.find(
      (job) => job.companyName === cardInfo.companyName,
    );

    //insert job into interview array
    if (!jobExist) {
      interviewJobList.push(cardInfo);
    }

    // Remove current from reject list
    rejectedJobList = rejectedJobList.filter(
      (job) => job.companyName !== cardInfo.companyName,
    );
    // update state
    updateState("Interview", companyName);
    // calculate count
    calculateCount();
    // Update count
    updateAvailableCount();

    // rendering reject list after deleting current item
    if (currentStatus == "toggle-rejected-btn") {
      renderRejectJobs();
    }
  } else if (e.target.classList.contains("rejected-btn")) {
    const parent = e.target.parentNode.parentNode;
    const companyName = parent.querySelector(".job-name").innerText;
    const jobTitle = parent.querySelector(".job-title").innerText;
    const jobType = parent.querySelector(".job-type").innerText;
    const jobSalary = parent.querySelector(".job-salary").innerText;
    const jobStatus = parent.querySelector(".job-status");
    const jobNote = parent.querySelector(".job-note").innerText;

    parent.querySelector(".job-status").innerText = "Rejected";
    const cardInfo = {
      companyName,
      jobTitle,
      jobType,
      jobSalary,
      jobStatus: "Rejected",
      jobNote,
    };

    //  Get the job
    const jobExist = rejectedJobList.find(
      (job) => job.companyName === cardInfo.companyName,
    );
    // Insert job into rejected array
    if (!jobExist) {
      rejectedJobList.push(cardInfo);
    }

    // Remove job from interview list
    interviewJobList = interviewJobList.filter(
      (job) => job.companyName !== cardInfo.companyName,
    );
    // update state
    updateState("Rejected", companyName);
    // calculate count
    calculateCount();
    // Update count
    updateAvailableCount();
    //  rendering interview items after deleting current item
    if (currentStatus == "toggle-interview-btn") {
      renderInterviewJobs();
    }
  }
});

// Render job for interview job
const cardInsert = document.getElementById("cardInsert");

const renderInterviewJobs = () => {
  cardInsert.innerHTML = "";
  // For empty list
  emptyItem(interviewJobList, cardInsert);
  //Rendering items
  interviewJobList.forEach((job) => {
    const card = createJobItem(job);
    cardInsert.appendChild(card);
  });
};

// Rendering job reject list
const renderRejectJobs = () => {
  cardInsert.innerHTML = "";
  // For empty list
  emptyItem(rejectedJobList, cardInsert);
  //Rendering items
  rejectedJobList.forEach((job) => {
    const card = createJobItem(job);
    cardInsert.appendChild(card);
  });
};

// Delete items from interview and rejected jobs
cardInsert.addEventListener("click", (e) => {
  if (e.target.classList.contains("job-delete-btn")) {
    const parent = e.target.closest(".card");

    const companyName = parent.querySelector(".job-name").innerText;

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
