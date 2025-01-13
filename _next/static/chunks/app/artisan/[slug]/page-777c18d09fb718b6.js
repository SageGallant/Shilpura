(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{4295:(e,s,a)=>{"use strict";a.d(s,{A:()=>n});var r=a(5155),l=a(6874),t=a.n(l),o=a(1274),i=a(8088),c=a(5333);let n=e=>{let{id:s,title:a,price:l,origin:n,imageSrc:d,category:x,slug:m}=e,{addToWishlist:h,isInWishlist:b,removeFromWishlist:u}=(0,i._)(),{showToast:p}=(0,c.d)();return(0,r.jsxs)("div",{className:"group relative",children:[(0,r.jsx)(t(),{href:"/product/".concat(m),className:"block overflow-hidden",children:(0,r.jsxs)("div",{className:"aspect-[4/5] bg-osloGray/10 mb-4 overflow-hidden relative",children:[d?(0,r.jsx)(o.default,{src:d,alt:a,fill:!0,className:"object-cover transition-transform duration-500 group-hover:scale-105"}):(0,r.jsx)("div",{className:"w-full h-full bg-osloGray/20"}),(0,r.jsx)("button",{onClick:e=>{e.preventDefault(),b(s)?(u(s),p("Item removed from your wishlist","info","Wishlist Updated")):(h({id:s,title:a,price:l,images:[d],artisan:"",materials:[],origin:"",artisanId:"",description:"",details:[],category:"",featured:!1,new:!1,sustainabilityBadges:[],related:[],slug:m}),p("".concat(a," added to your wishlist"),"success","Added to Wishlist"))},className:"absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-islandSpice text-bordeaux p-2 rounded-full hover:bg-white transition-colors z-10","aria-label":b(s)?"Remove from wishlist":"Add to wishlist",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:b(s)?"currentColor":"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"})})})]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(t(),{href:"/product/".concat(m),className:"block",children:(0,r.jsx)("h3",{className:"text-lg font-playfair mb-1 group-hover:text-bordeaux transition-colors",children:a})}),(0,r.jsxs)("p",{className:"text-bordeaux font-montserrat font-medium mb-1",children:["$",l.toLocaleString()]}),(0,r.jsxs)("p",{className:"text-sm text-osloGray",children:["Hand-crafted in ",n]})]})]})}},4614:(e,s,a)=>{"use strict";a.d(s,{default:()=>d});var r=a(5155),l=a(2115),t=a(6874),o=a.n(t),i=a(1274),c=a(3833),n=a(4295);function d(e){let{artisan:s}=e,[a,t]=(0,l.useState)("story"),d=c.ZE.filter(e=>e.artisanId===s.id);return(0,r.jsx)("div",{className:"bg-islandSpice min-h-screen pt-8 pb-16",children:(0,r.jsxs)("div",{className:"container-custom",children:[(0,r.jsx)("div",{className:"mb-8",children:(0,r.jsx)("nav",{className:"flex","aria-label":"Breadcrumb",children:(0,r.jsxs)("ol",{className:"inline-flex items-center space-x-1 md:space-x-3",children:[(0,r.jsx)("li",{className:"inline-flex items-center",children:(0,r.jsx)(o(),{href:"/",className:"inline-flex items-center text-sm font-medium text-osloGray hover:text-bordeaux",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("svg",{className:"w-3 h-3 text-osloGray mx-1","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:(0,r.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 9 4-4-4-4"})}),(0,r.jsx)(o(),{href:"/artisans",className:"ml-1 text-sm font-medium text-osloGray hover:text-bordeaux md:ml-2",children:"Artisans"})]})}),(0,r.jsx)("li",{"aria-current":"page",children:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("svg",{className:"w-3 h-3 text-osloGray mx-1","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:(0,r.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 9 4-4-4-4"})}),(0,r.jsx)("span",{className:"ml-1 text-sm font-medium text-bordeaux md:ml-2",children:s.name})]})})]})})}),(0,r.jsx)("div",{className:"mb-12 md:mb-16",children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row gap-8 md:gap-16",children:[(0,r.jsx)("div",{className:"w-full md:w-2/5 lg:w-1/3",children:(0,r.jsx)("div",{className:"aspect-[3/4] overflow-hidden bg-osloGray/10 relative",children:s.featuredImage?(0,r.jsx)(i.default,{src:s.featuredImage,alt:s.name,fill:!0,className:"object-cover"}):(0,r.jsx)("div",{className:"w-full h-full bg-osloGray/20"})})}),(0,r.jsxs)("div",{className:"w-full md:w-3/5 lg:w-2/3 flex flex-col justify-center",children:[(0,r.jsx)("p",{className:"text-bordeaux font-cormorant text-xl mb-2",children:s.craft}),(0,r.jsx)("h1",{className:"text-4xl md:text-5xl font-playfair text-bordeaux mb-4",children:s.name}),(0,r.jsxs)("p",{className:"text-osloGray mb-6",children:[(0,r.jsx)("span",{className:"font-medium",children:"Location:"})," ",s.location]}),(0,r.jsx)("p",{className:"text-osloGray mb-8",children:s.bio}),s.social&&(0,r.jsxs)("div",{className:"flex space-x-4 mb-8",children:[s.social.instagram&&(0,r.jsx)("a",{href:"https://instagram.com/".concat(s.social.instagram),target:"_blank",rel:"noopener noreferrer",className:"text-osloGray hover:text-bordeaux transition-colors",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-5 h-5",children:[(0,r.jsx)("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.23.6 1.794 1.163.563.563.914 1.126 1.163 1.794.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427-.25.668-.6 1.23-1.163 1.794-.563.563-1.126.914-1.794 1.163-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465-.668-.25-1.23-.6-1.794-1.163-.563-.563-.914-1.126-1.163-1.794-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427.25-.668.6-1.23 1.163-1.794.563-.563 1.126-.914 1.794-1.163.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.886 2 12.315 2zm0 1.667c-2.393 0-2.732.01-3.743.058-.903.041-1.395.19-1.722.316-.432.168-.74.369-1.063.693-.324.324-.525.631-.692 1.063-.126.327-.275.819-.316 1.722-.048 1.011-.058 1.35-.058 3.743s.01 2.732.058 3.743c.041.903.19 1.395.316 1.722.168.432.369.74.693 1.063.324.324.631.525 1.063.692.327.126.819.275 1.722.316 1.011.048 1.35.058 3.743.058s2.732-.01 3.743-.058c.903-.041 1.395-.19 1.722-.316.432-.168.74-.369 1.063-.693.324-.324.525-.631.692-1.063.126-.327.275-.819.316-1.722.048-1.011.058-1.35.058-3.743s-.01-2.732-.058-3.743c-.041-.903-.19-1.395-.316-1.722-.168-.432-.369-.74-.693-1.063-.324-.324-.631-.525-1.063-.692-.327-.126-.819-.275-1.722-.316-1.011-.048-1.35-.058-3.743-.058z",clipRule:"evenodd"}),(0,r.jsx)("path",{fillRule:"evenodd",d:"M12.315 6.667a5.333 5.333 0 100 10.666 5.333 5.333 0 000-10.666zm0 8.8a3.467 3.467 0 110-6.934 3.467 3.467 0 010 6.934z",clipRule:"evenodd"}),(0,r.jsx)("circle",{cx:"17.815",cy:"6.5",r:"1.25"})]})}),s.social.facebook&&(0,r.jsx)("a",{href:"https://facebook.com/".concat(s.social.facebook),target:"_blank",rel:"noopener noreferrer",className:"text-bordeaux hover:text-gold transition-colors","aria-label":"".concat(s.name,"'s Facebook"),children:(0,r.jsx)("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})})}),s.social.website&&(0,r.jsx)("a",{href:"https://".concat(s.social.website),target:"_blank",rel:"noopener noreferrer",className:"text-bordeaux hover:text-gold transition-colors","aria-label":"".concat(s.name,"'s Website"),children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"})})})]}),(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsx)("h3",{className:"font-playfair text-lg text-bordeaux mb-3",children:"Sustainability Practices"}),(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:s.sustainabilityPractices.map(e=>(0,r.jsx)("span",{className:"px-3 py-1 bg-sage/5 text-sage border border-sage/20 rounded-full text-sm",children:e},e))})]}),(0,r.jsxs)(o(),{href:"/collection?artisan=".concat(s.id),className:"btn-primary self-start",children:["Shop ",s.name,"'s Collection"]})]})]})}),(0,r.jsx)("div",{className:"border-b border-osloGray/20 mb-8",children:(0,r.jsxs)("nav",{className:"flex space-x-8",children:[(0,r.jsx)("button",{onClick:()=>t("story"),className:"py-4 text-lg font-playfair border-b-2 ".concat("story"===a?"border-bordeaux text-bordeaux":"border-transparent text-osloGray hover:text-bordeaux"),children:"Story"}),(0,r.jsx)("button",{onClick:()=>t("process"),className:"py-4 text-lg font-playfair border-b-2 ".concat("process"===a?"border-bordeaux text-bordeaux":"border-transparent text-osloGray hover:text-bordeaux"),children:"Craft & Materials"}),(0,r.jsx)("button",{onClick:()=>t("gallery"),className:"py-4 text-lg font-playfair border-b-2 ".concat("gallery"===a?"border-bordeaux text-bordeaux":"border-transparent text-osloGray hover:text-bordeaux"),children:"Gallery"})]})}),(0,r.jsxs)("div",{className:"mb-16 md:mb-24",children:["story"===a&&(0,r.jsxs)("div",{className:"prose prose-lg max-w-none",children:[(0,r.jsxs)("h2",{className:"text-3xl font-playfair text-bordeaux mb-6",children:["The Story of ",s.name]}),(0,r.jsx)("div",{className:"whitespace-pre-line text-osloGray",children:s.story})]}),"process"===a&&(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-3xl font-playfair text-bordeaux mb-6",children:"Craft & Techniques"}),(0,r.jsxs)("div",{className:"mb-12",children:[(0,r.jsx)("h3",{className:"text-2xl font-playfair text-bordeaux mb-4",children:"Techniques"}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:s.techniques.map(e=>(0,r.jsx)("div",{className:"bg-white p-6 shadow-sm",children:(0,r.jsx)("h4",{className:"font-playfair text-lg text-bordeaux mb-2",children:e})},e))})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-2xl font-playfair text-bordeaux mb-4",children:"Materials"}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:s.materials.map(e=>(0,r.jsx)("div",{className:"bg-white p-6 shadow-sm",children:(0,r.jsx)("h4",{className:"font-playfair text-lg text-bordeaux mb-2",children:e})},e))})]})]}),"gallery"===a&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"text-3xl font-playfair text-bordeaux mb-6",children:[s.name,"'s Workshop"]}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:s.gallery&&s.gallery.length>0?s.gallery.map((e,a)=>(0,r.jsx)("div",{className:"aspect-square bg-osloGray/10 relative",children:(0,r.jsx)(i.default,{src:e,alt:"".concat(s.name,"'s workshop - image ").concat(a+1),fill:!0,className:"object-cover"})},a)):[...Array(6)].map((e,s)=>(0,r.jsx)("div",{className:"aspect-square bg-osloGray/10 relative",children:(0,r.jsx)("div",{className:"w-full h-full bg-osloGray/20"})},s))})]})]}),d.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"text-3xl font-playfair text-bordeaux mb-8",children:["Products by ",s.name]}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.map(e=>(0,r.jsx)(n.A,{id:e.id,title:e.title,price:e.price,origin:e.origin,imageSrc:e.images[0]||"",category:e.category,slug:e.slug},e.id))})]})]})})}},6969:(e,s,a)=>{Promise.resolve().then(a.bind(a,4614))}},e=>{var s=s=>e(e.s=s);e.O(0,[874,766,469,441,684,358],()=>s(6969)),_N_E=e.O()}]);