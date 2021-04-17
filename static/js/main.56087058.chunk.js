(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1T9w-",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3Xs3L","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__1-4yT"}},12:function(e,t,a){e.exports={ButtonDiv:"Button_ButtonDiv__28TYG",Button:"Button_Button__2bH3Z"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2cKaM",Modal:"Modal_Modal__AIzS4"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1Wo4i"}},26:function(e,t,a){e.exports={Loader:"Loader_Loader__18B3E"}},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),l=a(14),s=a(4),i=a(5),u=a(7),m=a(6),h=a(8),d=a.n(h),g=a(0),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.onInput=function(t){var a=t.target.value;e.setState({query:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:d.a.Searchbar,children:Object(g.jsxs)("form",{className:d.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(g.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:d.a.SearchFormInput,value:this.state.query,onChange:this.onInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),b=a(11),j=a.n(b),y=function(e){var t=e.src,a=e.alt,n=e.modalSrc,r=e.onClickImg;return Object(g.jsx)("li",{className:j.a.ImageGalleryItem,children:Object(g.jsx)("img",{src:t,alt:a,className:j.a.ImageGalleryItemImage,onClick:function(){r(n)}})})},f=a(23),I=a.n(f),_=function(e){var t=e.images,a=e.onClickImg;return Object(g.jsx)("ul",{className:I.a.ImageGallery,children:t.map((function(e){return Object(g.jsx)(y,{onClickImg:a,src:e.webformatURL,alt:e.tags,modalSrc:e.largeImageURL},e.id)}))})},O=a(12),S=a.n(O),v=function(e){var t=e.onClick;return window.scrollTo({top:document.documentElement.offsetHeight,behavior:"smooth"}),Object(g.jsx)("div",{className:S.a.ButtonDiv,children:Object(g.jsx)("button",{onClick:t,className:S.a.Button,type:"button",children:"Load more"})})},x=a(24),k=a.n(x),B=function(e){var t=e.searchQuery,a=e.page;return k.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=").concat("20446942-67f6e7c7c658c080defdaf824","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},w=a(25),C=a.n(w),L=a(26),G=a.n(L),M=function(){return Object(g.jsx)("div",{className:G.a.Loader,children:Object(g.jsx)(C.a,{type:"ThreeDots",color:"#3f51b5",height:100,width:100})})},F=a(13),N=a.n(F),D=document.getElementById("modal-root"),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleCloseModal=function(t){console.log(t),t.target===t.currentTarget&&e.props.onClick()},e.handleKeydown=function(t){"Escape"===t.code&&e.props.onClick()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:N.a.Overlay,onKeyPress:this.handleCloseModal,onClick:this.handleCloseModal,children:Object(g.jsx)("div",{className:N.a.Modal,children:Object(g.jsx)("img",{src:this.props.src,alt:""})})}),D)}}]),a}(n.Component),Q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,searchQuery:"",isLoading:!1,modalUrl:"",error:null},e.openModal=function(t){e.setState({modalUrl:t})},e.closeModal=function(){e.setState({modalUrl:""})},e.onSubmit=function(t){e.setState({searchQuery:t,page:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,a={page:t.page,searchQuery:t.searchQuery};e.setState({isLoading:!0}),B(a).then((function(t){return e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1})}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.modalUrl,r=t.length>0&&!a;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p,{onSubmit:this.onSubmit}),Object(g.jsx)(_,{images:t,onClickImg:this.openModal}),a&&Object(g.jsx)(M,{}),r&&Object(g.jsx)(v,{onClick:this.fetchImages}),n&&Object(g.jsx)(E,{src:n,onClick:this.closeModal})]})}}]),a}(n.Component);a(70),a(71);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(Q,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__2AWi6",SearchForm:"SearchBar_SearchForm__3REem",SearchFormButton:"SearchBar_SearchFormButton__1AVDb",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__169YP",SearchFormInput:"SearchBar_SearchFormInput__3dQBT"}}},[[72,1,2]]]);
//# sourceMappingURL=main.56087058.chunk.js.map