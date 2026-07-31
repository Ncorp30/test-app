var tasks = [];

function addTask(){

    var task = document.getElementById("task").value;

    if(task==""){
        alert("Empty");
    }

    tasks.push(task);

    document.getElementById("list").innerHTML +=
        "<li>"+task+"</li>";

    console.log("Tasks:",tasks);

}
