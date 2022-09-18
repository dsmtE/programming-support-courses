"use strict";(self.webpackChunkprogramming_support_courses=self.webpackChunkprogramming_support_courses||[]).push([[700],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),s=a(2389),o=a(7392),i=a(7094),u=a(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:a,block:s,defaultValue:m,values:d,groupId:v,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,o.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:x}=(0,i.U)(),[I,N]=(0,r.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:y}=(0,u.o5)();if(null!=v){const e=C[v];null!=e&&e!==I&&k.some((t=>t.value===e))&&N(e)}const q=e=>{const t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==I&&(y(t),N(n),null!=v&&x(v,String(n)))},w=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},g)},k.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>T.push(e),onKeyDown:w,onFocus:q,onClick:q},s,{className:(0,l.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":I===t})}),a??t)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function d(e){const t=(0,s.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},1797:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>v,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),s=a(5162),o=(a(814),a(6285));const i={title:"Installer un compilateur C++",tags:["Tools","C++"]},u=void 0,p={unversionedId:"Lessons/Compiler",id:"Lessons/Compiler",title:"Installer un compilateur C++",description:"Introduction",source:"@site/content/Lessons/Compiler.md",sourceDirName:"Lessons",slug:"/Lessons/Compiler",permalink:"/programming-support-courses/Lessons/Compiler",draft:!1,tags:[{label:"Tools",permalink:"/programming-support-courses/tags/tools"},{label:"C++",permalink:"/programming-support-courses/tags/c"}],version:"current",frontMatter:{title:"Installer un compilateur C++",tags:["Tools","C++"]},sidebar:"Lessons",previous:{title:"Introduction",permalink:"/programming-support-courses/Lessons"},next:{title:"D\xe9couvrir l'IDE VSCode",permalink:"/programming-support-courses/Lessons/IDE"}},c={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Compiler son premier programme",id:"compiler-son-premier-programme",level:2}],d={toc:m};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Il existe deux grands types de langages informatiques, les langages ",(0,r.kt)("strong",{parentName:"p"},"interpr\xe9t\xe9s")," et ",(0,r.kt)("strong",{parentName:"p"},"compil\xe9s"),"."),(0,r.kt)("p",null,"Dans un langage interpr\xe9t\xe9, le m\xeame code source pourra marcher directement sur tout ordinateur disposant de l'interpr\xe9teur n\xe9cessaire, c'est le cas du Python par exemple."),(0,r.kt)("p",null,"Avec un langage compil\xe9, il faudra (en g\xe9n\xe9ral) recompiler son programme (enti\xe8rement ou partiellement) \xe0 chaque fois pour pouvoir obtenir un ex\xe9cutable utilisable sur la machine sur laquelle on veut lancer celui-ci.\nCela n\xe9cessite donc une \xe9tape suppl\xe9mentaire (plus ou moins rapide): ",(0,r.kt)("strong",{parentName:"p"},"la compilation"),". Mais cela apporte \xe9galement l'avantage de pouvoir optimiser et adapter l'ex\xe9cutable pour une ou des machines sp\xe9cifiques.\nDans la majorit\xe9 des cas, l'ex\xe9cutable compil\xe9 sera plus performant et rapide qu'un \xe9quivalent dans un langage interpr\xe9t\xe9."),(0,r.kt)("p",null,"Dans ton cas, tu vas coder en C++ qui est un langage compil\xe9 tr\xe8s connu et r\xe9put\xe9 pour ses performances.\nNous allons voir ensemble comment installer un compilateur C++ (n\xe9cessaire \xe0 tout d\xe9veloppeur C++) sur ta machine et ex\xe9cuter ton premier programme C++."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"Tu trouveras ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/cpp/config-msvc"},"ici")," toutes les explications dont tu as besoin (il te suffit de suivre la section ",(0,r.kt)("strong",{parentName:"p"},"Pr\xe9requis"),")."),(0,r.kt)("p",null,"Ensuite il faudra installer CMake, tu peux te rendre ",(0,r.kt)("a",{href:"https://cmake.org/download/"},"ici")," et s\xe9lectionner l'installeur ",(0,r.kt)("strong",{parentName:"p"},"Windows x64 Installer"),".")),(0,r.kt)(s.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,"De mani\xe8re g\xe9n\xe9rale, toutes les distributions Linux sont livr\xe9es avec un compilateur install\xe9. Si ce n'est pas le cas, consulte ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/cpp/config-linux"},"cet article"),".\nSi ta distrubution Linux n'inclut pas de compilateur c'est s\xfbrement que tu sais tr\xe8s bien ce que tu fais et tu n'as pas du tout besoin de moi \ud83d\ude04 ")),(0,r.kt)(s.Z,{value:"Mac",label:"Mac",mdxType:"TabItem"},"Tu as seulement \xe0 \xe9xecuter cette commande :",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"xcode-select --install\n")),(0,r.kt)("p",null,"Je ne suis pas un expert sur IOS, si tu as un probl\xe8me n'h\xe9site pas \xe0 venir me voir ou m\xeame demander \xe0 tes camarades qui en sauront s\xfbrement plus que moi."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"CMake est un outil additionnel permettant de g\xe9rer la compilation d'un projet.\nEn effet, lorsqu'il s'agit de compiler un seul fichier il est possible de le faire manuellement avec les commandes du compilateur mais la t\xe2che va vite se complexifier lorsqu'il va s'agir de compiler plusieurs fichiers et de g\xe9rer des d\xe9pendances.\nC'est alors qu'interviennent des outils comme les Makefile ou CMake pour te simplifier la t\xe2che. Celui-ci va tr\xe8s bien s'int\xe9grer \xe0 des IDE ce que nous allons voir dans les prochains cours.")),(0,r.kt)("h2",{id:"compiler-son-premier-programme"},"Compiler son premier programme"),(0,r.kt)("p",null,"Dans un premier temps, tu vas pouvoir v\xe9rifier que le compilateur est bien install\xe9 avec la commande suivante:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"g++ --version\n")),(0,r.kt)("p",null,"Tu peux ensuite cr\xe9er un fichier d'extension ",(0,r.kt)("em",{parentName:"p"},"cpp")," avec le code suivant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n\nint main() {\n    std::cout << "Hello and welcome to IMAC !" << std::endl;\n    return 0;\n}\n')),(0,r.kt)("p",null,"Une fois ce fichier helloImac.cpp cr\xe9\xe9, compile le simplement avec la commande suivante:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"g++ helloImac.cpp -o helloImac.exe\n")),(0,r.kt)("p",null,"Cela devrait te donner un ex\xe9cutable, votre premier programme C++."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Pour Windows, dans le cas du compilateur MSVC c'est l\xe9g\xe8rement plus complexe de le faire sans utiliser CMake.\nMais de toute fa\xe7on, nous n'utiliserons que tr\xe8s peu cette mani\xe8re de faire car bien trop fastidieuse.\nPour les curieux, la d\xe9marche est expliqu\xe9e ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/fr-fr/cpp/build/walkthrough-compiling-a-native-cpp-program-on-the-command-line?view=msvc-170"},"ici"),".")),(0,r.kt)("p",null,"Je t'invite maintenant \xe0 suivre la section ",(0,r.kt)(o.Z,{label:"IDE",component:"a",href:"IDE",variant:"outlined",clickable:!0,mdxType:"Chip"})," pour d\xe9couvrir VSCode, qui sera l'IDE support pour la suite de ce cours."),(0,r.kt)("p",null,"Nous allons installer ensemble des extensions pour te simplifier la compilation et la manipulation de code C++."))}v.isMDXComponent=!0}}]);