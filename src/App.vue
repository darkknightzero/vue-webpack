<template>
    <div class="app-container">
    <!-- 顶部 Header区域 -->
    <mt-header fixed title="ONE FOR ALL"></mt-header>

    
    
    <!-- 中间 路由 区域 -->
    <router-view></router-view>
    
    
    <!-- 底部 Tabber区域 -->
    <nav class="mui-bar mui-bar-tab">
		<router-link class="mui-tab-item mui-active" to="/home">				
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</router-link>
		<router-link class="mui-tab-item" to="/message">
			<span class="mui-icon mui-icon-email">
			<span class="mui-badge">9</span></span>
			<span class="mui-tab-label">消息</span>
		</router-link>
		<router-link class="mui-tab-item" to="/collection">
			<span class="mui-icon mui-icon-map"></span>
			<span class="mui-tab-label">收藏</span>
		</router-link>
		<router-link class="mui-tab-item" to="/search">
			<span class="mui-icon mui-icon-search"></span>
			<span class="mui-tab-label">搜索</span>
		</router-link>
	</nav>





    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.app-container{
    padding-top: 40px;
}
</style>