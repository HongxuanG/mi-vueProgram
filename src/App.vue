<template>
	<div id="app">
		<iheader v-if="showH"></iheader>
		<router-view></router-view>
		<ifooter v-if="showF"></ifooter>
	</div>
</template>

<script>
import iheader from "./views/header";
import ifooter from "./views/footer";
import {mapState} from "vuex";
export default {
	data(){
		return{

		}
	},
	computed:{
		...mapState({
			showF:state=>state.showF,
			showH:state=>state.showH,
		})
	},
	components:{
		iheader,
		
		ifooter
	},
	created(){
		
	}
}
</script>

<style lang="scss">

</style>
