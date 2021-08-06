function addUser() {
    var light = document.getElementById("text-input").value;
    localStorage.setItem("user_name", light);
    window.location="kwitter_room.html";
}