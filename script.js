//Check on specific todos by clicking..
$("ul").on("click","li",function(){                       //make a class in css
	if($(this).css("color") === "rgb(0, 0, 0)")           //.completed
	{                                                     //{color : grey
		$(this).css({                                     // text-decoration : line-through}
			color : "grey",
			textDecoration : "line-through"               //And then in js file write
		});                                               //$(this).toggleClass("completed"); //instead of all this if and else statements..
	}
	else
	{
		$(this).css({
			color : "black",
			textDecoration : "none"
		});
	}
});                                                       //Note: $("ul").on("click","li",function()){} because lis that may or may not have been on the page but inside a ul which was definitely on the page when it was loaded..(basically to add the eventlisteners to the newTodos that are added later on the page..)

//Click on X to delete a todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){//to remove(fadeOut) the parent element which contain the element being clicked..In this case a li..
		$(this).remove();//Remove the element from the HTML rather than just hiding it.
	});
	event.stopPropagation(); // stop from the applying the parent event listeners on the element..
});

$("input[type='text'").on("keypress",function(event)
{
	if(event.which === 13)
	{
		//grabbing the newTodo from the input
		var addTodo = $(this).val();
		//clearing the input for the next todo
		$(this).val("");
		//create a new li and append to the ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i> </span>"+addTodo+"</li>");
	}
});

//Adding the toggling effect on the "+"" button
$(".fa-plus").click(function()
{
	$("input[type='text'").fadeToggle();
});
