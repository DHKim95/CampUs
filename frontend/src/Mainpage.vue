<template>
  <Navbar class="CampusNavbar" id="TotalNavbar"></Navbar>

  <body>
    <div>
      <img class="brandlogo" src="@/assets/images/logo1.png" alt="" /><a
        href="#"
      ></a>
    </div>
    <div class="box" style="width: 100vw; height: 100vh">
      <img class="box-image" src="@/assets/images/campinmountain.jpg" alt="" />
      <div class="overlay d-flex flex-column">
        <div class="overlay-title">
          <!-- 타이틀은 이미지로 만들어서 붙여야 할 듯 배민보고 -->
          <div
            class="MainTitle d-flex flex-column justify-content-center align-items-center"
            
          >
            <img class="brandSlogan" src="@/assets/images/slogan2.png" alt="" />
            <a class="btn btn-sm" href="#" v-if="loginCheck === null">
              <div
                class="CreateAccountButton"
                style="max-width: 100%; height: auto"
                @click="moveToSignup"
                
              >
                계정 만들기
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="b-example-divider"></div>

    <Maincarousel
      v-if="mainlist.length != 0"
      :mainlist="mainlist"
      style="margin-top: 50px"
    />
  </body>
</template>

<script>
import Maincarousel from "@/components/mateparty/Maincarousel.vue";
import axios from "axios";
import Navbar from "@/components/common/Navbar.vue";

// import { useStore } from "vuex";
import { ref } from "vue";
import { useStore } from "vuex";
import {useRouter} from 'vue-router'

const SERVER_URL = process.env.VUE_APP_SERVER_URL;

// import Navbar from "@/components/common/Navbar.vue";

export default {
  name: "Mainpage",
  components: {
    Maincarousel,
    // MainNavbar,
    Navbar,
  },

  setup() {
    const router= useRouter()
    const store = useStore();
    const loginCheck = store.state.myNum
    //메이트 리스트
    const viewFunc = (data) => {
      // console.log(data)
      store.dispatch("viewMate", data);
    };
    axios({
      methods: "get",
      url: `${SERVER_URL}/mate`,
    })
      .then((res) => {
        // console.log(res.data.list)
        viewFunc(res.data.list);
  
      })

      .catch((err) => {
        console.log(err);
      });

    // 메이트 데이터(5개)
    const mainlist = ref("");
    axios({
      method: "get",
      url: `${SERVER_URL}/mate/main`,
    })
      .then((res) => {
        console.log(res.data.list);
        mainlist.value = res.data.list;
      })
      .catch((err) => {
        console.log(err);
      });

    // 캠핑장 데이터
    axios({
      method: "get",
      url: `${SERVER_URL}/camp`,
      params: {
        limit: 2906,
        offset: 0,
      },
    })
      .then((res) => {
        // console.log(res);
        store.dispatch("campList", res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
    axios({
      method: "get",
      url: `${SERVER_URL}/sns`,
      params: {
        // limit: 2906,
        // offset: 0,
      },
    })
      .then((res) => {
        // console.log(res);
        store.dispatch("feedList", res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });

    const moveToSignup = () => {
      router.push({name:'Signup'})
    }
    return {
      mainlist,
      moveToSignup,
      loginCheck,
      viewFunc,
    };
  },
};
</script>

<style scoped>
@media (min-width: 768px) {
  #TotalNavbar {
    /* background: transparent; */
    /* visibility: hidden; */
    /* color: transparent; */
    background: transparent;

    position: absolute;
    z-index: 10000;
    width: 100%;
    /* height:50px; */
  }
  .CampusNavbar {
    /* visibility: hidden;
    background: transparent;
    position: absolute; */
  }

  .MainTitle {
    /* position: absolute; */

    margin-bottom: 100px;
  }

  .Newmodal {
    display: none;
  }
  .btn {
    margin-bottom: 20px;
  }
  .brandlogo {
    display: none;
    /* position: absolute;
    top: 15px;
    left: 15px;
    width: 54px;
    height: 45px;
    z-index: 20; */
  }
}

.brandSlogan {
  max-width: 80%;
  height: "auto";
  margin-bottom: 30px;

  /* max-width: 600px; */
  /* max-height: 500px; */
}
p {
  line-height: 6px;
}
.box {
  position: relative;
}
.box-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  /* display: flex;
  height : 100vh;
  justify-content: center;
  align-items: center; */
  width: 50%;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  color: white;
  font-size: 50px;
}

.btn {
  color: #fff;
  background: linear-gradient(135deg, #ec5008, #dd12a0);
  font-family: "Comfortaa";
  font-size: 22px;
  font-weight: 700;
  text-transform: lowercase;
  padding: 10px 20px;
  border: none;
  border-radius: 45px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}
.btn:hover {
  color: #fff;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  animation: rotate 0.7s ease-in-out both;
}
.btn:before,
.btn:after {
  content: "";
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
.btn:hover:after {
  opacity: 0.15;
}
.btn:hover:before {
  transform: translate3d(50%, 0, 0) scale(0.9);
}
.btn:hover:after {
  transform: translate(50%, 0) scale(1.1);
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-3deg);
  }
  75% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
/* .Navbar { */
/* background: transparent;
    position: absolute;
    z-index: 10000;
    width: 100%; */
/* display: hidden; */
/* } */

@media (max-width: 768px) {
  .CampusNavbar {
    display: none;
    position: absolute;
    top: 0px;
    visibility: hidden;
    /* background: transparent;

    z-index: 10000;
    width: 100%; */
  }

  .brandlogo {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 54px;
    height: 45px;
    z-index: 20;
    cursor: pointer;
  }
  .brandSlogan {
    position: absolute;
    bottom: 90%;
    min-width: 330px;
    /* width: 100%; */
  }
  .Navlogos {
    display: block;
  }
  .CreateAccountButton {
    font-size: 14px;
  }
}

.filterbox {
  overflow: hidden;
}
/* .b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 0.5em 1.5em rgb(0 0 0 / 10%), inset 0 0.125em 0.5em rgb(0 0 0 / 15%);
} */
</style>
