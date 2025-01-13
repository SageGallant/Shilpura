(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{1305:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>i});var a=r(5155),t=r(2115),l=r(6874),o=r.n(l),d=r(5695);function i(){let e=(0,d.useRouter)(),[s,r]=(0,t.useState)({fullName:"",email:"",password:"",confirmPassword:"",agreeTerms:!1}),[l,i]=(0,t.useState)({fullName:"",email:"",password:"",confirmPassword:"",agreeTerms:""}),[n,c]=(0,t.useState)(!1),[m,u]=(0,t.useState)(""),[x,h]=(0,t.useState)(!1),p=()=>{let e=!0,r={fullName:"",email:"",password:"",confirmPassword:"",agreeTerms:""};return s.fullName.trim()||(r.fullName="Full name is required",e=!1),s.email?/\S+@\S+\.\S+/.test(s.email)||(r.email="Email is invalid",e=!1):(r.email="Email is required",e=!1),s.password?s.password.length<8?(r.password="Password must be at least 8 characters",e=!1):/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(s.password)||(r.password="Password must contain at least one uppercase letter, one lowercase letter, and one number",e=!1):(r.password="Password is required",e=!1),s.password!==s.confirmPassword&&(r.confirmPassword="Passwords do not match",e=!1),s.agreeTerms||(r.agreeTerms="You must agree to the terms and conditions",e=!1),i(r),e},f=e=>{let{name:a,value:t,type:o,checked:d}=e.target;r({...s,[a]:"checkbox"===o?d:t}),l[a]&&i({...l,[a]:""}),m&&u("")},g=async r=>{if(r.preventDefault(),p()){c(!0),u("");try{await new Promise(e=>setTimeout(e,1500)),"taken@example.com"===s.email?u("This email is already registered. Please use a different email or sign in."):(localStorage.setItem("user",JSON.stringify({name:s.fullName,email:s.email,isLoggedIn:!0})),h(!0),setTimeout(()=>{e.push("/account/profile")},2e3))}catch(e){u("An error occurred during sign up. Please try again.")}finally{c(!1)}}};return(0,a.jsx)("div",{className:"min-h-screen bg-islandSpice/10 py-16",children:(0,a.jsx)("div",{className:"container-custom",children:(0,a.jsxs)("div",{className:"max-w-lg mx-auto bg-white rounded-lg shadow-sm p-8",children:[(0,a.jsxs)("div",{className:"text-center mb-8",children:[(0,a.jsx)("h1",{className:"text-3xl font-playfair text-bordeaux mb-2",children:"Create Your Account"}),(0,a.jsx)("p",{className:"text-osloGray",children:"Join Shilpura to discover unique artisan crafts"})]}),m&&(0,a.jsx)("div",{className:"bg-red-50 text-red-500 px-4 py-3 rounded-md mb-6",children:m}),x&&(0,a.jsxs)("div",{className:"bg-green-50 text-green-600 px-4 py-3 rounded-md mb-6",children:[(0,a.jsx)("p",{className:"font-medium",children:"Account created successfully!"}),(0,a.jsx)("p",{className:"text-sm",children:"Redirecting to your profile..."})]}),(0,a.jsxs)("form",{onSubmit:g,className:"space-y-6",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"fullName",className:"block text-sm font-medium text-osloGray mb-2",children:"Full Name"}),(0,a.jsx)("input",{type:"text",id:"fullName",name:"fullName",value:s.fullName,onChange:f,className:"w-full border ".concat(l.fullName?"border-red-500":"border-gray-200"," rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold"),placeholder:"Enter your full name",disabled:n||x}),l.fullName&&(0,a.jsx)("p",{className:"text-red-500 text-sm mt-1",children:l.fullName})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-osloGray mb-2",children:"Email Address"}),(0,a.jsx)("input",{type:"email",id:"email",name:"email",value:s.email,onChange:f,className:"w-full border ".concat(l.email?"border-red-500":"border-gray-200"," rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold"),placeholder:"Enter your email address",disabled:n||x}),l.email&&(0,a.jsx)("p",{className:"text-red-500 text-sm mt-1",children:l.email})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-osloGray mb-2",children:"Password"}),(0,a.jsx)("input",{type:"password",id:"password",name:"password",value:s.password,onChange:f,className:"w-full border ".concat(l.password?"border-red-500":"border-gray-200"," rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold"),placeholder:"Create a strong password",disabled:n||x}),l.password&&(0,a.jsx)("p",{className:"text-red-500 text-sm mt-1",children:l.password})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-osloGray mb-2",children:"Confirm Password"}),(0,a.jsx)("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:s.confirmPassword,onChange:f,className:"w-full border ".concat(l.confirmPassword?"border-red-500":"border-gray-200"," rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold"),placeholder:"Confirm your password",disabled:n||x}),l.confirmPassword&&(0,a.jsx)("p",{className:"text-red-500 text-sm mt-1",children:l.confirmPassword})]}),(0,a.jsxs)("div",{className:"flex items-start",children:[(0,a.jsx)("div",{className:"flex items-center h-5",children:(0,a.jsx)("input",{type:"checkbox",id:"agreeTerms",name:"agreeTerms",checked:s.agreeTerms,onChange:f,className:"mr-2 mt-1",disabled:n||x})}),(0,a.jsxs)("label",{htmlFor:"agreeTerms",className:"text-sm text-osloGray ml-2",children:["I agree to the"," ",(0,a.jsx)(o(),{href:"/terms",className:"text-terracotta hover:underline",children:"Terms of Service"})," ","and"," ",(0,a.jsx)(o(),{href:"/privacy-policy",className:"text-terracotta hover:underline",children:"Privacy Policy"})]})]}),l.agreeTerms&&(0,a.jsx)("p",{className:"text-red-500 text-sm mt-1",children:l.agreeTerms}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{type:"submit",disabled:n||x,className:"w-full bg-terracotta text-white py-3 rounded-md ".concat(n||x?"opacity-70 cursor-not-allowed":"hover:bg-terracotta/90"),children:n?(0,a.jsxs)("span",{className:"flex items-center justify-center",children:[(0,a.jsxs)("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Creating Account..."]}):x?"Account Created!":"Create Account"})})]}),(0,a.jsx)("div",{className:"mt-8 pt-6 border-t border-gray-200 text-center",children:(0,a.jsxs)("p",{className:"text-osloGray",children:["Already have an account?"," ",(0,a.jsx)(o(),{href:"/account/signin",className:"text-terracotta hover:text-bordeaux",children:"Sign in"})]})})]})})})}},5695:(e,s,r)=>{"use strict";var a=r(8999);r.o(a,"useRouter")&&r.d(s,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(s,{useSearchParams:function(){return a.useSearchParams}})},7200:(e,s,r)=>{Promise.resolve().then(r.bind(r,1305))}},e=>{var s=s=>e(e.s=s);e.O(0,[874,441,684,358],()=>s(7200)),_N_E=e.O()}]);