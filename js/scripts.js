$(document).ready(function() {
  $("form#new-todo").submit(function(event) {
  event.preventDefault();

	var newDescription = $("input#new-description").val();
	var newDeadline = $("input#new-deadline").val();

	var toDo = { description: newDescription, deadline: newDeadline };

	$("#show-todo").show();
     $(".todolist").append("<li>" + toDo.description + " " +
     						          "&nbsp; &nbsp&nbsp; &nbsp&nbsp; &nbsp<span class ='undone'>
                          Click here to mark this task as Done!</span>"  
     							         + "<h5>" + "Deadline:" + " " + toDo.deadline + "</h5>" + 
     	                    "</li>" + "</br>");

	$(".undone").click(function(){
		$(this).empty();
		$(this).append("<span class ='done'>Done!</span>");
    });

  });
});