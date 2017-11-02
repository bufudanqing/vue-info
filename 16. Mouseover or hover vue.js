
参考：
1.https://stackoverflow.com/questions/30911933/mouseover-or-hover-vue-js

<div @mouseover="upHere = true" @mouseleave="upHere = false" >
    <h2> Something Something </h2>
    <some-component v-show="upHere"></some-component>
</div>


data : {
    upHere : false
}


=====================================
HTML

<div v-if="active">
    <h2>Hello World!</h2>
 </div>

 <div v-on:mouseover="active = !active">
    <h1>Hover me!</h1>
 </div>
 
 
 JS

new Vue({
  el: 'body',
  data: {
    active: false
  }
})





==============================
 
 <div id="demo">
        <div v-show="active">Show</div>
        <div v-on="mouseover: mouseOver">Hover over me!</div>
    </div>

var demo = new Vue({
    el: '#demo',
    data: {
        active: false
    },
    methods: {
        mouseOver: function(){
            this.active = !this.active;   
        }
    }
});
