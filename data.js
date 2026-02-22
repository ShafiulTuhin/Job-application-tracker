let jobs = [
  {
    companyName: "Mobile First Corp",
    jobTitle: "React Native Developer",
    jobDetails: "Remote Full-time $130,000 - $175,000",
    jobStatus: "NOT APPLIED",
    notes:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends",
  },
  {
    companyName: "CloudFirst Inc",
    jobTitle: "Backend Developer",
    jobDetails: "Seattle, WA Full-time $140,000 - $190,000",
    jobStatus: "NOT APPLIED",
    notes:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
  },
  {
    companyName: "DataViz Solutions",
    jobTitle: "Data Visualization Specialist",
    jobDetails: "Boston, MA Full-time $125,000 - $165,000",
    jobStatus: "NOT APPLIED",
    notes:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
  },
  {
    companyName: "WebFlow Agency",
    jobTitle: "Web Designer & Developer",
    jobDetails: "Los Angles, CA Full-time $80,000 - $120,000",
    jobStatus: "NOT APPLIED",
    notes:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
  },
  {
    companyName: "Innovation Labs",
    jobTitle: "UI/UX Engineer",
    jobDetails: "Austin, TX Full-time $110,000 - $150,000",
    jobStatus: "NOT APPLIED",
    notes:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
  },
  {
    companyName: "MegaCorp Solutions",
    jobTitle: "JavaScript Developer",
    jobDetails: "New York, NY Full-time $130,000 - $170,000",
    jobStatus: "NOT APPLIED",
    notes:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
  },
  {
    companyName: "StartupXYZ",
    jobTitle: "Full Stack Engineer",
    jobDetails: "Remote Full-time $120,000 - $160,000",
    jobStatus: "NOT APPLIED",
    notes:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
  },
  {
    companyName: "TechCorp Industries",
    jobTitle: "Senior Frontend Developer",
    jobDetails: "San Francisco, CA Full-time $120,000 - $160,000",
    jobStatus: "NOT APPLIED",
    notes:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
  },
];

const renderAll = () => {
  allCards.innerHTML = "";
  //function call when items is emplty
  emptyItem(jobs, allCards);
  //rendering all items
  for (let job of jobs) {
    const div = document.createElement("div");
    div.className = "card flex justify-between bg-slate-100 rounded-lg";

    div.innerHTML = `
      <div class="p-6">
        <h2 class="job-name font-semibold text-[#002C5C] mb-2">
          ${job.companyName}
        </h2>

        <p class="job-title text-[#64748B]">
          ${job.jobTitle}
        </p>

        <p class="job-details mt-3 text-[#64748B]">
          ${job.jobDetails}
        </p>

        <h2 class="job-status bg-slate-200 px-5 py-2 mt-3 w-[200px] text-center rounded-lg">
          ${job.jobStatus}
        </h2>

        <p class="job-note my-4 text-[#323B49]">
          ${job.notes}
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

    allCards.appendChild(div);
  }
};
