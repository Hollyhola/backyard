<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opended router>
            <el-menu-item index="readme">
                <i class="el-icon-setting"></i>自述
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu">表格</i></template>
                <el-menu-item index="basetable">基础表格</el-menu-item>
                <el-menu-item index="basetable">基础表格</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
</script>
<style>

</style>