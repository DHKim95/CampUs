<template>
  <div class="total-feed-box">
    <!-- 피드 게시물 첨부 사진이 한 개일때 -->
    <div>
      <i class="bi bi-x-circle fs-4" @click="cancelUploadImage"></i>
    </div>
    <div
      class="feed-picture-box d-flex justify-content-center align-items-center"
      v-if="this.imageinfo.ImageList.length == 1"
    >
      <div class="feed-picture pt-4">
        <img
          :src="`${imageinfo.ImageList[0]}`"
          class="d-block w-100 h-100"
          alt="..."
        />
      </div>
    </div>
    <!-- 두개이상일 때 -->
    <!-- 피드 게시물 첨부 사진이 두장 이상 일때 -->
    <div
      class="feed-picture-box d-flex justify-content-center align-items-center"
      v-if="this.imageinfo.ImageList.length == 2"
    >
      <div class="feed-picture pt-4">
        <div
          :id="feedid"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <div class="carousel-indicators">
            <!-- 밑 반복을 줄이기 위해서 썼으나 밑에 숫자를 문법으로 나타내는 법 모름
            v-for="indicator in feed.imgurl.length"
            :key="indicator.key" -->
            <button
              type="button"
              @click="carouselidadd(imageinfo.ImageList)"
              :data-bs-target="feedlink"
              data-bs-slide-to="0"
              class="active sm"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              @click="carouselidadd(imageinfo.ImageList)"
              :data-bs-target="feedlink"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                :src="`${imageinfo.ImageList[0]}`"
                class="d-block w-100 h-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                :src="`${imageinfo.ImageList[1]}`"
                class="d-block w-100 h-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            @click="carouselidadd(imageinfo.ImageList)"
            :data-bs-target="feedlink"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            @click="carouselidadd(imageinfo.ImageList)"
            :data-bs-target="feedlink"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <!-- 세장일 때 -->
    <div
      class="feed-picture-box d-flex justify-content-center align-items-center"
      v-if="this.imageinfo.ImageList.length == 3"
    >
      <div class="feed-picture pt-4">
        <div
          :id="feedid"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <div class="carousel-indicators">
            <!-- 밑 반복을 줄이기 위해서 썼으나 밑에 숫자를 문법으로 나타내는 법 모름
            v-for="indicator in feed.imgurl.length"
            :key="indicator.key" -->
            <button
              type="button"
              @click="carouselidadd(imageinfo.ImageList)"
              :data-bs-target="feedlink"
              data-bs-slide-to="0"
              class="active sm"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              @click="carouselidadd(imageinfo.ImageList)"
              :data-bs-target="feedlink"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              @click="carouselidadd(imageinfo.ImageList)"
              :data-bs-target="feedlink"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                :src="`${imageinfo.ImageList[0]}`"
                class="d-block w-100 h-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                :src="`${imageinfo.ImageList[1]}`"
                class="d-block w-100 h-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                :src="`${imageinfo.ImageList[2]}`"
                class="d-block w-100 h-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            @click="carouselidadd(imageinfo.ImageList)"
            :data-bs-target="feedlink"
            data-bs-slide="prev"
            style="z-index: 100"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
          </button>
          <button
            class="carousel-control-next"
            @click="carouselidadd(imageinfo.ImageList)"
            :data-bs-target="feedlink"
            data-bs-slide="next"
            style="z-index: 100"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "FeedCreateCarousel",
  props: {
    // feeds: Object,
    ImageList: Object,
  },
  data() {
    return {
      imageinfo: [],
      feedid: "",
      feedlink: "",
    };
  },
  methods: {
    carouselidadd: function (imageinfo) {
      // for (let i; 0 < this.imageinfo.length; i++){
      // console.log(nums);
      console.log(imageinfo);
      this.feedid = "feed";
      this.feedlink = "#" + this.feedid;
      // console.logf(this.imageinfo);
      // console.log(;
    },
    cancelUploadImage() {
      // console.log('안녕');
      // console.log(this.$refs["image"]);
      // console.log(this.image);
      // console.log(this.ImageList);

      // this.clearImage();
      this.imageinfo.ImageList = [];
      // this.imageinfo.ImageList.splice(this.feedid, 1); // this.image = null;
      // this.ImageList = null;
    },
  },

  created: function () {
    this.imageinfo = this.ImageList;
    // console.log("첫째",this.imageinfo[0]);
    // console.log(this.imageinfo.length);

    // console.log(this.imageinfo);
  },
  // computed: {
  //   ...mapState(["feeds"]),
  // },
};
</script>

<style scoped>
/* .total-feed-box { */
/* } */
.feed-picture-box {
  /* padding: 10px; */
  /* height: 100%; */
  /* min-height: 400px; */
  max-height: 600px;
  border: 1px solid #dbdbdb;
}

.feed-picture {
  /* width: 100%; */
  /* height: 100%; */
  margin: auto;

  /* height: 500px; */
  /* min-height: 400 px; */
  /* max-height: 400 px; */
}
.bi-x-circle {
  position: absolute;
  z-index: 1000;
  right: 2%;
}
.carousel-item {
  /* width: 100%; */
  min-width: 350px;
  height: 350px;
  /* position: center; */
}
/* .carousel-control-prev{
width: 100%;
  height:100%;

}
.carousel-control-next{
  width: 100%;
  height:100%;
} */
</style>
