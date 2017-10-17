

// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//the event handler for the buttonclick to open the modal
function openModal(id){
    console.log("clicked modal open button " + id);
    if (id=="embeddedMap"){
        document.getElementById("modalIFrame").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21566.10478554512!2d-121.78214228630621!3d47.4945282521766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1508275934130" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>"';
    }
    document.getElementById("modalTitle").innerHTML = id;
    modal.style.display = "block";
}
