define("app", ["jquery", "tasks"], function ($, tasks){
    function _registerEventHandlers() {
        $("#new-task-button").on("click", tasks.add);
        $("#delete-all-button").on("click", tasks.clear);
        $("#save-button").on("click", tasks.save);
        $("#cancel-button").on("click", tasks.cancel);
        $("#task-list").on("click", ".delete-button", tasks.remove);
    }

    return {
        init: function() {
            _registerEventHandlers();
            tasks.render();
        }
    }
});