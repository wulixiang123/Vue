(function () {

    let MyPlugin = {}
    window.MyPlugin = MyPlugin;

    MyPlugin.install = function (Vue, options) {
        console.log('options -> ', options)
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
          // 逻辑...
          console.log('myGlobalMethod')
        }
      
        // 2. 添加全局资源
        Vue.directive('my-directive', {
          bind (el, binding, vnode, oldVnode) {
            // 逻辑...
            console.log('插件的自定义指令')
          }
        })
      
        // 3. 注入组件选项
        // Vue.mixin({
        //   created: function () {
        //     // 逻辑...
        //   }
        // })
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
          // 逻辑...
          console.log('$myMethod')
        }
    }

})()