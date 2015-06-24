define(["jquery", "text!templates/taskTemplate.html"], function($, taskTemplate){

    function renderTasks(tasks) {
        var elementArray = $.map(tasks, _renderTask);

        $("#task-list")
            .empty()
            .append(elementArray);
    }

    function renderNew() {
        var $taskList = $("#task-list");
        $taskList.prepend(_renderTask({}));
    }

    function _renderTask(task) {
        var $task = $(taskTemplate);
        if(task.complete) {
            $task.find(".complete").attr("checked", "checked");
        }
        $task.find(".description").val(task.description);
        return $task;
    }

    return {
        renderTasks: renderTasks,
        renderNew: renderNew
    }

});