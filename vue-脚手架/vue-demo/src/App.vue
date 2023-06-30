<template>
    <div>
        <my-html></my-html>
        <my-class></my-class>
        <my-event></my-event>
        <my-for></my-for>
        <my-model></my-model>
        <my-child></my-child>
        <my-directive></my-directive>
        <my-event></my-event>
        <my-filter></my-filter>
        <my-parent></my-parent>
        <my-ref></my-ref>
        <my-show></my-show>
        <my-slot></my-slot>
    </div>
</template>

<script>
import MyChild from './components/myChild.vue'
import MyClass from './components/myClass.vue'
import MyDirective from './components/myDirective.vue'
import MyEvent from './components/myEvent.vue'
import MyFilter from './components/myFilter.vue'
import MyFor from './components/myFor.vue'
// import myHtml from '@/components/myHtml.vue'
import myHtml from './components/myHtml.vue'
import MyModel from './components/myModel.vue'
import MyParent from './components/myParent.vue'
import MyRef from './components/myRef.vue'
import MyShow from './components/myShow.vue'
import MySlot from './components/mySlot.vue'
export default {
  components: { myHtml, MyClass, MyEvent, MyFor, MyModel, MyChild, MyDirective, MyFilter, MyParent, MyRef, MyShow, MySlot,  },
  name:'App',
}
</script>

<style>

</style>