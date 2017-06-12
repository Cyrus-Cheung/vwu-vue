<template>
    <el-menu default-active="2" theme="dark">
        <el-submenu index="article">
            <template slot="title">
                <i class="el-icon-message"></i>文章管理
            </template>
            <router-link to="/article/index">
                <el-menu-item index="article/index">文章列表</el-menu-item>
            </router-link>
            <router-link to="/article/new">
                <el-menu-item index="article/new">添加文章</el-menu-item>
            </router-link>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-message"></i>活动管理</template>
            <el-menu-item index="2-1">活动列表</el-menu-item>
            <el-menu-item index="2-2">添加活动</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">
                <i class="el-icon-message"></i>专栏管理</template>
            <el-menu-item index="3-1">专栏列表</el-menu-item>
            <el-menu-item index="3-2">添加专栏</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-message"></i>标签管理</template>
            <el-menu-item index="4-1">标签列表</el-menu-item>
            <el-menu-item index="4-2">添加标签</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
            <template slot="title">
                <i class="el-icon-message"></i>优选管理</template>
            <el-menu-item index="5-1">优选列表</el-menu-item>
            <el-menu-item index="5-2">添加优选</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
a {
    text-decoration: none;
}

.el-menu {
    min-height: 100%;
}
</style>
