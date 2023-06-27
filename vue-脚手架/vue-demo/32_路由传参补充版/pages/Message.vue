<template>
  <!-- Tab panes -->
  <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="Message">
                <ul class="list-group">
                    <li class="list-group-item" v-for="item in list" :key="item.id">
                        <router-link :to=" '/home/message/msgdetail/' + item.id + '?name=' + item.name ">{{ item.name }}</router-link>
                    </li>
                </ul>
                <div class="alert alert-success" role="alert">
                    <router-view></router-view>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:'Message',
    data(){
        return{
            list:[
                {id:1,name:'悟空'},
                {id:2,name:'八戒'},
                {id:3,name:'沙僧'}
            ]
        }
    }
}
</script>

<style scoped>

</style>