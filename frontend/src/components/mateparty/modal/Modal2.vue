<template>


    <div id="checkboxgroup" class="filterbox">
     
      <div class="form-check filterbox1">
        <input :disabled="campCheck.length > 0 && !campCheck.includes('오토캠핑')"  class="form-check-input" v-model="campCheck" type="checkbox" value="오토캠핑" id="flexCheckDefault" name="check[]">
        <label class="form-check-label" for="flexCheckDefault">
          오토캠핑
        </label>
      </div>
      <div class="form-check filterbox1">
        <input  :disabled="campCheck.length > 0 && !campCheck.includes('글램핑') " class="form-check-input" v-model="campCheck" type="checkbox" value="글램핑" id="flexCheckChecked2" name="check[]" >
        <label class="form-check-label" for="flexCheckChecked2">
          글램핑
        </label>
      </div>
      <div class="form-check filterbox1">
        <input  :disabled="campCheck.length > 0 && !campCheck.includes('카라반')" class="form-check-input" v-model="campCheck" type="checkbox" value="카라반" id="flexCheckChecked3" name="check[]" >
        <label class="form-check-label" for="flexCheckChecked3">
          카라반
        </label>
      </div>
      <div id="test" class="form-check filterbox1">
        <input :disabled="campCheck.length > 0 && !campCheck.includes('차박')" class="form-check-input" v-model="campCheck" type="checkbox" value="차박" id="flexCheckChecked4" name="check[]" >
        <label class="form-check-label" for="flexCheckChecked4">
          차박
        </label>
      </div>
    </div>
   
    <!-- <div align="center">
        <div class="col-sm-3">
        <a data-bs-dismiss="modal" class="btn btn-lg" href="#" @click="$emit('camp-check',campCheck) ">
            <span>button</span>
        </a>
    </div>
</div> -->
</template>

<script >
import {ref,watch,} from 'vue'
import {useStore} from 'vuex'
export default {
  name : 'Modal2',
  emits : ['camp-check'],
  props : ['filterInit'],
  setup(props,{emit}) {
    const store = useStore()
    const campCheck = ref([])
    const mycheck = store.state.initData

    
    watch(
    () => campCheck,
    (state) => {
      emit('camp-check',state.value[0])
    },
    { deep: true }
    )

    watch(
      () => store.state.initData,
      () => {
        campCheck.value = []
        
      }
    )

  
    return {
      campCheck,
      mycheck,
 
     
    
    }
  },
  
}
</script>

<style scoped>
.checkbox-list{
    color: #fff;
    /* background: linear-gradient(#3a7bd5, #3a6073); */
    padding: 25px;
    border-radius: 10px;
}
.form-check{
    border-bottom: 1px dashed rgba(255,255,255,0.5);
    padding: 5px 5px 9px 5px;
    margin: 0 0 10px;
    display: block;
}
.form-check input[type=checkbox]{
    margin: 0;
    visibility: hidden;
    left: 1px;
    top: 1px;
}
.form-check label{
    color:rgba(20, 20, 20, 0.5);
    font-size: 20px;
    line-height: 26px;
    padding-left: 35px;
    margin: 0;
    display: block;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease 0s;
}
.form-check label:before,
.form-check label:after{
    content: "";
    width: 20px;
    height: 20px;
    border: 3px solid #818181;
    border-radius: 4px;
    position: absolute;
    top: 3px;
    left: 3px;
    transition: all 0.25s;
}
.form-check label:after{
    height: 10px;
    width: 16px;
    border-radius: 0 0 0 4px;
    border: 5px solid #7ac4e1;
    border-top: none;
    border-right: none;
    opacity: 0;
    transform: rotate(-45deg);
    top: 15px;
    left: 6px;
}
.form-check input[type=checkbox]:checked+label{ font-weight: 600; }
.form-check input[type=checkbox]:checked+label:before{
    opacity: 0;
    top: -10px;
}
.form-check input[type=checkbox]:checked+label:after{
    opacity: 1;
    top: 6px;
}
@media only screen and (max-width:767px){
    .checkbox{ margin: 0 0 20px; }
}
.btn{
    color: #fff;
    background: linear-gradient(135deg, #ffbb00, #3f300e);

    font-size: 22px;
    font-weight: 700;
    text-transform: lowercase;
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}
.btn:hover{
    color: #fff;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    animation: rotate 0.7s ease-in-out both;
}
.btn:before,
.btn:after{
    content: '';
    background: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    opacity: 0;
    transform: translate(100%, -25%) translate3d(0, 0, 0);
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    transition: all 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
}
.btn:hover:before,
.btn:hover:after{
    opacity: 0.15;
}
.btn:hover:before{ transform: translate3d(50%, 0, 0) scale(0.9); }
.btn:hover:after{ transform: translate(50%, 0) scale(1.1); }
@keyframes rotate{
    0%{ transform: rotate(0deg); }
    25%{ transform: rotate(3deg); }
    50%{ transform: rotate(-3deg); }
    75%{ transform: rotate(1deg); }
    100%{ transform: rotate(0deg); }
}
@media only screen and (max-width: 767px){
    .btn{ margin-bottom: 20px; }
}
</style>