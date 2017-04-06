<template>
    <div class="header">
        <div class="logo">后台管理系统</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../assets/images/photo.jpg">
                    {{username}}
                </span> 
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'header',
        data() {
            return {
                name: 'yuyuhong'
            }
        },
        methods: {
            handleCommand(command) {
                if (command == 'loginout') {

                }
            }
        },
        computed: {
            username() {
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name
            }
        }
    }
</script>
<style>
    .header {
        /*position: relative;
        box-sizing: border-box;*/
        width: 100%;
        height: 70px;
        background-color: #1D8CE0;
        color: #fff;
        font-size: 22px;
        line-height: 70px;
    }
    
    .header .logo {
        float: left;
        width: 250px;
        text-align: center;
    }
    
    .header .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    
    .user-info .el-dropdown-link {
        position: relative;
        display: inline-block;
        cursor: pointer;
        vertical-align: middle;
        color: #fff;
        width: 50px;
        padding-left: 50px;
    }
    
    .user-info .user-logo {
        position: absolute;
        top: 15px;
        left: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>