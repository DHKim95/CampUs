<template>
  <div>
    <button class="btn-danger" @click="deleteAccount">
      정말 떠나시나요...?
    </button>
    <button>Close</button>
  </div>
</template>

<script>
import axios from "axios";

const SERVER_URL = process.env.VUE_APP_SERVER_URL;


export default {
  name: "Modal",
  props: {
    myEmail: {
      type: String,
    },
  },
  method: {
    deleteAccount: function () {
      console.log(1);
      console.log("여기", this.myEmail);
      axios
        .delete(`${SERVER_URL}/user/${this.myEmail}`)
        .then(() => {
          alert("함께할 시간을 기다리겠습니다.");
          this.$router.push({ name: "Mainpage" });
        })
        .catch(() => {
          alert("잠시 후 다시 시도해주세요.");
        });
    },
  },
  created: function () {
    console.log("ㅋㅋ", this.myEmail);
  },
};
</script>

<style></style>
