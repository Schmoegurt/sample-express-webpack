<template>
	<div>
		<p class="f4 lh-copy measure dark-pink">Foo!</p>
		<p class="f4 lh-copy measure">{{ message }}</p>
	</div>
</template>

<script>
module.exports = {
	name: 'Foo',
	data: function() {
		return {
			message: ''
		};
	},
	created: function() {
		var self = this;
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "./api");
		xhr.onload = function() {
			self.message = JSON.parse(xhr.responseText);
			console.log(self.message);
		}
		xhr.send();
	}
};
</script>
