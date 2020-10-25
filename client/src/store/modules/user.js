
import api from "../../api/api"
export default {
  state:{
    userid:"",
    userinfo:{

    },
    friendApply:[],
    friendList:[]
  },
  mutations:{
    SET_USER_ID(state,userid){
      state.userid = userid
    },
    SET_FRIEND_APPLY(state,list){
      state.friendApply = list
    },
    SET_USER_INFO(state,info){
      state.userinfo = info
    },
    SET_FRIEND_LIST(state,list){
      state.friendList = list
    }
  },
  actions:{
    queryFriendApply({state,commit}){
      api.queryFriendApply({userid:state.userid}).then(res=>{
        commit('SET_FRIEND_APPLY',res.list)
      })
    },
    getUserInfo({commit,dispatch},userid){
      api.getUserInfo({userid:userid}).then(res=>{
        commit('SET_USER_INFO',res)
        commit('SET_USER_ID',userid)
        dispatch('queryFriendApply')
        dispatch('queryFriend')
      })
    },
    queryFriend({commit,state}){
      api.queryFriend({userid:state.userid}).then(res=>{
        commit('SET_FRIEND_LIST',res.list)
      })
    }
  }
}