$(document).ready(function() {

  //click on new todo under a list, and the boxes appear
  
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
//

//loop for every new todo created--pushing the results into the taks object
$("#add-tasks").click(function() {
  $(".new-todo").each(function(){
    var inputtedDescription = $(this).find("input#new-description").val();
    var inputtedDeadline= $(this).find("input#new-deadline").val();

    var additionalTodos = { description: inputtedDescription, deadline: inputtedDeadline };
    
    newList.tasks.push(additionalTodos);
  });
});
//
//appending the listname in the middle column
$("ol#show-lists").append("<li><span class ='listnames'>" + "<h4>" + newListName + "</h4>" + "</span></li>" + "</br>");
  

//appending the listname and tasks to the third column
  $(".listnames").last().click(function(){
      newList.tasks.forEach(function(task) {  
        $("ul#fulllistdisplay").append("<li>" + "<h4>" + newListName + "</h4>" + 
                                        "<dd>" + task.description + "</dd>" + 
                                        "<dd>" + task.deadline + "</dd>" + "</li>");
        });
    });
});
});