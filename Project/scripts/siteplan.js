let yr = new Date().getFullYear();
let lastModified = document.lastModified;
let author = "Bassey Emmanuel";
let place = "Lagos, Nigeria";


// backticks allow us to insert variables into the output.
document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;
document.getElementById("modified").innerHTML = `Last Modified: ${lastModified}`;