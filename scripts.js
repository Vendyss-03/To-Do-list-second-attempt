$(".add").on("click", () => {
    addTodo = $("input").val(); //input value
   
    $("ul").append(`<li><span class="todo-text">${addTodo}</span><span> 
    <i id="check" class="fa fa-check-square-o"></i><i id="delete" class="fa fa-trash-o"</i></span></li>`); // adds the value in the list
    
    $("input").val(""); // deletes value from input
});

$("input").keypress(function(event){
    if(event.which === 13){  // 13 is a code key press event for "enter"
      // grabbing new todo text from input
      let addTodo = $("input").val();
      $("ul").append(`<li><span class="todo-text">${addTodo}</span><span> 
      <i id="check" class="fa fa-check-square-o"></i><i id="delete" class="fa fa-trash-o"</i></span></li>`); // adds the value in the list
  
      $("input").val(""); // deletes value from input
    }
  });

$("ul").on("click", "li .todo-text", function(){
    $(this).toggleClass("scratched");
});

$("ul").on("click", ".fa-check-square-o", function(){
    $(this).parent().parent().toggleClass("scratched");
    $(this).toggleClass("limegreen");
});

$("ul").on("click", ".fa-trash-o", function(){
    $(this).parent().parent().remove();
});