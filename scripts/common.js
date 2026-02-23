function showOnlyInterview() {
  const allSection = document.getElementById("all-section");
  const interviewSection = document.getElementById("interview-section");
  const rejectedSection = document.getElementById("rejected-section");
  const rejectedSideCount = document.getElementById("rejected-side-count");
  const interviewSideCount = document.getElementById("interview-side-count");
  const ofWord = document.getElementById("of");

  allSection.classList.add("hidden");
  rejectedSection.classList.add("hidden");
  rejectedSideCount.classList.add("hidden");
  interviewSection.classList.remove("hidden");
  interviewSideCount.classList.remove("hidden");
  ofWord.classList.remove("hidden");
  document
    .getElementById("interview-btn")
    .classList.replace("bg-white", "bg-[#3B82F6]");
  document
    .getElementById("interview-btn")
    .classList.replace("text-[#64748B]", "text-white");
  document
    .getElementById("all-btn")
    .classList.replace("bg-[#3B82F6]", "bg-white");
  document
    .getElementById("all-btn")
    .classList.replace("text-white", "text-[#64748B]");
  document
    .getElementById("rejected-btn")
    .classList.replace("bg-[#3B82F6]", "bg-white");
  document
    .getElementById("rejected-btn")
    .classList.replace("text-white", "text-[#64748B]");
}

function showOnlyRejected() {
  const allSection = document.getElementById("all-section");
  const interviewSection = document.getElementById("interview-section");
  const rejectedSection = document.getElementById("rejected-section");
  const rejectedSideCount = document.getElementById("rejected-side-count");
  const interviewSideCount = document.getElementById("interview-side-count");
  const ofWord = document.getElementById("of");

  allSection.classList.add("hidden");
  rejectedSection.classList.remove("hidden");
  rejectedSideCount.classList.remove("hidden");
  interviewSection.classList.add("hidden");
  interviewSideCount.classList.add("hidden");
  ofWord.classList.remove("hidden");

  document
    .getElementById("rejected-btn")
    .classList.replace("bg-white", "bg-[#3B82F6]");
  document
    .getElementById("rejected-btn")
    .classList.replace("text-[#64748B]", "text-white");
  document
    .getElementById("all-btn")
    .classList.replace("bg-[#3B82F6]", "bg-white");
  document
    .getElementById("all-btn")
    .classList.replace("text-white", "text-[#64748B]");
  document
    .getElementById("interview-btn")
    .classList.replace("bg-[#3B82F6]", "bg-white");
  document
    .getElementById("interview-btn")
    .classList.replace("text-white", "text-[#64748B]");
}

function showOnlyAll() {
  const allSection = document.getElementById("all-section");
  const interviewSection = document.getElementById("interview-section");
  const rejectedSection = document.getElementById("rejected-section");
  const rejectedSideCount = document.getElementById("rejected-side-count");
  const interviewSideCount = document.getElementById("interview-side-count");
  const ofWord = document.getElementById("of");

  allSection.classList.remove("hidden");
  rejectedSection.classList.add("hidden");
  rejectedSideCount.classList.add("hidden");
  interviewSection.classList.add("hidden");
  interviewSideCount.classList.add("hidden");
  ofWord.classList.add("hidden");

  document
    .getElementById("all-btn")
    .classList.replace("bg-white", "bg-[#3B82F6]");
  document
    .getElementById("all-btn")
    .classList.replace("text-[#64748B]", "text-white");
  document
    .getElementById("rejected-btn")
    .classList.replace("bg-[#3B82F6]", "bg-white");
  document
    .getElementById("rejected-btn")
    .classList.replace("text-white", "text-[#64748B]");
  document
    .getElementById("interview-btn")
    .classList.replace("bg-[#3B82F6]", "bg-white");
  document
    .getElementById("interview-btn")
    .classList.replace("text-white", "text-[#64748B]");
}

function removeAndAddInterview(childId) {
  const rejectedChild = document.getElementById(childId + "-rejected");
  const interviewedChild = document.getElementById(childId + "-interview");
  const child = document.getElementById(childId);

  rejectedChild.classList.add("hidden");
  interviewedChild.classList.remove("hidden");
  interviewedChild.querySelector(".rejected-badge").classList.add("hidden");
  interviewedChild.querySelector(".not-applied-badge").classList.add("hidden");
  interviewedChild.querySelector(".interview-badge").classList.remove("hidden");
  child.querySelector(".rejected-badge").classList.add("hidden");
  child.querySelector(".not-applied-badge").classList.add("hidden");
  child.querySelector(".interview-badge").classList.remove("hidden");

  checkEmpty();
  countJobs();
}

function removeAndAddRejected(childId) {
  const rejectedChild = document.getElementById(childId + "-rejected");
  const interviewedChild = document.getElementById(childId + "-interview");
  const child = document.getElementById(childId);
  interviewedChild.classList.add("hidden");
  rejectedChild.classList.remove("hidden");
  rejectedChild.querySelector(".rejected-badge").classList.remove("hidden");
  rejectedChild.querySelector(".not-applied-badge").classList.add("hidden");
  rejectedChild.querySelector(".interview-badge").classList.add("hidden");
  child.querySelector(".rejected-badge").classList.remove("hidden");
  child.querySelector(".not-applied-badge").classList.add("hidden");
  child.querySelector(".interview-badge").classList.add("hidden");

  checkEmpty();
  countJobs();
}

function countTotal() {
  const totalCountElement = document.getElementById("total-count");
  const jobsCountElement = document.getElementById("jobs-count");
  const totalCount = totalCountElement.innerHTML;

  const newCount = Number(totalCount) - 1;

  totalCountElement.innerHTML = newCount;
  jobsCountElement.innerHTML = newCount;
}

function deleteCard(id) {
  const card = document.getElementById(id);
  const interviewCard = document.getElementById(id + "-interview");
  const rejectCard = document.getElementById(id + "-rejected");

  if (card) {
    card.remove();
  }
  if (interviewCard) {
    interviewCard.remove();
  }
  if (rejectCard) {
    rejectCard.remove();
  }

  checkEmpty();
  countTotal();
  countJobs();
}

function checkEmpty() {
  const allSection = document.querySelectorAll("#all-section .job-card");
  const interviewSection = document.querySelectorAll(
    "#interview-section .job-card:not(.hidden)",
  );
  const rejectedSection = document.querySelectorAll(
    "#rejected-section .job-card:not(.hidden)",
  );
  const emptyCard = document.getElementById("empty-card");
  const emptyCardInterview = document.getElementById("empty-card-interview");
  const emptyCardRejected = document.getElementById("empty-card-rejected");

  emptyCard.classList.toggle("hidden", allSection.length > 0);
  emptyCardInterview.classList.toggle("hidden", interviewSection.length > 0);
  emptyCardRejected.classList.toggle("hidden", rejectedSection.length > 0);
}

function countJobs() {
  const rejectedCount = document.getElementById("rejected-count");
  const interviewCount = document.getElementById("interview-count");
  const rejectedSideCount = document.getElementById("rejected-side-count");
  const interviewSideCount = document.getElementById("interview-side-count");

  const interviewLength = document.querySelectorAll(
    "#interview-section .job-card:not(.hidden)",
  ).length;

  const rejectedLength = document.querySelectorAll(
    "#rejected-section .job-card:not(.hidden)",
  ).length;

  rejectedCount.innerHTML = rejectedLength;
  interviewCount.innerHTML = interviewLength;
  rejectedSideCount.innerHTML = rejectedLength;
  interviewSideCount.innerHTML = interviewLength;
}
