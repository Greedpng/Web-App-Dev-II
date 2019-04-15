"use strict";
var tasklist = (function() {
    var tasks = [];
    var storage = getTaskStorage("tasks_18");
    return {
        load: function() {
            tasks = storage.retrieveTasks();
            return this;
        },
        save: function() {
            storage.storeTasks(tasks);
            return this;
        },
        sort: function() {
            tasks.sort( function(task1, task2) {
                if ( task1.dueDate < task2.dueDate ) { return -1; }
                else if ( task1.dueDate > task2.dueDate ) { return 1; }
                else { return 0; }
            });
            return this;
        },
        add: function(task) {
            tasks.push(task);
            return this;
        },
        delete: function(i) {
            this.sort();
            tasks.splice(i, 1);
            return this;
        },
        clear: function() {
            storage.clear();
            return this;
        },
        display: function(div) {
            this.sort();

            var html = "";
            for (var i in tasks) {
                html = html.concat("<p>");
                html = html.concat("<a href='#' title='", i, "'>Delete</a>");
                html = html.concat(tasks[i].toString());
                html = html.concat("</p>");
            }
            div.html(html);

            div.find("a").each(function() {
                $(this).on("click", function(evt){
                    tasklist.load().delete(this.title).save().display(div);
                    evt.preventDefault(); 
                    $("input:first").focus();
                });
            });
            return this;
        }
    };
    
});