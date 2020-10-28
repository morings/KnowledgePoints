<template>
  <div class="page" v-scroll>
    <div class="content"></div>
    <div class="content red"></div>
  </div>
</template>
<script>
export default {
  directives:{
    scroll:{
      inserted:function(el){
        el.setAttribute('class',el.getAttribute('class').concat(' zm-scroll'))
        //生成滚动条
        let scrollLine = document.createElement('div');//轨道
        scrollLine.setAttribute('class','zm-scroll-bar')
        let scrollBar = document.createElement('div');//滑块
        scrollBar.setAttribute('class','zm-scroll-bar-line')
        scrollLine.appendChild(scrollBar)
        el.appendChild(scrollLine)
        el.addEventListener('mousewheel',function(event){
          let maxScroll = el.scrollHeight - el.clientHeight//可滚动最大距离
          if(event.deltaY < 0){
            if(el.scrollTop){
              let curr = el.scrollTop - Math.abs(event.deltaY)
              el.scrollTop = curr < 0?0:curr
            }
          }else{
            if(el.scrollTop<maxScroll){
              let curr = el.scrollTop + Math.abs(event.deltaY);
              el.scrollTop = curr > maxScroll?maxScroll:curr
            }
          }  
          scrollLine.style.top = el.scrollTop + 'px'
          scrollBar.style.top = el.scrollTop/2 + 'px'
        })
        el.scrollTop = 0; 
      }
    }
  }
  
}
</script>
<style>
html,body,.page{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
}
.content{
  background-color: green;
  height:100%
}
.red{
  background-color: red;
}
.zm-scroll{
  overflow: hidden;
  position:relative
}
.zm-scroll-bar{
   position: absolute;
  z-index: 1;
  transition: opacity 0.5s ease 0s;
  border-radius: 6px;
  background:rgba(137,140,151,0.1);
  border: none;
  width: 6px;
  top: 0px;
  height:100%;
  right: 0px;
  opacity: 0;
}
.zm-scroll:hover .zm-scroll-bar{
  opacity: 1;
}
.zm-scroll-bar-line{
  cursor: pointer;
  position: absolute;
  margin: auto;
  user-select: none;
  border-radius: inherit;
  height: 50%;
  background: #d4d4d4;
  width: 6px;
  left: 0px;
  right: 0px;
}
</style>