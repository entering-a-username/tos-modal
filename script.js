(function() {
    const btn = document.getElementById("toggleID");
    const modal = document.getElementById("modalID");
    const close = document.getElementById("closeID");
    const accept = document.getElementById("acceptID");
    const decline = document.getElementById("declineID");


    btn.addEventListener("click", function() {
        modal.classList.remove("hidden");
    })

    close.addEventListener("click", function() {
        modal.classList.add("hidden");
    })

    accept.addEventListener("click", function() {
        modal.classList.add("hidden");
    })

    decline.addEventListener("click", function() {
        modal.classList.add("hidden");
    })



})();