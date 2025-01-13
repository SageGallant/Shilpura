(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{181:(e,s,r)=>{Promise.resolve().then(r.bind(r,4259))},4259:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>c});var a=r(5155),t=r(2115),l=r(6874),o=r.n(l),i=r(5695);function c(){let e=(0,i.useRouter)(),[s,r]=(0,t.useState)({email:"",password:"",remember:!1}),[l,c]=(0,t.useState)({email:"",password:""}),[n,d]=(0,t.useState)(!1),[m,u]=(0,t.useState)(""),x=()=>{let e=!0,r={email:"",password:""};return s.email?/\S+@\S+\.\S+/.test(s.email)||(r.email="Email is invalid",e=!1):(r.email="Email is required",e=!1),s.password?s.password.length<6&&(r.password="Password must be at least 6 characters",e=!1):(r.password="Password is required",e=!1),c(r),e},h=e=>{let{name:a,value:t,type:o,checked:i}=e.target;r({...s,[a]:"checkbox"===o?i:t}),l[a]&&c({...l,[a]:""}),m&&u("")},p=async r=>{if(r.preventDefault(),x()){d(!0),u("");try{await new Promise(e=>setTimeout(e,1e3)),"user@example.com"===s.email&&"password123"===s.password?(localStorage.setItem("user",JSON.stringify({name:"Priya Sharma",email:s.email,isLoggedIn:!0})),e.push("/account/profile")):u("Invalid email or password")}catch(e){u("An error occurred during sign in. Please try again.")}finally{d(!1)}}};return(0,a.jsx)("div",{className:"min-h-screen bg-islandSpice/10 py-16",children:(0,a.jsxs)("div",{className:"container-custom",children:[(0,a.jsxs)("div",{className:"max-w-md mx-auto bg-white rounded-lg shadow-sm p-8",children:[(0,a.jsxs)("div",{className:"text-center mb-8",children:[(0,a.jsx)("h1",{className:"text-3xl font-playfair text-bordeaux mb-2",children:"Welcome Back"}),(0,a.jsx)("p",{className:"text-osloGray",children:"Sign in to your Shilpura account"})]}),m&&(0,a.jsx)("div",{className:"bg-red-50 text-red-500 px-4 py-3 rounded-md mb-6",children:m}),(0,a.jsxs)("form",{onSubmit:p,className:"space-y-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-osloGray mb-2",children:"Email Address"}),(0,a.jsx)("input",{type:"email",id:"email",name:"email",value:s.email,onChange:h,className:"w-full border ".concat(l.email?"border-red-500":"border-gray-200"," rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold"),placeholder:"Enter your email address"}),l.email&&(0,a.jsx)("p",{className:"text-red-500 text-sm mt-1",children:l.email})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,a.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-osloGray",children:"Password"}),(0,a.jsx)(o(),{href:"/account/forgot-password",className:"text-sm text-terracotta hover:text-bordeaux",children:"Forgot Password?"})]}),(0,a.jsx)("input",{type:"password",id:"password",name:"password",value:s.password,onChange:h,className:"w-full border ".concat(l.password?"border-red-500":"border-gray-200"," rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold"),placeholder:"Enter your password"}),l.password&&(0,a.jsx)("p",{className:"text-red-500 text-sm mt-1",children:l.password})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("input",{type:"checkbox",id:"remember",name:"remember",checked:s.remember,onChange:h,className:"mr-2"}),(0,a.jsx)("label",{htmlFor:"remember",className:"text-sm text-osloGray",children:"Remember me for 30 days"})]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{type:"submit",disabled:n,className:"w-full bg-terracotta text-white py-3 rounded-md ".concat(n?"opacity-70 cursor-not-allowed":"hover:bg-terracotta/90"),children:n?(0,a.jsxs)("span",{className:"flex items-center justify-center",children:[(0,a.jsxs)("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Signing In..."]}):"Sign In"})})]}),(0,a.jsx)("div",{className:"mt-8 pt-6 border-t border-gray-200 text-center",children:(0,a.jsxs)("p",{className:"text-osloGray",children:["Don't have an account?"," ",(0,a.jsx)(o(),{href:"/account/signup",className:"text-terracotta hover:text-bordeaux",children:"Create an account"})]})})]}),(0,a.jsx)("div",{className:"mt-8 text-center",children:(0,a.jsxs)("p",{className:"text-sm text-osloGray",children:["By signing in, you agree to our"," ",(0,a.jsx)(o(),{href:"/terms",className:"text-terracotta hover:underline",children:"Terms of Service"})," ","and"," ",(0,a.jsx)(o(),{href:"/privacy-policy",className:"text-terracotta hover:underline",children:"Privacy Policy"})]})})]})})}},5695:(e,s,r)=>{"use strict";var a=r(8999);r.o(a,"useRouter")&&r.d(s,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(s,{useSearchParams:function(){return a.useSearchParams}})}},e=>{var s=s=>e(e.s=s);e.O(0,[874,441,684,358],()=>s(181)),_N_E=e.O()}]);