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
		this.message = [1, 2, 3].map(n => n * 2);
	}
};
</script>
