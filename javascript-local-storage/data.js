/* exported todos */

var todos = [];
var myStorage = window.localStorage;
var previousTodosJSON = myStorage.getItem('javascript-local-storage');
if (previousTodosJSON != null) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  myStorage.setItem('javascript-local-storage', todosJSON);
});
