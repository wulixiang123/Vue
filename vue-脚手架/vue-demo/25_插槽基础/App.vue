<template>
  <div>
    <h3>App组件</h3>
    <!-- <Child>
        <template v-slot:default>
        <template #default>
            <div>我是默认插槽</div>
            <div>我是默认插槽</div>
        </template>
    </Child> -->

    <!-- 简化版:
        <Child>
        <div>我是简化版默认插槽</div>
        <div>我是简化版默认插槽</div>
    </Child> -->

    

    <Child>
        <!-- <template v-slot:qwer> -->
        <template #qwer>
            <div>我是具名插槽</div>
            <div>我是具名插槽</div>
        </template>
    </Child>

    <Child>
        <!-- <template v-slot:abc="xyz">
            <div>作用域插槽:{{ xyz.userinfo.username }}</div>
            <div>作用域插槽:{{ xyz.userinfo.age }}</div>
            <div>作用域插槽:{{ xyz.intro }}</div>
        </template> -->

        <template v-slot:abc="{ userinfo,intro,msg }">
            <div>解构后的作用域插槽:{{ userinfo.username }}</div>
            <div>解构后的作用域插槽:{{ userinfo.age }}</div>
            <div>解构后的作用域插槽:{{ intro }}</div>
            <div>自定义作用域插槽:{{ msg }}</div>
        </template>
    </Child>

    <!-- <Child2 v-slot:default="{userinfo,intro}">
        <div>{{ userinfo.username }}</div>
        <div>{{ userinfo.age }}</div>
        <div>{{ intro }}</div>
    </Child2> -->

    <!-- <Child2 v-slot="{userinfo,intro}">
        <div>{{ userinfo.username }}</div>
        <div>{{ userinfo.age }}</div>
        <div>{{ intro }}</div>
    </Child2> -->

    <Child2 #default="{userinfo,intro}">
        <div>终极写法:{{ userinfo.username }}</div>
        <div>终极写法:{{ userinfo.age }}</div>
        <div>终极写法:{{ intro }}</div>
    </Child2>
  </div>
</template>

<script>
import Child from '@/components/Child.vue'
import Child2 from '@/components/Child2.vue'
export default {
name:'App',
components:{ Child,Child2 }
}
</script>

<style>

</style>