new Vue({
	el: '#app',

	data: {
		tasks: [
			{body: 'Go to the store', completed: false},
			{body: 'Go to the bank', completed: false},
			{body: 'Go for shopping', completed: true}
		]
	},

	methods: {
		toggleCompletedFor: function(task) {
			task.completed = ! task.completed;
		}
	}

});