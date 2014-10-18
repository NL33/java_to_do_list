$(document).ready(function() {

  
    //$("#new-todos").append('<div class="new-todo">' + '<div class="form-group">' +
              //'<label for="new-description">Description</label>' + 
              //'<input type="text" class="form-control" id="new-description">' +
              //'</div>' + '<div class="form-group">' + '<label for="deadline">Deadline</label>' + 
              //'<input type="text" class="form-control" id="new-deadline">' + 
              //'</div>' + '</div>');//this code produces new boxes for descriptions and deadlines--unnecessary, but kept for instructional purposes
     
  //

 $("form#new-list").submit(function(event) {
  event.preventDefault();
//create a new list, which includes tasks taken from new todo loop below
  var newListName = $("input#new-list").val();
  var newList = { name: newListName, tasks: [] };
  //if (newListName) {
    $("#listinglists").show();
    $("ol#show-lists").append("<li><span class ='listnames'>" + "<h4>" + newListName + "</h4>" + "</span></li>");



  $(".listnames").last().click(function(){
      $("input#new-description").val("");
      $("input#new-deadline").val("");
      $("#fulllistdisplay").empty();
      $("#name").empty();
      $("#new-task").show();
      $("#name").append("to" + " " + newListName + " " + "<span class='small'>(click on the word" + " " + newListName + " " + "above to display all tasks for the list" + " " + newListName + ")" + "</span>")
      $("#listdetail").empty();
      $("#listdetail").append(newListName); 
      newList.tasks.forEach(function(task) {
       $("#fulllistdisplay").append("<span class='bullets'>Task:</span>" + " " + task.description + 
                                        "<dd>" + "&nbsp;&nbsp;&nbsp;" + "<span class='bullets'>Due:</span>" 
                                        + " " + task.deadline + "</dd>" + "<p></p>");
      });
    });

    $("#add-tasks").click(function() {
          $(".new-todo").each(function(){
           var inputtedDescription = $(this).find("input#new-description").val();
           var inputtedDeadline= $(this).find("input#new-deadline").val();
           var additionalTodos = { description: inputtedDescription, deadline: inputtedDeadline };
           newList.tasks.push(additionalTodos);
          });
    }); 

});
});