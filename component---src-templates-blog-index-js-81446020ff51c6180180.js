"use strict";(self.webpackChunkgatsby_simple_blog=self.webpackChunkgatsby_simple_blog||[]).push([[280],{701:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(1597),l=a(9175),o=a(5868),i=a(1939),s=a(2543),c=function(e){var t,a,c=e.slug,m=e.title,u=e.date,d=e.timeToRead,g=e.excerpt,p=e.tags,f=e.base;return g&&(t=n.createElement("p",{dangerouslySetInnerHTML:{__html:g}})),p&&(a=n.createElement(s.Z,{style:{margin:"0.5rem 0 -0.5rem -0.5rem"},tags:p,baseUrl:f+"tags"})),n.createElement("article",null,n.createElement("header",null,n.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:(0,l.qZ)(1),marginBottom:(0,l.qZ)(1/4)}},n.createElement(r.Link,{style:{boxShadow:"none"},to:c,rel:"bookmark"},m)),a,n.createElement("small",null,(0,i.p)(u)+" • "+(0,o.formatReadingTime)(d)),t))};c.defaultProps={title:null,excerpt:null,tags:null,base:""};var m=c},9010:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(1232),l=a(1597),o=a(8278),i=function(e){var t=e.description,a=e.meta,i=e.keywords,s=e.title,c=(0,l.useStaticQuery)("1522010811").site,m=(0,o.Jr)().lang,u=t||c.siteMetadata.description;return n.createElement(r.q,{htmlAttributes:{lang:m||c.siteMetadata.lang},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})};i.defaultProps={meta:[],keywords:[],description:""};var s=i},2543:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(5245),r=a(7294),l=a(5868),o=a(7174),i=["tags","baseUrl"],s=function(e){var t=e.tags,a=e.baseUrl,s=(0,n.Z)(e,i);return r.createElement("ul",Object.assign({className:"tag-ul"},s),t.map((function(e){return r.createElement("li",{key:e},r.createElement(o.Z,{text:e,url:a+"/"+(0,l.kebabCase)(e)}))})))};s.defaultProps={baseUrl:""};var c=s},7601:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(7294),r=a(8125),l=a(9278),o=a(9010),i=a(701),s=a(1597),c=a(8278),m=function(e){var t=e.currentPage,a=e.totalPageNumber,r=(0,c.Jr)().homeLink,l=1===t?n.createElement("span",{className:"disabled"},"«"):n.createElement(s.Link,{to:""+r+(t-1)},"«"),o=t===a?n.createElement("span",{className:"disabled"},"»"):n.createElement(s.Link,{to:""+r+(t+1)},"»");return n.createElement("div",{className:"pagination"},l,Array.from({length:a}).map((function(e,t){return t+1})).map((function(e){return e===t?n.createElement("span",{key:"pageNum-"+e,className:"active"},e):n.createElement(s.Link,{key:"pageNum-"+e,to:""+r+e},e)})),o)};m.defaultProps={currentPage:1,totalPageNumber:1};var u=m,d=a(1939),g=function(e){var t=e.pageContext,a=e.data,s=e.location,m=t.from,g=t.to,p=t.currentPage,f=t.numPages,b=a.site.siteMetadata.title,k=a.allMarkdownRemark.edges,E=(0,c.Jr)(),y=E.lang,w=E.homeLink;return n.createElement(l.Z,{location:s,title:b},n.createElement(o.Z,{title:(0,d.w)("tIndTitle"),keywords:(0,d.w)("taIndKeywords")}),n.createElement("aside",null,n.createElement(r.Z,null)),n.createElement("h3",null,(0,d.w)("tfIndCountPosts",{count:a.allMarkdownRemark.totalCount,from:m,to:g})),k.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.createElement(i.Z,{lang:y,base:w,key:t.fields.slug,slug:t.fields.slug,date:t.frontmatter.date,timeToRead:t.timeToRead,title:a,excerpt:t.frontmatter.description||t.excerpt,tags:t.frontmatter.tags})})),n.createElement(u,{currentPage:p,totalPageNumber:f}))};g.defaultProps={};var p=g}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-81446020ff51c6180180.js.map