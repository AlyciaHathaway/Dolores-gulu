<template>
	<div class="wrapper" :class="{error}">
		<input :value="value" :disabled="disabled" :readonly="readonly" type="text"
		       @change="$emit('change', $event)"
		       @input="$emit('input', $event)"
		       @focus="$emit('focus', $event)"
		       @blur="$emit('blur', $event)"
		>
		<template v-if="error">
			<icon class="icon-error" name="error"></icon>
			<span class="error-message">{{error}}</span>
		</template>
		
	</div>
</template>

<script>
	import Icon from './icon'
	export default {
		name: 'GuluInput',
		components: {
			Icon
		},
		props: {
			value: {
				type: String
			},
			disabled: {
				type: Boolean,
				default: false
			},
			readonly: {
				type: Boolean,
				default: false
			},
			error: {
				type: String
			}
		}
	}
</script>

<style lang="scss" scoped>
	$height: 32px;
	$border-color: #999;
	$border-color-hover: #666;
	$border-radius: 4px;
	$font-size: 12px;
	$box-shadow-color: rgba(0, 0, 0, 0.5);
	$red: #F1453D;
	.wrapper {
		display: inline-flex;
		align-items: center;
		font-size: $font-size;
		> :not(:last-child) {
			margin-right: .5em;
		}
		> input {
			height: $height;
			padding: 0 8px;
			border: 1px solid $border-color;
			border-radius: $border-radius;
			font-size: inherit;
			&:hover {
				border-color: $border-color-hover;
			}
			&:focus {
				box-shadow: inset 0 1px 3px 0 $box-shadow-color;
				outline: none;
			}
			&[disabled], &[readonly] {
				border-color: #aaa;
				color: #aaa;
				cursor: not-allowed;
			}
		}
		&.error {
			> input {
				border-color: $red;
			}
		}
		.icon-error {
			fill: $red;
		}
		.error-message {
			color: $red;
		}
	}
</style>