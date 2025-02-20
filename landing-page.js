function note() {
  document.getElementById("note").addEventListener("click", function () {
    let addnote = prompt("enter your note");
    if (addnote) {
      let newnote = document.createElement("div");
      //to access multiple elements with same class name we are using classlist(list of class)
      newnote.classList.add("notes");
      newnote.innerHTML = `&#9642; ${addnote}`;
      document.getElementById("notecontainer").appendChild(newnote);
    }
  });
  //to clear all the notes
  document.getElementById("button").addEventListener("click", function () {
    document.getElementById("notecontainer").innerHTML = "";
  });
}
note();