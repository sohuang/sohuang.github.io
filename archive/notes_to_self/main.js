if (!localStorage.getItem("notes")) {
     localStorage.setItem("notes", JSON.stringify([]));
}

var myNotes = JSON.parse(localStorage.getItem("notes"));
displayNotes();

function postNewNote() {
     var titleInput = $(".new-note-title");
     var contentInput = $(".new-note-content");
     
     var noteTitle = titleInput.val();
     var noteContent = contentInput.val();
     var noteDate = moment().format("dddd, MMMM Do YYYY, h:mm a");

     var note = {};
     note.title = noteTitle;
     note.content = noteContent;
     note.date = noteDate;
     
     myNotes.push(note);
     localStorage.setItem("notes", JSON.stringify(myNotes));
     
     titleInput.val("");
     contentInput.val("");
     displayNotes();
}

$(".post-new-note").on("click", postNewNote);

function displayNotes() {
     $(".old-notes").html("");
     for (var i = myNotes.length-1; i >=0; i--) {
          var note = myNotes[i];
          var id = i;
          var noteTitle = note.title;
          var noteDate = note.date;
          var noteContent = note.content.replace(/\n/g,"<br>");
          
          var thisNote = $("<div>").addClass("note");
          var noteTitleDisplay = $("<h2>").addClass("note-title").text(noteTitle);
          var noteDateDisplay = $("<p>").addClass("note-date").text(noteDate);
          var noteContentDisplay = $("<p>").addClass("note-content").html(noteContent);
          var deleteButton = $("<input/>").addClass("delete-old-note").attr({type: "button", value: "Clear"});
          deleteButton.onclick(deleteNote)
          
          thisNote.append(noteTitleDisplay);
          thisNote.append(noteDateDisplay);
          thisNote.append(noteContentDisplay);
          thisNote.append(deleteButton);
          
          $(".old-notes").append(thisNote);
     }
}

function deleteNote(id) {
     var messages = JSON.parse(localStorage.getItem("notes"));
     messages.splice(id, 1);
     localStorage.setItem("notes", JSON.stringify(messages));
     console.log(messages);
     // localStorage.removeItem("notes", JSON.stringify([]));
     location.reload();
}

$(".delete-old-note").on("click", deleteNote);