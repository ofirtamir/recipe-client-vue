(()=>{"use strict";var e={519:(e,t,r)=>{r.d(t,{Z:()=>p});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"footer-icons"},[e.checkIfViewed()?t("b-icon",{staticClass:"viewed-icon",attrs:{icon:"eye"}}):e._e(),e.recipe.vegetarian?t("router-link",{attrs:{to:{name:"recipe",params:{recipeId:e.recipe.recipeid}}}},[t("img",{staticClass:"vegi",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Vegetarian-mark.svg/1200px-Vegetarian-mark.svg.png"}})]):e._e(),e.recipe.vegan?t("span",[t("img",{staticClass:"vegan",attrs:{src:"https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/vegan-icon.png"}})]):e._e(),e.recipe.glutenFree?t("span",[t("img",{staticClass:"glutenFree",attrs:{src:"https://cdn-icons-png.flaticon.com/512/4337/4337722.png"}})]):e._e(),t("label",{staticStyle:{"background-color":"transparent"}},[t("input",{staticClass:"custom-checkbox",attrs:{type:"checkbox"},on:{change:e.toggleFavorite}}),e.favorable?t("img",{staticClass:"favorite-icon",attrs:{src:e.favoriteImage,alt:"Favorite"}}):e._e()])],1)},n=[],i=r(124),s=r(8534);r(6699),r(5684),r(8862),r(7658),r(7327),r(1539);const o={name:"icons",data:function(){return{image_load:!0,isFavorite:!1,isViewed:!1}},props:{recipe:{required:!0},favorable:{type:Boolean,default:!0}},computed:{favoriteImage:function(){return this.isFavorite?r(5775):r(1028)}},created:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isViewed=e.checkIfViewed(),t.next=3,e.checkIfFavorite();case 3:e.isFavorite=t.sent;case 4:case"end":return t.stop()}}),t)})))()},watch:{recipe:{handler:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isViewed=this.checkIfViewed(),e.next=3,this.checkIfFavorite();case 3:this.isFavorite=e.sent;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),deep:!0}},methods:{checkIfViewed:function(){var e=JSON.parse(localStorage.getItem("viewedRecipes"))||[];return e.includes(this.recipe.recipeid)},checkIfFavorite:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){var r;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=JSON.parse(sessionStorage.getItem("favoriteRecipes"))||[],0!==r.length){t.next=7;break}return t.next=4,e.axios.get(e.$root.store.server_domain+"/users/favoritesID");case 4:r=t.sent,r=r.data,sessionStorage.setItem("favoriteRecipes",JSON.stringify(r));case 7:return t.abrupt("return",r.includes(e.recipe.recipeid));case 8:case"end":return t.stop()}}),t)})))()},toggleFavorite:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){var r,a,n;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isFavorite=!e.isFavorite,r=e.isFavorite?e.addFavorite:e.deleteFavorite,t.prev=2,a=e.$root.store.username,t.next=6,r(a,e.recipe.recipeid);case 6:n=t.sent,200===n.status?e.showToast(n.data,"Success","success"):e.handleError(n),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),e.handleError(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()},showToast:function(e,t,r){this.$bvToast.toast(e,{title:t,variant:r,solid:!0})},handleError:function(e){console.error("Error updating favorite status:",e),this.showToast("Error updating favorite status","Error","danger")},addFavorite:function(e,t){var r=this;return(0,s.Z)((0,i.Z)().mark((function a(){var n,s;return(0,i.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=JSON.parse(sessionStorage.getItem("favoriteRecipes"))||[],n.includes(t)||(n.push(t),sessionStorage.setItem("favoriteRecipes",JSON.stringify(n))),a.next=4,r.axios.post(r.$root.store.server_domain+"/users/favorites",{username:e,recipeId:t});case 4:return s=a.sent,a.abrupt("return",s);case 6:case"end":return a.stop()}}),a)})))()},deleteFavorite:function(e,t){var r=this;return(0,s.Z)((0,i.Z)().mark((function a(){var n,s;return(0,i.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=JSON.parse(sessionStorage.getItem("favoriteRecipes"))||[],n.includes(t)&&(n=n.filter((function(e){return e!==t})),sessionStorage.setItem("favoriteRecipes",JSON.stringify(n))),a.next=4,r.axios["delete"](r.$root.store.server_domain+"/users/favorites",{data:{username:e,recipeId:t}});case 4:return s=a.sent,a.abrupt("return",s);case 6:case"end":return a.stop()}}),a)})))()}}},c=o;var u=r(1001),l=(0,u.Z)(c,a,n,!1,null,"50eb5612",null);const p=l.exports},3972:(e,t,r)=>{r.d(t,{Z:()=>d});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[e._v("Login")]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin.apply(null,arguments)}}},[t("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[t("b-form-input",{attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),t("b-form-invalid-feedback",[e._v(" Username is required ")])],1),t("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[t("b-form-input",{attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),t("b-form-invalid-feedback",[e._v(" Password is required ")])],1),t("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"},on:{click:e.Login}},[e._v("Login")]),t("div",{staticClass:"mt-2"},[e._v(" Do not have an account yet? "),t("router-link",{attrs:{to:"registerpage"}},[e._v(" Register in here")])],1)],1),e.form.submitError?t("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},n=[],i=r(124),s=r(8534),o=(r(7658),r(379));const c={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:o.C1},password:{required:o.C1}}},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,a=t.$error;return r?!a:null},Login:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(e.$root.store.server_domain+"/Login",{username:e.form.username,password:e.form.password});case 3:t.sent,e.$root.store.login(e.form.username),e.$router.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.form.submitError=t.t0.response.data.message;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},u=c;var l=r(1001),p=(0,l.Z)(u,a,n,!1,null,"92d8a6fc",null);const d=p.exports},79:(e,t,r)=>{r.d(t,{Z:()=>h});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("b-container",[t("h3",[e._t("default")],2),t("b-row",{staticClass:"custom-row",attrs:{cols:e.columns}},e._l(e.recipes,(function(r){return t("b-col",{key:r.id,staticClass:"custom-col"},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:r,myrecipe:e.myrecipe,family:e.family,favorable:e.favorable}})],1)})),1)],1)],1)},n=[],i=r(124),s=r(8534),o=(r(9653),r(8862),function(){var e=this,t=e._self._c;return t("div",{staticClass:"card-container"},[t("b-card",{staticClass:"mb-1 card",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id,myrecipe:e.myrecipe,family:e.family,recipe:e.recipe}},"img-alt":"Image","img-top":"",tag:"article"},scopedSlots:e._u([{key:"header",fn:function(){return[t("b-link",{attrs:{to:{name:"recipe",params:{recipeId:e.recipe.recipeid,myrecipe:e.myrecipe,family:e.family,recipe:e.recipe,favorable:e.favorable}}}},[t("button",{staticClass:"text-dark invisible-button",on:{click:e.markAsViewed}},[e._v(e._s(e.recipe.title))])])]},proxy:!0},{key:"footer",fn:function(){return[t("icons",{attrs:{favorable:e.favorable,recipe:e.recipe}})]},proxy:!0}])},[t("b-link",{attrs:{to:{name:"recipe",params:{recipeId:e.recipe.recipeid,myrecipe:e.myrecipe,family:e.family,recipe:e.recipe}}}},[t("b-card-img",{staticClass:"card-image",attrs:{src:e.recipe.image,alt:"Image",top:""},on:{click:e.markAsViewed}})],1),t("b-list-group",{attrs:{flush:""}},[t("b-list-group-item",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),t("b-list-group-item",[e._v(e._s(e.recipe.aggregateLikes)+" likes")])],1)],1)],1)}),c=[],u=(r(6699),r(5684),r(7658),r(519));const l={name:"RecipePreviewCard",components:{icons:u.Z},props:{recipe:{type:Object,required:!0},myrecipe:{type:Boolean,required:!1,default:!1},family:{type:Boolean,required:!1,default:!1},favorable:{type:Boolean,default:!0}},methods:{markAsViewed:function(){var e=JSON.parse(localStorage.getItem("viewedRecipes"))||[];e.includes(this.recipe.recipeid)||(e.push(this.recipe.recipeid),localStorage.setItem("viewedRecipes",JSON.stringify(e)),this.isViewed=!0)}}},p=l;var d=r(1001),m=(0,d.Z)(p,o,c,!1,null,"92d2cd20",null);const f=m.exports,v={name:"RecipePreviewList",components:{RecipePreview:f},props:{title:{type:String,required:!0},amount:{type:Number,required:!0},columns:{type:Number,required:!1,default:3},recipes:{default:null},myrecipe:{type:Boolean,required:!1,default:!1},family:{type:Boolean,required:!1,default:!1},id:{type:Number,required:!1,default:0},favorable:{type:Boolean,default:!0}},data:function(){return{DisplayColumns:0,offset:0}},mounted:function(){this.recipes||this.updateRecipes()},methods:{randomize:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){var r;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/random",{params:{number:e.amount}});case 3:r=t.sent,e.recipes=r.data,sessionStorage.setItem(e.id+"recipes",JSON.stringify(e.recipes)),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error("Error fetching recipes:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},updateRecipes:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){var r,a;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=sessionStorage.getItem(e.id+"recipes"),!r){t.next=4;break}return e.recipes=JSON.parse(r),t.abrupt("return");case 4:return t.prev=4,t.next=7,e.axios.get(e.$root.store.server_domain+"/recipes/random",{params:{number:e.amount}});case 7:a=t.sent,e.recipes=a.data,sessionStorage.setItem(e.id+"recipes",JSON.stringify(e.recipes)),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](4),console.error("Error fetching recipes:",t.t0);case 15:case"end":return t.stop()}}),t,null,[[4,12]])})))()}}},g=v;var b=(0,d.Z)(g,a,n,!1,null,"1e82e795",null);const h=b.exports},1861:(e,t,r)=>{r(6992),r(8674),r(9601),r(7727),r(9554),r(1539),r(4747);var a=r(144),n=r(3017),i=r(1110),s=r(3022),o=r(2466),c=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Navbar"),t("router-view")],1)},u=[],l=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"nav"}},[t("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[t("b-navbar-brand",{attrs:{to:{name:"MainPage"}}},[e._v("Cristina")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",{attrs:{to:{name:"MainPage"}}},[e._v("Recipes")]),t("b-nav-item",{attrs:{to:{name:"SearchPage"}}},[e._v("Search")]),t("b-nav-item",{attrs:{to:{name:"AboutPage"}}},[e._v("About")]),e.$root.store.username?t("b-nav-item-dropdown",{attrs:{text:"Personal"}},[t("b-dropdown-item",{attrs:{to:{name:"FavoritesPage"}}},[e._v("My Favorite Recipes")]),t("b-dropdown-item",{attrs:{to:{name:"MyRecipesPage"}}},[e._v("My Recipes")]),t("b-dropdown-item",{attrs:{to:{name:"FamilyRecipesPage"}}},[e._v("Family Recipes")])],1):e._e(),e.$root.store.username?t("b-nav-item",{on:{click:e.toggleModal}},[e._v("Add New Recipe")]):e._e()],1),e.$root.store.username?t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[t("em",[e._v(e._s(e.$root.store.username))])]},proxy:!0}])},[t("b-dropdown-item",{on:{click:e.Logout}},[e._v("Logout")])],1)],1):t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-text",[e._v("Hello Guest")]),t("b-nav-item",{attrs:{to:{name:"RegisterPage"}}},[e._v("Register")]),t("b-nav-item",{attrs:{to:{name:"LoginPage"}}},[e._v("Login")])],1)],1)],1),t("Modal",{ref:"addRecipeModal"})],1)},p=[],d=(r(7658),function(){var e=this,t=e._self._c;return t("div",[t("b-modal",{attrs:{id:"new-recipe-modal",title:"Add New Recipe"},on:{hide:e.resetForm},scopedSlots:e._u([{key:"modal-footer",fn:function(r){var a=r.cancel;return[t("b-button",{attrs:{variant:"danger"},on:{click:function(e){return a()}}},[e._v("Cancel")]),t("b-button",{attrs:{variant:"secondary"},on:{click:e.resetForm}},[e._v("Clear Form")]),t("b-button",{attrs:{variant:"success"},on:{click:e.submitForm}},[e._v("OK")])]}}]),model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[t("b-form-group",{attrs:{label:"Recipe Title:","label-for":"recipe-title"}},[t("b-form-input",{attrs:{id:"recipe-title",required:"",placeholder:"Enter recipe title"},model:{value:e.recipe.title,callback:function(t){e.$set(e.recipe,"title",t)},expression:"recipe.title"}})],1),t("b-form-group",{attrs:{label:"Image URL:","label-for":"recipe-image"}},[t("b-form-input",{attrs:{id:"recipe-image",required:"",placeholder:"Enter image URL"},model:{value:e.recipe.image,callback:function(t){e.$set(e.recipe,"image",t)},expression:"recipe.image"}})],1),t("b-form-group",{attrs:{label:"Ready in Minutes:","label-for":"recipe-readyinminutes"}},[t("b-form-input",{attrs:{id:"recipe-readyinminutes",type:"number",required:"",placeholder:"Enter ready time in minutes"},model:{value:e.recipe.readyInMinutes,callback:function(t){e.$set(e.recipe,"readyInMinutes",t)},expression:"recipe.readyInMinutes"}})],1),t("b-form-group",{attrs:{label:"Servings:","label-for":"recipe-servings"}},[t("b-form-input",{attrs:{id:"recipe-servings",type:"number",required:"",placeholder:"Enter servings"},model:{value:e.recipe.servings,callback:function(t){e.$set(e.recipe,"servings",t)},expression:"recipe.servings"}})],1),t("b-form-checkbox",{model:{value:e.recipe.vegetarian,callback:function(t){e.$set(e.recipe,"vegetarian",t)},expression:"recipe.vegetarian"}},[e._v(" Is Vegetarian ")]),t("b-form-checkbox",{model:{value:e.recipe.vegan,callback:function(t){e.$set(e.recipe,"vegan",t)},expression:"recipe.vegan"}},[e._v(" Is Vegan ")]),t("b-form-checkbox",{model:{value:e.recipe.glutenFree,callback:function(t){e.$set(e.recipe,"glutenFree",t)},expression:"recipe.glutenFree"}},[e._v(" Is Gluten Free ")]),t("br"),t("b-form-group",{attrs:{label:"Summary:","label-for":"recipe-summary"}},[t("b-form-textarea",{attrs:{id:"recipe-summary",required:"",placeholder:"Enter summary",rows:"3"},model:{value:e.recipe.summary,callback:function(t){e.$set(e.recipe,"summary",t)},expression:"recipe.summary"}})],1),t("b-form-group",{attrs:{label:"Instructions:","label-for":"recipe-instructions"}},[t("b-form-textarea",{attrs:{id:"recipe-instructions",required:"",placeholder:"Enter instructions",rows:"3"},model:{value:e.recipe.instructions,callback:function(t){e.$set(e.recipe,"instructions",t)},expression:"recipe.instructions"}})],1),t("b-form-group",{attrs:{label:"Ingredients:","label-for":"recipe-extendedIngredients"}},[t("b-form-textarea",{attrs:{id:"recipe-extendedIngredients",required:"",placeholder:"Enter ingredients",rows:"3"},model:{value:e.recipe.extendedIngredients,callback:function(t){e.$set(e.recipe,"extendedIngredients",t)},expression:"recipe.extendedIngredients"}})],1)],1)],1)],1)}),m=[],f=r(124),v=r(8534),g=r(9669),b=r.n(g);const h={name:"Modal",data:function(){return{showModal:!1,recipe:{username:"",image:"",title:"",readyInMinutes:"",aggregateLikes:0,servings:"",vegetarian:!1,vegan:!1,glutenFree:!1,summary:"",instructions:"",extendedIngredients:""}}},methods:{toggleModal:function(){this.recipe.username=this.$root.store.username||"defaultUsername",this.showModal=!this.showModal},resetForm:function(){this.recipe={username:"",image:"",title:"",readyInMinutes:"",aggregateLikes:0,servings:"",vegetarian:!1,vegan:!1,glutenFree:!1,summary:"",instructions:"",extendedIngredients:""}},submitForm:function(){var e=this;return(0,v.Z)((0,f.Z)().mark((function t(){var r;return(0,f.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.recipe.title){t.next=3;break}return e.$bvToast.toast("Please enter the Recipe Title",{title:"Missing Recipe Title",variant:"warning",solid:!0}),t.abrupt("return");case 3:if(e.recipe.image){t.next=6;break}return e.$bvToast.toast("Please enter the Image URL",{title:"Missing Image URL",variant:"warning",solid:!0}),t.abrupt("return");case 6:if(e.recipe.readyInMinutes){t.next=9;break}return e.$bvToast.toast("Please enter the Ready In Minutes",{title:"Missing Ready In Minutes",variant:"warning",solid:!0}),t.abrupt("return");case 9:if(e.recipe.servings){t.next=12;break}return e.$bvToast.toast("Please enter the Servings",{title:"Missing Servings",variant:"warning",solid:!0}),t.abrupt("return");case 12:if(e.recipe.summary){t.next=15;break}return e.$bvToast.toast("Please enter the Summary",{title:"Missing Summary",variant:"warning",solid:!0}),t.abrupt("return");case 15:if(e.recipe.instructions){t.next=18;break}return e.$bvToast.toast("Please enter the Instructions",{title:"Missing Instructions",variant:"warning",solid:!0}),t.abrupt("return");case 18:if(e.recipe.extendedIngredients){t.next=21;break}return e.$bvToast.toast("Please enter the Ingredients",{title:"Missing Ingredients",variant:"warning",solid:!0}),t.abrupt("return");case 21:return t.prev=21,t.next=24,b().post(e.$root.store.server_domain+"/users/addmyRecipe",e.recipe);case 24:r=t.sent,201===r.status?(e.$bvToast.toast("Recipe added successfully",{title:"Success",variant:"success",solid:!0}),e.toggleModal(),e.resetForm()):e.$bvToast.toast("Error adding recipe",{title:r.data.message||"Error",variant:"danger",solid:!0}),t.next=32;break;case 28:t.prev=28,t.t0=t["catch"](21),console.error("Error:",t.t0),e.$bvToast.toast("Error adding recipe",{title:"Error",variant:"danger",solid:!0});case 32:case"end":return t.stop()}}),t,null,[[21,28]])})))()}}},y=h;var w=r(1001),k=(0,w.Z)(y,d,m,!1,null,null,null);const x=k.exports,_={name:"Navbar",components:{Modal:x},methods:{toggleModal:function(){this.$refs.addRecipeModal.toggleModal()},Logout:function(){var e=this;this.$root.store.logout(),this.$root.toast("Logout","User logged out successfully","success"),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))}}},$=_;var I=(0,w.Z)($,l,p,!1,null,"37161f30",null);const P=I.exports,R={name:"App",components:{Navbar:P}},S=R;var C=(0,w.Z)(S,c,u,!1,null,null,null);const F=C.exports;var Z=r(1939),M=r.n(Z),E=(r(8783),r(3948),function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t("div",{staticClass:"container"},[t("div",{staticClass:"left"},[t("RecipePreviewList",{ref:"listOfRecipes",staticClass:"RandomRecipes center",attrs:{columns:2,amount:4,title:"Explore these recipes",id:0,favorable:e.favorable}}),t("div",{staticClass:"generate-wrapper"},[t("b-button",{staticClass:"generate",attrs:{variant:"primary",block:""},on:{click:e.generateRandomRecipes}},[e._v("Generate More Recipes")])],1)],1),t("div",{staticClass:"right"},[e.$root.store.username?t("span",[t("RecipePreviewList",{staticClass:"RandomRecipes",attrs:{title:"Last Viewed Recipes",columns:2,amount:4,id:1,favorable:e.favorable}})],1):t("span",{staticClass:"login"},[t("div",{staticClass:"login"},[t("Login")],1)])])])])}),L=[],O=r(79),N=r(3972);const T={name:"MainPage",components:{RecipePreviewList:O.Z,Login:N.Z},methods:{generateRandomRecipes:function(){this.$refs.listOfRecipes.randomize()}},data:function(){return{favorable:!!this.$root.store.username}},watch:{"$root.store.username":function(e){this.favorable=!!e}}},q=T;var A=(0,w.Z)(q,E,L,!1,null,null,null);const V=A.exports;var j=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},B=[],U={},J=(0,w.Z)(U,j,B,!1,null,null,null);const D=J.exports;var G=[{path:"/",name:"MainPage",component:V},{path:"/RegisterPage",name:"RegisterPage",component:function(){return r.e(886).then(r.bind(r,6886))}},{path:"/LoginPage",name:"LoginPage",component:function(){return r.e(351).then(r.bind(r,6351))}},{path:"/AboutPage",name:"AboutPage",component:function(){return r.e(909).then(r.bind(r,5909))}},{path:"/SearchPage",name:"SearchPage",component:function(){return r.e(649).then(r.bind(r,7649))}},{path:"/RecipeViewPage/:recipeId",name:"recipe",component:function(){return r.e(587).then(r.bind(r,8587))}},{path:"/FavoritesPage",name:"FavoritesPage",component:function(){return r.e(393).then(r.bind(r,8393))}},{path:"/MyRecipesPage",name:"MyRecipesPage",component:function(){return r.e(104).then(r.bind(r,5104))}},{path:"/FamilyRecipesPage",name:"FamilyRecipesPage",component:function(){return r.e(983).then(r.bind(r,983))}},{path:"/recipePreparingPage",name:"recipePlanning",component:function(){return r.e(134).then(r.bind(r,2134))}},{path:"/mealPlanningPage",name:"mealPlanning",component:function(){return r.e(914).then(r.bind(r,7914))}},{path:"*",name:"notFound",component:D}];const H=G;var z=r(8345),K=r(8620),X=(r(7024),r(508)),Y=r(7563),Q=r(7419),W=r(1869),ee=r(295),te=r(3090),re=r(794),ae=r(4063),ne=r(8793),ie=r(7772);a["default"].use(n.X),a["default"].use(i.XG7),a["default"].component("BIcon",s.H),a["default"].component("BIconArrowUp",o.BNN),a["default"].component("BIconArrowDown",o.pfg),a["default"].use(z.ZP);var se=new z.ZP({routes:H});[X.E,Y.w6,Q.g,W.SY,ee.xL,te.u3,re.v5,ae.F,ne.m$,ie.A6].forEach((function(e){return a["default"].use(e)})),a["default"].use(K.ZP),b().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),b().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),a["default"].use(M(),b()),a["default"].config.productionTip=!1,b().defaults.withCredentials=!0;var oe={server_domain:"http://localhost:3000",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e},logout:function(){localStorage.clear(),sessionStorage.clear(),this.username=void 0}};new a["default"]({router:se,data:function(){return{store:oe}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:a,autoHideDelay:3e3})}},render:function(e){return e(F)}}).$mount("#app")},5775:(e,t,r)=>{e.exports=r.p+"img/favorite-icon.d9231439.png"},1028:(e,t,r)=>{e.exports=r.p+"img/not-favorite-icon.a9ce3dc5.png"}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,a,n,i)=>{if(!a){var s=1/0;for(l=0;l<e.length;l++){for(var[a,n,i]=e[l],o=!0,c=0;c<a.length;c++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](a[c])))?a.splice(c--,1):(o=!1,i<s&&(s=i));if(o){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[a,n,i]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{104:"fe524c8f",134:"bceb1027",351:"21de84ee",393:"2250f6c4",587:"fa0fb5fa",649:"944f5df4",886:"4a0fed24",909:"79a256f6",914:"735145b8",983:"9cda6efc"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{134:"f05af6fa",351:"93e01817",587:"a8c19689",886:"ded468cd",909:"348e37ff"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";r.l=(a,n,i,s)=>{if(e[a])e[a].push(n);else{var o,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var p=u[l];if(p.getAttribute("src")==a||p.getAttribute("data-webpack")==t+i){o=p;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",t+i),o.src=a),e[a]=[n];var d=(t,r)=>{o.onerror=o.onload=null,clearTimeout(m);var n=e[a];if(delete e[a],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(r))),t)return t(r)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,a,n)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var s=r=>{if(i.onerror=i.onload=null,"load"===r.type)a();else{var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=o,i.parentNode&&i.parentNode.removeChild(i),n(c)}};return i.onerror=i.onload=s,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=r[a],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===t))return n}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){n=s[a],i=n.getAttribute("data-href");if(i===e||i===t)return n}},a=a=>new Promise(((n,i)=>{var s=r.miniCssF(a),o=r.p+s;if(t(s,o))return n();e(a,o,null,n,i)})),n={143:0};r.f.miniCss=(e,t)=>{var r={134:1,351:1,587:1,886:1,909:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=a(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,a)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var i=new Promise(((r,a)=>n=e[t]=[r,a]));a.push(n[2]=i);var s=r.p+r.u(t),o=new Error,c=a=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",o.name="ChunkLoadError",o.type=i,o.request=s,n[1](o)}};r.l(s,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,a)=>{var n,i,[s,o,c]=a,u=0;if(s.some((t=>0!==e[t]))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(c)var l=c(r)}for(t&&t(a);u<s.length;u++)i=s[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},a=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=r.O(void 0,[998],(()=>r(1861)));a=r.O(a)})();
//# sourceMappingURL=app.7b40780c.js.map