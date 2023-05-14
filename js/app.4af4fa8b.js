(function(){"use strict";var t={7198:function(t,e,n){var o=n(9242),i=n(3396);function a(t,e,n,a,s,l){const d=(0,i.up)("Navbar"),r=(0,i.up)("Notes"),c=(0,i.up)("Modal"),u=(0,i.up)("AddButton");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(d,{onSearchValue:e[0]||(e[0]=t=>s.search=t),onChangeLang:l.changeLang},null,8,["onChangeLang"]),(0,i.Wm)(r,{notes:l.filterNotes,onDelNote:l.delNote,onChangeNote:l.changeNote},null,8,["notes","onDelNote","onChangeNote"]),(0,i.wy)((0,i.Wm)(c,{edit:s.edit,editNote:s.editNote,onCloseModal:l.closeModal,currentId:t.currentId,onAddNote:l.addNote,onEditedNote:l.editedNote},null,8,["edit","editNote","onCloseModal","currentId","onAddNote","onEditedNote"]),[[o.F8,s.modalOpen]]),(0,i.Wm)(u,{onOpenModal:l.openModal},null,8,["onOpenModal"])],64)}n(7658);var s=n(7139),l=n.p+"img/search.2c9e71ed.svg",d=n.p+"img/back.014b4ff1.svg",r=n.p+"img/close.1d4d165f.svg";const c={class:"header"},u={class:"header__notes"},h={class:"header__title"},_=(0,i._)("img",{src:l,alt:""},null,-1),g=[_],p={class:"header__form"},m=(0,i._)("img",{src:d,alt:""},null,-1),f=[m],b={class:"container"},w=["placeholder"],v=(0,i._)("img",{src:r,alt:""},null,-1),N=[v];function k(t,e,n,a,l,d){return(0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(o.uT,{name:"header__notes"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",u,[(0,i._)("button",{onClick:e[0]||(e[0]=(...t)=>d.switchLang&&d.switchLang(...t)),class:"header__lang"},(0,s.zw)(t.$i18n.locale),1),(0,i._)("h1",h,(0,s.zw)(t.$t("appbartitle")),1),(0,i._)("button",{class:"header__search",onClick:e[1]||(e[1]=t=>l.header=!1)},g)],512),[[o.F8,!0===l.header]])])),_:1}),(0,i.Wm)(o.uT,{name:"header__form"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",p,[(0,i._)("button",{class:"header__back",onClick:e[2]||(e[2]=t=>(l.header=!0,l.search=""))},f),(0,i._)("div",b,[(0,i.wy)((0,i._)("input",{type:"text",class:"header__inpput",placeholder:t.$t("appbarsearch"),"onUpdate:modelValue":e[3]||(e[3]=t=>l.search=t)},null,8,w),[[o.nr,l.search]])]),(0,i._)("button",{class:"header__close",onClick:e[4]||(e[4]=t=>l.search="")},N)],512),[[o.F8,!1===l.header]])])),_:1})])}var C={data(){return{header:!0,search:""}},watch:{search(t){this.$emit("searchValue",t)}},methods:{switchLang(){"ru"==this.$i18n.locale?this.$i18n.locale="uz":this.$i18n.locale="ru",localStorage.lang=this.$i18n.locale}}},O=n(89);const y=(0,O.Z)(C,[["render",k]]);var $=y,M=n.p+"img/list.4ed3d4be.svg",D=n.p+"img/grid.dbae4039.svg";const z={class:"notes"},S={class:"container"},I={class:"notes__top"},W={class:"notes__title"},L={key:0,src:M,alt:""},j={key:1,src:D,alt:""};function x(t,e,n,o,a,l){const d=(0,i.up)("NoteItem");return(0,i.wg)(),(0,i.iD)("div",z,[(0,i._)("div",S,[(0,i._)("div",I,[(0,i._)("h2",W,(0,s.zw)(n.notes.length>0?t.$t("infobar"):t.$t("noinfobar")),1),(0,i._)("button",{class:"notes__btn",onClick:e[0]||(e[0]=t=>a.grid=!a.grid)},[a.grid?((0,i.wg)(),(0,i.iD)("img",L)):((0,i.wg)(),(0,i.iD)("img",j)),(0,i._)("span",null,(0,s.zw)(a.grid?t.$t("list"):t.$t("grid")),1)])]),(0,i._)("div",{class:(0,s.C_)(["notes__list",{active:!a.grid}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.notes,(e=>((0,i.wg)(),(0,i.j4)(d,{grid:a.grid,key:e.id,note:e,onDelNote:n=>t.$emit("delNote",e.id),onChangeNote:n=>t.$emit("changeNote",e.id)},null,8,["grid","note","onDelNote","onChangeNote"])))),128))],2)])])}var E=n.p+"img/edit.092f5b23.svg",T=n.p+"img/del.f04c87ff.svg";const Z={class:"notes__item"},A={class:"notes__item-title"},B={class:"notes__item-date"},V={class:"notes__item-text"},q={class:"notes__item-btns"},F=(0,i._)("img",{src:E,alt:""},null,-1),J=(0,i._)("img",{src:T,alt:""},null,-1);function H(t,e,n,o,a,l){return(0,i.wg)(),(0,i.iD)("div",Z,[(0,i._)("div",{class:(0,s.C_)(["notes__item-top",{between:!n.grid}])},[(0,i._)("h3",A,(0,s.zw)(n.note.title),1),(0,i._)("p",B,(0,s.zw)(n.note.date),1)],2),(0,i._)("p",V,(0,s.zw)(n.note.desc),1),(0,i._)("div",q,[(0,i._)("button",{class:"notes__item-btn edit",onClick:e[0]||(e[0]=e=>t.$emit("changeNote",n.note.id))},[F,(0,i._)("span",null,(0,s.zw)(t.$t("editbtn")),1)]),(0,i._)("button",{class:"notes__item-btn del",onClick:e[1]||(e[1]=e=>t.$emit("delNote",n.note.id))},[J,(0,i._)("span",null,(0,s.zw)(t.$t("deledit")),1)])])])}var R={props:{grid:Boolean,note:Object}};const U=(0,O.Z)(R,[["render",H]]);var P=U,Q={components:{NoteItem:P},props:{notes:{typeof:Array,required:!0}},data(){return{grid:!0}}};const Y=(0,O.Z)(Q,[["render",x]]);var G=Y;const K={class:"modal__title"},X={class:"modal__inputs"},tt=(0,i._)("span",null,"Title",-1),et=(0,i._)("span",null,"Content",-1),nt={class:"modal__btns"};function ot(t,e,n,a,l,d){return(0,i.wg)(),(0,i.j4)(o.uT,{name:"modal"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"modal",onClick:e[6]||(e[6]=(...t)=>d.closeModal&&d.closeModal(...t))},[(0,i._)("div",{class:"modal__block",onClick:e[5]||(e[5]=(0,o.iM)((()=>{}),["stop"]))},[(0,i._)("h2",K,(0,s.zw)(n.edit?t.$t("titleWindowedit"):t.$t("titleWindow")),1),(0,i._)("div",X,[(0,i._)("label",null,[tt,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>l.title=t)},null,512),[[o.nr,l.title]])]),(0,i._)("label",null,[et,(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>l.desc=t)},null,512),[[o.nr,l.desc]])])]),(0,i._)("div",nt,[(0,i._)("button",{class:"modal__btn cancel",onClick:e[2]||(e[2]=(...t)=>d.closeModal&&d.closeModal(...t))},(0,s.zw)(t.$t("closebtn")),1),n.edit?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"modal__btn add",onClick:e[4]||(e[4]=(...t)=>d.changeNote&&d.changeNote(...t))},(0,s.zw)(t.$t("editwindowbtn")),1)):((0,i.wg)(),(0,i.iD)("button",{key:0,class:"modal__btn add",onClick:e[3]||(e[3]=(...t)=>d.addNote&&d.addNote(...t))},(0,s.zw)(t.$t("addbtn")),1))])])])])),_:1})}var it=n(3029),at={props:{currentId:Number,edit:Boolean,editNote:Object},data(){return{id:this.currentId,title:"",desc:""}},methods:{closeModal(){this.$emit("closeModal",!1),this.title="",this.desc=""},addNote(){if(""!=this.title&&""!=this.desc){const t={id:(0,it.Z)(),title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("addNote",t),this.title="",this.desc=""}},changeNote(){if(""!=this.title&&""!=this.desc){const t={id:this.editNote.id,title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("editedNote",t),this.closeModal()}}}};const st=(0,O.Z)(at,[["render",ot]]);var lt=st;const dt=(0,i._)("img",{src:E,alt:""},null,-1),rt=[dt];function ct(t,e,n,o,a,s){return(0,i.wg)(),(0,i.iD)("button",{class:"add__btn",onClick:e[0]||(e[0]=e=>t.$emit("openModal"))},rt)}var ut={};const ht=(0,O.Z)(ut,[["render",ct]]);var _t=ht,gt={components:{Navbar:$,Notes:G,Modal:lt,AddButton:_t},computed:{filterNotes(){return this.search?this.notes.filter((t=>t.title.toLowerCase().includes(this.search.toLowerCase()))):this.notes}},data(){return{edit:!1,editNote:{},search:"",modalOpen:!1,notes:[]}},created(){this.getNotes()},methods:{openModal(){this.modalOpen=!0},closeModal(t){this.modalOpen=t,setTimeout((()=>{this.edit=!1}),500)},addNote(t){this.notes.push(t),this.modalOpen=!1},delNote(t){let e=this.notes.findIndex((e=>e.id==t));this.notes.splice(e,1)},getNotes(){let t=localStorage.notes;t&&(this.notes=JSON.parse(t),this.currentId=this.notes.length,this.currentId++)},changeNote(t){this.modalOpen=this.edit=!0;let e=this.notes.find((e=>e.id==t));this.editNote=e},editedNote(t){this.notes.forEach((e=>{e.id==t.id&&(e.title=t.title,e.desc=t.desc,e.date=t.date)}))},changeLang(t){this.lang=localStorage.lang=t}},watch:{notes:{handler(t){localStorage.notes=JSON.stringify(this.notes)},deep:!0}}};const pt=(0,O.Z)(gt,[["render",a]]);var mt=pt,ft=JSON.parse('{"appbartitle":"Eslatmalar","appbarsearch":"Qidirish...","infobar":"Barcha eslatmalar","noinfobar":"Eslatmalar yoq","list":"Ro\'yxat","grid":"Setka","titleWindow":"Eslatma qo\'shish","titleWindowedit":"Eslatma tahrirlash","editbtn":"O\'ZGARTIRISH","deledit":"O\'chirish","closebtn":"Bekor qilish","addbtn":"Qo\'shish","editwindowbtn":"O\'zgartirish"}'),bt=JSON.parse('{"appbartitle":"Заметки","appbarsearch":"Поиск...","infobar":"Все заметки","noinfobar":"Заметок нет","list":"Список","grid":"Сетка","titleWindow":"Добавить заметку","titleWindowedit":"Изменить заметку","editbtn":"РЕДАКТИРОВАТЬ","deledit":"Удалить","closebtn":"Отмена","addbtn":"Добавить","editwindowbtn":"Изменить"}');const wt={uz:ft,ru:bt};var vt=n(5658);const Nt=localStorage.lang,kt=(0,vt.o)({legacy:!0,locale:Nt||"ru",messages:wt});(0,o.ri)(mt).use(kt).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,a){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],a=t[c][2];for(var l=!0,d=0;d<o.length;d++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[d])}))?o.splice(d--,1):(l=!1,a<s&&(s=a));if(l){t.splice(c--,1);var r=i();void 0!==r&&(e=r)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[o,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/todo/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,a,s=o[0],l=o[1],d=o[2],r=0;if(s.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(d)var c=d(n)}for(e&&e(o);r<s.length;r++)a=s[r],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},o=self["webpackChunktodo"]=self["webpackChunktodo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7198)}));o=n.O(o)})();
//# sourceMappingURL=app.4af4fa8b.js.map