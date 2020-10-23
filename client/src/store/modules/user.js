
import api from "../../api/api"
export default {
  state:{
    userid:"",
    friendList:[],
    friendApply:[]
  },
  mutations:{
    SET_USER_ID(state,userid){
      state.userid = userid
    },
    SET_FRIEND_LIST(state,list){
      state.friendList = list
    },
    SET_FRIEND_APPLY(state,list){
      state.friendApply = list
    }
  },
  action:{
    queryAccount(){
      
    }
  }
}