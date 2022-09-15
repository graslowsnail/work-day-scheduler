var tasks = {};

var createTask = function (taskText, taskTime) {
    var taskLi = $("<li>");
    var taskSpan = $("<span>")
        .addClass("m-1")
        .text(taskTime);
    var taskP = $("<p>")
        .addClass("m-1")
        .text(taskText);

    taskLi.append(taskSpan, taskP);

    $("#list-" + taskLi).append(taskLi);
};

createTask();

