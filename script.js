const allCards = document.getElementById("allCards");

renderAll();

// Count section
const totalJob = document.getElementById("total-job");
const interViewJob = document.getElementById("interview-job");

const calculateCount = () => {
  totalJob.innerText = jobs.length;
  interViewJob.innerText = jobs.length;
};
calculateCount();

// Delete items from all jobs
allCards.addEventListener("click", (e) => {
  if (e.target.classList.contains("job-delete-btn")) {
    const parent = e.target.closest(".card");
    const jobName = parent.querySelector(".job-name").innerText;
    console.log(parent, jobName);

    jobs = jobs.filter((job) => job.jobName !== jobName);

    renderAll();
    calculateCount();
  }
});
// allCards.addEventListener("click", (e) => {
//   const deleteBtn = e.target.closest(".job-delete-btn");

//   if (deleteBtn) {
//     const card = deleteBtn.closest(".card");
//     const jobName = card.querySelector(".job-name").innerText;

//     jobs = jobs.filter((job) => job.jobName !== jobName);

//     renderAll();
//     calculateCount();
//   }
// });
