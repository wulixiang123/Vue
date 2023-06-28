<template></template>

<script>
export default {
name:'App',
mounted(){
    function deepClone(obj) {
        if(obj.typeof !=='object' || obj === null){
            return obj
        }
        let res = obj instanceof Array ? []:{}
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                res[key] = deepClone(obj[key])
            }
        }
        return res
    }

let a = [1, 2, 3, 4, 5]

console.log(deepClone(a))
a.push(11)
console.log(a);
console.log(deepClone(a));







    // console.log(console);
    console.dir(Object);
    console.dir(Function);
    // console.dir(Boolean);
    // console.dir(Number);
    // console.dir(String);
    // console.dir(Symbol);
}}
</script>

<style>
</style>