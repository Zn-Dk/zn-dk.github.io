"use strict";(self["webpackChunkvue_blog"]=self["webpackChunkvue_blog"]||[]).push([[913],{5462:function(t,e,a){a.r(e),a.d(e,{default:function(){return j}});var r=function(){var t=this,e=t._self._c;return e("div",[e("mHeader"),e("transition",{attrs:{"enter-active-class":"animate__animated animate__slideInRight animate__faster",appear:"",mode:"out-in"}},[e("router-view",{staticClass:"blogm-main"})],1),e("mTabBar"),e("mDialog")],1)},n=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"blogm-header"},[e(t.headType,{tag:"component",attrs:{title:t.title,icon:t.actualIcon,button:t.actualButton,btnHandler:t.actualBtnHandler}})],1)},o=[],i=function(){var t=this,e=t._self._c;return e("van-nav-bar",{attrs:{title:t.title,"right-text":t.button,"left-arrow":""},on:{"click-left":function(e){return t.$router.back()},"click-right":t.onClickRight},scopedSlots:t._u([{key:"right",fn:function(){return[t.button?e("van-button",{attrs:{type:"default",icon:t.icon}},[t._v(t._s(t.button))]):t._e()]},proxy:!0}])})},l=[],u={name:"BaseNavBar",props:{title:{type:String},icon:{type:String},button:{type:String},btnHandler:{type:String}},data(){return{}},methods:{onClickRight(){this.$bus.$emit(this.btnHandler)}}},h=u,c=a(1001),m=(0,c.Z)(h,i,l,!1,null,null,null),d=m.exports,b=function(){var t=this,e=t._self._c;return e("van-search",{attrs:{shape:"round","show-action":"",placeholder:"搜索文章"},on:{search:t.onSearch},scopedSlots:t._u([{key:"action",fn:function(){return[e("span",{on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},p=[],f={name:"BaseSearchBar",data(){return{value:""}},mounted(){},methods:{onSearch(){this.$bus.$emit("header-search",this.value),this.value=""}}},g=f,v=(0,c.Z)(g,b,p,!1,null,null,null),_=v.exports,w={name:"VueBlogMHeader",components:{NavBar:d,SearchBar:_},data(){return{headType:"NavBar",title:"标题",icon:"",button:"",btnHandler:""}},created(){this.resetHeader(this.$route)},mounted(){this.$bus.$off("switch-user-header",this.switchUserHeader),this.$bus.$on("switch-user-header",this.switchUserHeader)},computed:{isLogin(){return this.$store.state.token},isUser(){return"mUser"===this.$route.name&&this.isLogin},actualIcon(){return this.isUser?"":this.icon},actualButton(){return this.isUser?"":this.button},actualBtnHandler(){return this.isUser?"":this.btnHandler}},watch:{$route(t,e){if(t.name===e.name)return!1;this.resetHeader(t),"mUser"===t.name&&"register"===t.query.state&&(this.button="登录")}},methods:{switchUserHeader(){let t=!("注册"!==this.button);this.button=t?"登录":"注册",this.$router.push({name:"mUser",query:{state:t?"register":"login"}})},resetHeader(t){this.icon="",this.button="",this.btnHandler="",Object.assign(this,t.meta.headCfg)}}},y=w,$=(0,c.Z)(y,s,o,!1,null,null,null),B=$.exports,H=function(){var t=this,e=t._self._c;return e("div",[e("van-tabbar",{attrs:{route:""}},[e("van-tabbar-item",{attrs:{replace:"",to:{name:"mArticleList"},icon:"newspaper-o"}},[t._v("主页")]),e("van-tabbar-item",{attrs:{replace:"",to:{name:"mColumn"},icon:"points"}},[t._v("分类")]),e("van-tabbar-item",{attrs:{replace:"",to:{name:"mUser"},icon:"friends-o"}},[t._v("我的")])],1)],1)},k=[],x={name:"VueBlogMTabbar",data(){return{}},mounted(){},methods:{}},U=x,C=(0,c.Z)(U,H,k,!1,null,null,null),S=C.exports,Z=function(){var t=this,e=t._self._c;return e("van-dialog",{attrs:{title:t.title,"show-cancel-button":"","before-close":t.beforeClose,"confirm-button-text":"提交","confirm-button-color":"#1A73E8"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("BaseForm",{ref:"form",attrs:{formType:t.type}}),"login"===t.type?e("p",{staticClass:"blogm-dialog--route",on:{click:t.goRegister}},[t._v(" 还没有账号?点击跳转到注册 ")]):t._e()],1)},D=[],T=(a(8146),a(8848)),F=a(2557),R=a(5593),V={name:"VueBlogBaseDialog",components:{BaseForm:R.Z},data(){return{show:!1,type:null}},mounted(){this.$bus.$on("show-dialog",this.showDialog)},beforeDestroy(){this.$bus.$off("show-dialog",this.showDialog)},computed:{title(){return F.Z?.[this.type]?.title||"默认对话框"}},methods:{showDialog(t){this.type=t,this.show=!0},beforeClose(t,e){"confirm"!==t?e():this.submitForm(e)},async submitForm(t){const e=this.$refs["form"],a=e.$refs["vanForm"];try{await a.validate(),await this.$http({type:this.type,data:e.form}),this.$bus.$emit("show-art-comment"),t()}catch(r){(0,T.Z)({message:"请检查您的输入内容",position:top}),e.form={},a.resetValidation(),t(!1)}},goRegister(){this.$router.push({name:"mUser",query:{state:"register"}}),this.show=!1}}},q=V,I=(0,c.Z)(q,Z,D,!1,null,null,null),L=I.exports,M={name:"VueBlogMHome",components:{mTabBar:S,mHeader:B,mDialog:L},data(){return{}},mounted(){},methods:{}},N=M,A=(0,c.Z)(N,r,n,!1,null,null,null),j=A.exports}}]);
//# sourceMappingURL=m-home~article_list.350cc696.js.map