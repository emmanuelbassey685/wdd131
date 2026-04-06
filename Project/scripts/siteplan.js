// Get the current year
const year = document.querySelector("#current-year");
year.textContent = new Date().getFullYear();

// Get the last modified date
const lastModified = document.querySelector("#last-modified");
lastModified.textContent = "Last Modified: " + document.lastModified;