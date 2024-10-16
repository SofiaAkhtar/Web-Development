document.addEventListener("DOMContentLoaded", function () {
    // Handle collapsible sections
    document.querySelectorAll("h2, h3").forEach(function (heading) {
        heading.addEventListener("click", function () {
            let content = heading.nextElementSibling;
            if (content && content.classList.contains("collapsible-content")) {
                content.style.display = content.style.display === "block" ? "none" : "block";
            }
        });
    });

    // Generate Table of Contents
    let tocList = document.getElementById("toc-list");
    document.querySelectorAll("section > h2, section > h3").forEach(function (heading) {
        let listItem = document.createElement("li");
        let link = document.createElement("a");
        link.textContent = heading.textContent;
        link.setAttribute("href", "#" + heading.id);
        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });
});
