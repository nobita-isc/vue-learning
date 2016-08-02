Vue.component('tasks', {
	template: '#tasks-template',

	props: ['list'],

	computed: {
		remaining: function() {
			return this.list.filter(this.inProgress).length;
		}
	},

	methods: {
		isCompleted: function(task) {
			return task.completed;
		},

		inProgress: function(task) {
			return ! task.completed;
		},

		deleteTask: function(task) {
			this.list.$remove(task);
		},

		clearCompletedTasks: function() {
			this.list = this.list.filter(this.inProgress);
		}
	}
});
new Vue({
	el: '#app',

	data: {
		tasks: [
			{body: 'Go to the store', completed: false},
			{body: 'Go to the bank', completed: false},
			{body: 'Go for shopping', completed: true}
		]
	},
});