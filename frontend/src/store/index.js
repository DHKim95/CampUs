import { createStore } from "vuex";

// import axios from "axios";
import createPersistedState from "vuex-persistedstate";

// const SERVER_URL = `http://i6e102.p.ssafy.io:8080`;
const SERVER_URL = "http://localhost:8080";
import axios from "axios";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    userEmail: null,
    equipLists: [],
    mateList: [],
    searchWord: "",
    searchResult: [],
    uploadimages: "",
    // feeddetailnum: 0,
    detailFeed: "",
    isLogin: localStorage.getItem("jwt") ? true : false,
    nickname: null,
    feedList: [],
    myNum: "",
    myProfileimageurl: "",
    userList: {},
    campList: [],
  },

  mutations: {
    CREATE_EQUIP: function (state, equipItem) {
      state.equipLists.push(equipItem);
    },
    DELETE_EQUIP: function (state, equipItem) {
      const index = state.equipLists.indexOf(equipItem);
      state.equipLists.splice(index, 1);
    },
    TODETAIL: function (state, detailFeed) {
      state.detailFeed = detailFeed;
    },
    FEEDLIST: function (state, feedList) {
      state.feedList = feedList;
    },

    //mate
    VIEW_MATE(state, data) {
      state.mateList = data;
    },

    //camp
    CAMP_LIST(state, data) {
      state.campList = data;
    },

    USER_LIST(state, data) {
      console.log(2);
      state.userList = data;
      console.log(state.userList);
    },
    MY_NUM(state, data) {
      // console.log(3)
      state.myNum = data;
    },
    USER_EMAIL(state, data) {
      state.userEmail = data;
    },

    // 로그인
    LOGIN: function (state) {
      state.token = localStorage.getItem("jwt");
      state.isLogin = true;
      const token = state.token;
      axios({
        method: "get",
        url: `${SERVER_URL}/user/${state.user}`,
        headers: { Authorization: `JWT ${token}` },
      }).then((res) => {
        console.log(res);
        // state.myProfileimageurl = res.data.image;
        // state.nickname = res.data.nickname;
        // state.myNum = res.data.userNo;
        // state.userList = res.data
      });
    },

    LOGOUT: function (state) {
      state.myProfileimageurl = null;
      state.token = null;
      state.nickname = null;
      state.myNum = null;
      state.isLogin = false;
      state.user = "";
    },
    SEARCH_DATA: function (state, data) {
      state.searchWord = data;
    },
    SEARCHRESULT: function (state, data) {
      state.searchResult = data;
    },
    // SCROLLEDFEEDLIST: function (state, data) {
    //   state.scrolledFeedList
    // }
  },
  actions: {
    createEquip: function ({ commit }, equipItem) {
      commit("CREATE_EQUIP", equipItem);
    },
    deleteEquip: function ({ commit }, equipItem) {
      commit("DELETE_EQUIP", equipItem);
    },
    // 로그인
    login: function ({ commit }) {
      commit("LOGIN");
    },
    logout: function ({ commit }) {
      commit("LOGOUT");
    },
    toDetail: function ({ commit }, detailFeed) {
      commit("TODETAIL", detailFeed);
    },
    feedList: function ({ commit }, feedList) {
      commit("FEEDLIST", feedList);
    },
    userList({ commit }, data) {
      commit("USER_LIST", data);
    },
    myNum({ commit }, data) {
      commit("MY_NUM", data);
    },
    userEmail({ commit }, data) {
      commit("USER_EMAIL", data);
    },
    //mate
    viewMate({ commit }, data) {
      commit("VIEW_MATE", data);
    },
    //camp
    campList({ commit }, data) {
      commit("CAMP_LIST", data);
    },

    searchData: function (context, data) {
      //여기서 axios요청 보내서 피드들 담아서 쓰던가
      context.commit("SEARCH_DATA", data);
    },
    searchResult: function (context, data) {
      context.commit("SEARCHRESULT", data);
    },
    // ScrolledFeedList: function (context, data) {
    //   context.commit("SCROLLEDFEEDLIST",data)

    // }_
  },
  getters: {
    config: function (state) {
      return {
        Authorization: `JWT ${state.token}`,
      };
    },
    getUserId: function (state) {
      return state.userEmail;
    },
    searchResult: function (state) {
      return state.searchResult;
    },
  },

  modules: {},
});
