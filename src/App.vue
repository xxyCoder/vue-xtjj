<template>
	<div>
		<header class="home-header">
			<h1 class="home-image">
				<a href="#">
					<img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
						alt="稀土掘金" />
				</a>
			</h1>
			<div class="home-router-wrap">
				<router-link class="home-router" to="/home">首页</router-link>
				<router-link class="home-router" to="/pins">沸点</router-link>
				<router-link class="home-router" to="/course">课程</router-link>
				<router-link class="home-router" to="/live">直播</router-link>
				<router-link class="home-router" to="/events">活动</router-link>
				<router-link class="home-router" to="/challenge">竞赛</router-link>
				<router-link class="home-router" to="/goods">商城</router-link>
			</div>
		</header>
		<div class="show">
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.home-header {
	display: flex;
	height: 90px;

	.home-image {
		position: relative;

		img {
			position: relative;
			height: 30px;
			width: 160px;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.home-router-wrap {
		display: flex;
		text-align: center;
		align-items: center;

		.home-router {
			font-size: 16px;
			margin-left: 15px;
			display: inline-block;
			text-decoration: none;
			color: #000;
			text-align: center;
		}

		.router-link-active {
			color: #1e80ff
		}
	}
}
</style>