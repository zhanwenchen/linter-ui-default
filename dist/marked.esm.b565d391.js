("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequiree95c.register("hiBcC",(function(e,t){function n(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}function r(e,t){f[" "+e]||(f[" "+e]=k.test(e)?e+"/":s(e,"/",!0));const n=-1===(e=f[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(/^([^:]+:)[\s\S]*$/,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(/^([^:]+:\/*[^/]*)[\s\S]*$/,"$1")+t:e+t}function s(e,t,n){const r=e.length;if(0===r)return"";let s=0;for(;r>s;){const i=e.charAt(r-s-1);if(i!==t||n){if(i===t||!n)break;s++}else s++}return e.substr(0,r-s)}function i(e,t,n){const r=t.href,s=t.title?_(t.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:r,title:s,text:i}:{type:"image",raw:n,href:r,title:s,text:_(i)}}function l(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function a(e){let t,n,r="";const s=e.length;for(t=0;s>t;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";";return r}function o(e,t,n){if(null==e)throw Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw Error("marked(): input parameter is of type "+{}.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),t=F({},o.defaults,t||{}),X(t),n){const r=t.highlight;let s;try{s=C.lex(e,t)}catch(e){return n(e)}const i=e=>{let i;if(!e)try{i=N.parse(s,t)}catch(t){e=t}return t.highlight=r,e?n(e):n(null,i)};if(!r||3>r.length)return i();if(delete t.highlight,!s.length)return i();let l=0;return o.walkTokens(s,(e=>{"code"===e.type&&(l++,setTimeout((()=>{r(e.text,e.lang,((t,n)=>{if(t)return i(t);null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),l--,0===l&&i()}))}),0))})),void(0===l&&i())}try{const n=C.lex(e,t);return t.walkTokens&&o.walkTokens(n,t.walkTokens),N.parse(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+G(e.message+"",!0)+"</pre>";throw e}}Object.defineProperty(e.exports,"__esModule",{value:!0,configurable:!0}),Object.defineProperty(e.exports,"default",{get:()=>K,set:void 0,enumerable:!0,configurable:!0});var c=(e=>{var t={exports:{}};return(e=>{e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}},changeDefaults(t){e.exports.defaults=t}}})(t),t.exports})();const h=/[&<>"']/,p=/[<>"']|&(?!#?\w+;)/,u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},g=e=>u[e],d=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,f={},k=/^[^:]+:\/*[^/]*$/;var m={escape(e,t){if(t){if(h.test(e))return e.replace(/[&<>"']/g,g)}else if(p.test(e))return e.replace(/[<>"']|&(?!#?\w+;)/g,g);return e},unescape:n,edit(e,t){e=e.source||e,t=t||"";const n={replace(t,r){return r=(r=r.source||r).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,r),n},getRegex(){return RegExp(e,t)}};return n},cleanUrl(e,t,s){if(e){let e;try{e=decodeURIComponent(n(s)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!d.test(s)&&(s=r(t,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch(e){return null}return s},resolveUrl:r,noopTest:{exec(){}},merge(e){let t,n,r=1;for(;arguments.length>r;r++)for(n in t=arguments[r],t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},splitCells(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let r=!1,s=t;for(;--s>=0&&"\\"===n[s];)r=!r;return r?"|":" |"})).split(/ \|/);let r=0;if(n.length>t)n.splice(t);else for(;t>n.length;)n.push("");for(;n.length>r;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},rtrim:s,findClosingBracket(e,t){if(-1===e.indexOf(t[1]))return-1;const n=e.length;let r=0,s=0;for(;n>s;s++)if("\\"===e[s])s++;else if(e[s]===t[0])r++;else if(e[s]===t[1]&&(r--,0>r))return s;return-1},checkSanitizeDeprecation(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},repeatString(e,t){if(1>t)return"";let n="";for(;t>1;)1&t&&(n+=e),t>>=1,e+=e;return n+e}};const{defaults:b}=c,{rtrim:x,splitCells:w,escape:_,findClosingBracket:y}=m;var z=class{constructor(e){this.options=e||b}space(e){const t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:x(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=((e,t)=>{const n=e.match(/^(\s+)(?:```)/);if(null===n)return t;const r=n[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[n]=t;return r.length>n.length?e:e.slice(r.length)})).join("\n")})(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=x(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e}}}nptable(e){const t=this.rules.block.nptable.exec(e);if(t){const e={type:"table",header:w(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(e.header.length===e.align.length){let t,n=e.align.length;for(t=0;n>t;t++)e.align[t]=/^ *-+: *$/.test(e.align[t])?"right":/^ *:-+: *$/.test(e.align[t])?"center":/^ *:-+ *$/.test(e.align[t])?"left":null;for(n=e.cells.length,t=0;n>t;t++)e.cells[t]=w(e.cells[t],e.header.length);return e}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:e}}}list(e){const t=this.rules.block.list.exec(e);if(t){let e=t[0];const n=t[2],r=n.length>1,s={type:"list",raw:e,ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]},i=t[0].match(this.rules.block.item);let l,a,o,c,h,p,u,g,d,f=!1,k=i.length;o=this.rules.block.listItemStart.exec(i[0]);for(let t=0;k>t;t++){if(l=i[t],e=l,this.options.pedantic||(d=l.match(RegExp("\\n\\s*\\n {0,"+(o[0].length-1)+"}\\S")),d&&(h=l.length-d.index+i.slice(t+1).join("\n").length,s.raw=s.raw.substring(0,s.raw.length-h),l=l.substring(0,d.index),e=l,k=t+1)),t!==k-1){if(c=this.rules.block.listItemStart.exec(i[t+1]),this.options.pedantic?c[1].length>o[1].length:c[1].length>=o[0].length||c[1].length>3){i.splice(t,2,i[t]+(this.options.pedantic||c[1].length>=o[0].length||i[t].match(/\n$/)?"\n":"")+i[t+1]),t--,k--;continue}(!this.options.pedantic||this.options.smartLists?c[2][c[2].length-1]!==n[n.length-1]:r===(1===c[2].length))&&(h=i.slice(t+1).join("\n").length,s.raw=s.raw.substring(0,s.raw.length-h),t=k-1),o=c}a=l.length,l=l.replace(/^ *([*+-]|\d+[.)]) ?/,""),~l.indexOf("\n ")&&(a-=l.length,l=l.replace(this.options.pedantic?/^ {1,4}/gm:RegExp("^ {1,"+a+"}","gm"),"")),l=x(l,"\n"),t!==k-1&&(e+="\n"),p=f||/\n\n(?!\s*$)/.test(e),t!==k-1&&(f="\n\n"===e.slice(-2),p||(p=f)),p&&(s.loose=!0),this.options.gfm&&(u=/^\[[ xX]\] /.test(l),g=void 0,u&&(g=" "!==l[1],l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:e,task:u,checked:g,loose:p,text:l})}return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):_(t[0]):t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:w(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let n,r=e.align.length;for(n=0;r>n;n++)e.align[n]=/^ *-+: *$/.test(e.align[n])?"right":/^ *:-+: *$/.test(e.align[n])?"center":/^ *:-+ *$/.test(e.align[n])?"left":null;for(r=e.cells.length,n=0;r>n;n++)e.cells[n]=w(e.cells[n].replace(/^ *\| *| *\| *$/g,""),e.header.length);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0]}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:_(t[1])}}tag(e,t,n){const r=this.rules.inline.tag.exec(e);if(r)return!t&&/^<a /i.test(r[0])?t=!0:t&&/^<\/a>/i.test(r[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(r[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:r[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):_(r[0]):r[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=x(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=y(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],r="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return n=n.trim(),/^</.test(n)&&(n=this.options.pedantic&&!/>$/.test(e)?n.slice(1):n.slice(1,-1)),i(t,{href:n?n.replace(this.rules.inline._escapes,"$1"):n,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0])}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=(n[2]||n[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return i(n,e,n[0])}}emStrong(e,t,n=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r)return;if(r[3]&&n.match(/[\p{L}\p{N}]/u))return;const s=r[1]||r[2]||"";if(!s||s&&(""===n||this.rules.inline.punctuation.exec(n))){const n=r[0].length-1;let s,i,l=n,a=0;const o="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(o.lastIndex=0,t=t.slice(-1*e.length+n);null!=(r=o.exec(t));)if(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],s)if(i=s.length,r[3]||r[4])l+=i;else if(!((r[5]||r[6])&&n%3)||(n+i)%3){if(l-=i,0>=l){if(l+a-i>0||t.slice(o.lastIndex).match(o)||(i=Math.min(i,i+l+a)),Math.min(n,i)%2)return{type:"em",raw:e.slice(0,n+r.index+i+1),text:e.slice(1,n+r.index+i)};if(Math.min(n,i)%2==0)return{type:"strong",raw:e.slice(0,n+r.index+i+1),text:e.slice(2,n+r.index+i-1)}}}else a+=i}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const n=/[^ ]/.test(e),r=/^ /.test(e)&&/ $/.test(e);return n&&r&&(e=e.substring(1,e.length-1)),e=_(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2]}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let e,r;return"@"===n[2]?(e=_(this.options.mangle?t(n[1]):n[1]),r="mailto:"+e):(e=_(n[1]),r=e),{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let e,r;if("@"===n[2])e=_(this.options.mangle?t(n[0]):n[0]),r="mailto:"+e;else{let t;do{t=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(t!==n[0]);e=_(n[0]),r="www."===n[1]?"http://"+e:e}return{type:"link",raw:n[0],text:e,href:r,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t,n){const r=this.rules.inline.text.exec(e);if(r){let e;return e=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):_(r[0]):r[0]:_(this.options.smartypants?n(r[0]):r[0]),{type:"text",raw:r[0],text:e}}}};const{noopTest:$,edit:S,merge:A}=m,T={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:$,table:$,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};T.def=S(T.def).replace("label",T._label).replace("title",T._title).getRegex(),T.bullet=/(?:[*+-]|\d{1,9}[.)])/,T.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,T.item=S(T.item,"gm").replace(/bull/g,T.bullet).getRegex(),T.listItemStart=S(/^( *)(bull) */).replace("bull",T.bullet).getRegex(),T.list=S(T.list).replace(/bull/g,T.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+T.def.source+")").getRegex(),T._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",T._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,T.html=S(T.html,"i").replace("comment",T._comment).replace("tag",T._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),T.paragraph=S(T._paragraph).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",T._tag).getRegex(),T.blockquote=S(T.blockquote).replace("paragraph",T.paragraph).getRegex(),T.normal=A({},T),T.gfm=A({},T.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),T.gfm.nptable=S(T.gfm.nptable).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",T._tag).getRegex(),T.gfm.table=S(T.gfm.table).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",T._tag).getRegex(),T.pedantic=A({},T.normal,{html:S("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",T._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:$,paragraph:S(T.normal._paragraph).replace("hr",T.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",T.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const R={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:$,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/\_\_[^_]*?\*[^_]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/\*\*[^*]*?\_[^*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:$,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};R.punctuation=S(R.punctuation).replace(/punctuation/g,R._punctuation).getRegex(),R.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,R.escapedEmSt=/\\\*|\\_/g,R._comment=S(T._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),R.emStrong.lDelim=S(R.emStrong.lDelim).replace(/punct/g,R._punctuation).getRegex(),R.emStrong.rDelimAst=S(R.emStrong.rDelimAst,"g").replace(/punct/g,R._punctuation).getRegex(),R.emStrong.rDelimUnd=S(R.emStrong.rDelimUnd,"g").replace(/punct/g,R._punctuation).getRegex(),R._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,R._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,R._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,R.autolink=S(R.autolink).replace("scheme",R._scheme).replace("email",R._email).getRegex(),R._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,R.tag=S(R.tag).replace("comment",R._comment).replace("attribute",R._attribute).getRegex(),R._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,R._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,R._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,R.link=S(R.link).replace("label",R._label).replace("href",R._href).replace("title",R._title).getRegex(),R.reflink=S(R.reflink).replace("label",R._label).getRegex(),R.reflinkSearch=S(R.reflinkSearch,"g").replace("reflink",R.reflink).replace("nolink",R.nolink).getRegex(),R.normal=A({},R),R.pedantic=A({},R.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:S(/^!?\[(label)\]\((.*?)\)/).replace("label",R._label).getRegex(),reflink:S(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",R._label).getRegex()}),R.gfm=A({},R.normal,{escape:S(R.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),R.gfm.url=S(R.gfm.url,"i").replace("email",R.gfm._extended_email).getRegex(),R.breaks=A({},R.gfm,{br:S(R.br).replace("{2,}","*").getRegex(),text:S(R.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var I={block:T,inline:R};const{defaults:q}=c,{block:Z,inline:v}=I,{repeatString:D}=m;var C=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||q,this.options.tokenizer=this.options.tokenizer||new z,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;const t={block:Z.normal,inline:v.normal};this.options.pedantic?(t.block=Z.pedantic,t.inline=v.pedantic):this.options.gfm&&(t.block=Z.gfm,t.inline=this.options.breaks?v.breaks:v.gfm),this.tokenizer.rules=t}static get rules(){return{block:Z,inline:v}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens}blockTokens(e,t=[],n=!0){let r,s,i,l;for(this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),l=t[t.length-1],l&&"paragraph"===l.type?(l.raw+="\n"+r.raw,l.text+="\n"+r.text):t.push(r);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],n),t.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),i=r.items.length,s=0;i>s;s++)r.items[s].tokens=this.blockTokens(r.items[s].text,[],!1);t.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.paragraph(e)))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),l=t[t.length-1],l&&"text"===l.type?(l.raw+="\n"+r.raw,l.text+="\n"+r.text):t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}return t}inline(e){let t,n,r,s,i,l;const a=e.length;for(t=0;a>t;t++)switch(l=e[t],l.type){case"paragraph":case"text":case"heading":l.tokens=[],this.inlineTokens(l.text,l.tokens);break;case"table":for(l.tokens={header:[],cells:[]},s=l.header.length,n=0;s>n;n++)l.tokens.header[n]=[],this.inlineTokens(l.header[n],l.tokens.header[n]);for(s=l.cells.length,n=0;s>n;n++)for(i=l.cells[n],l.tokens.cells[n]=[],r=0;i.length>r;r++)l.tokens.cells[n][r]=[],this.inlineTokens(i[r],l.tokens.cells[n][r]);break;case"blockquote":this.inline(l.tokens);break;case"list":for(s=l.items.length,n=0;s>n;n++)this.inline(l.items[n].tokens)}return e}inlineTokens(e,t=[],n=!1,r=!1){let s,i,o,c,h,p=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(o=this.tokenizer.rules.inline.reflinkSearch.exec(p));)e.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(p=p.slice(0,o.index)+"["+D("a",o[0].length-2)+"]"+p.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(o=this.tokenizer.rules.inline.blockSkip.exec(p));)p=p.slice(0,o.index)+"["+D("a",o[0].length-2)+"]"+p.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(o=this.tokenizer.rules.inline.escapedEmSt.exec(p));)p=p.slice(0,o.index)+"++"+p.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(c||(h=""),c=!1,s=this.tokenizer.escape(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.tag(e,n,r)){e=e.substring(s.raw.length),n=s.inLink,r=s.inRawBlock;const i=t[t.length-1];i&&"text"===s.type&&"text"===i.type?(i.raw+=s.raw,i.text+=s.text):t.push(s)}else if(s=this.tokenizer.link(e))e=e.substring(s.raw.length),"link"===s.type&&(s.tokens=this.inlineTokens(s.text,[],!0,r)),t.push(s);else if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length);const n=t[t.length-1];"link"===s.type?(s.tokens=this.inlineTokens(s.text,[],!0,r),t.push(s)):n&&"text"===s.type&&"text"===n.type?(n.raw+=s.raw,n.text+=s.text):t.push(s)}else if(s=this.tokenizer.emStrong(e,p,h))e=e.substring(s.raw.length),s.tokens=this.inlineTokens(s.text,[],n,r),t.push(s);else if(s=this.tokenizer.codespan(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.br(e))e=e.substring(s.raw.length),t.push(s);else if(s=this.tokenizer.del(e))e=e.substring(s.raw.length),s.tokens=this.inlineTokens(s.text,[],n,r),t.push(s);else if(s=this.tokenizer.autolink(e,a))e=e.substring(s.raw.length),t.push(s);else if(n||!(s=this.tokenizer.url(e,a))){if(s=this.tokenizer.inlineText(e,r,l))e=e.substring(s.raw.length),"_"!==s.raw.slice(-1)&&(h=s.raw.slice(-1)),c=!0,i=t[t.length-1],i&&"text"===i.type?(i.raw+=s.raw,i.text+=s.text):t.push(s);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}else e=e.substring(s.raw.length),t.push(s);return t}};const{defaults:E}=c,{cleanUrl:O,escape:U}=m;var P=class{constructor(e){this.options=e||E}code(e,t,n){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,r);null!=t&&t!==e&&(n=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",r?'<pre><code class="'+this.options.langPrefix+U(r,!0)+'">'+(n?e:U(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:U(e,!0))+"</code></pre>\n"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(null===(e=O(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<a href="'+U(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){if(null===(e=O(this.options.sanitize,this.options.baseUrl,e)))return n;let r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r}text(e){return e}},L=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}},j=class{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,r=0;if(this.seen.hasOwnProperty(n)){r=this.seen[e];do{r++,n=e+"-"+r}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}};const{defaults:B}=c,{unescape:M}=m;var N=class e{constructor(e){this.options=e||B,this.options.renderer=this.options.renderer||new P,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new L,this.slugger=new j}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e,t=!0){let n,r,s,i,l,a,o,c,h,p,u,g,d,f,k,m,b,x,w="";const _=e.length;for(n=0;_>n;n++)switch(p=e[n],p.type){case"space":continue;case"hr":w+=this.renderer.hr();continue;case"heading":w+=this.renderer.heading(this.parseInline(p.tokens),p.depth,M(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue;case"code":w+=this.renderer.code(p.text,p.lang,p.escaped);continue;case"table":for(c="",o="",i=p.header.length,r=0;i>r;r++)o+=this.renderer.tablecell(this.parseInline(p.tokens.header[r]),{header:!0,align:p.align[r]});for(c+=this.renderer.tablerow(o),h="",i=p.cells.length,r=0;i>r;r++){for(a=p.tokens.cells[r],o="",l=a.length,s=0;l>s;s++)o+=this.renderer.tablecell(this.parseInline(a[s]),{header:!1,align:p.align[s]});h+=this.renderer.tablerow(o)}w+=this.renderer.table(c,h);continue;case"blockquote":h=this.parse(p.tokens),w+=this.renderer.blockquote(h);continue;case"list":for(u=p.ordered,g=p.start,d=p.loose,i=p.items.length,h="",r=0;i>r;r++)k=p.items[r],m=k.checked,b=k.task,f="",k.task&&(x=this.renderer.checkbox(m),d?k.tokens.length>0&&"text"===k.tokens[0].type?(k.tokens[0].text=x+" "+k.tokens[0].text,k.tokens[0].tokens&&k.tokens[0].tokens.length>0&&"text"===k.tokens[0].tokens[0].type&&(k.tokens[0].tokens[0].text=x+" "+k.tokens[0].tokens[0].text)):k.tokens.unshift({type:"text",text:x}):f+=x),f+=this.parse(k.tokens,d),h+=this.renderer.listitem(f,b,m);w+=this.renderer.list(h,u,g);continue;case"html":w+=this.renderer.html(p.text);continue;case"paragraph":w+=this.renderer.paragraph(this.parseInline(p.tokens));continue;case"text":for(h=p.tokens?this.parseInline(p.tokens):p.text;_>n+1&&"text"===e[n+1].type;)p=e[++n],h+="\n"+(p.tokens?this.parseInline(p.tokens):p.text);w+=t?this.renderer.paragraph(h):h;continue;default:{const e='Token with "'+p.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw Error(e)}}return w}parseInline(e,t){t=t||this.renderer;let n,r,s="";const i=e.length;for(n=0;i>n;n++)switch(r=e[n],r.type){case"escape":s+=t.text(r.text);break;case"html":s+=t.html(r.text);break;case"link":s+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":s+=t.image(r.href,r.title,r.text);break;case"strong":s+=t.strong(this.parseInline(r.tokens,t));break;case"em":s+=t.em(this.parseInline(r.tokens,t));break;case"codespan":s+=t.codespan(r.text);break;case"br":s+=t.br();break;case"del":s+=t.del(this.parseInline(r.tokens,t));break;case"text":s+=t.text(r.text);break;default:{const e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw Error(e)}}return s}};const{merge:F,checkSanitizeDeprecation:X,escape:G}=m,{getDefaults:V,changeDefaults:H,defaults:J}=c;o.options=o.setOptions=e=>(F(o.defaults,e),H(o.defaults),o),o.getDefaults=V,o.defaults=J,o.use=e=>{const t=F({},e);if(e.renderer){const n=o.defaults.renderer||new P;for(const t in e.renderer){const r=n[t];n[t]=(...s)=>{let i=e.renderer[t].apply(n,s);return!1===i&&(i=r.apply(n,s)),i}}t.renderer=n}if(e.tokenizer){const n=o.defaults.tokenizer||new z;for(const t in e.tokenizer){const r=n[t];n[t]=(...s)=>{let i=e.tokenizer[t].apply(n,s);return!1===i&&(i=r.apply(n,s)),i}}t.tokenizer=n}if(e.walkTokens){const n=o.defaults.walkTokens;t.walkTokens=t=>{e.walkTokens(t),n&&n(t)}}o.setOptions(t)},o.walkTokens=(e,t)=>{for(const n of e)switch(t(n),n.type){case"table":for(const e of n.tokens.header)o.walkTokens(e,t);for(const e of n.tokens.cells)for(const n of e)o.walkTokens(n,t);break;case"list":o.walkTokens(n.items,t);break;default:n.tokens&&o.walkTokens(n.tokens,t)}},o.parseInline=(e,t)=>{if(null==e)throw Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw Error("marked.parseInline(): input parameter is of type "+{}.toString.call(e)+", string expected");t=F({},o.defaults,t||{}),X(t);try{const n=C.lexInline(e,t);return t.walkTokens&&o.walkTokens(n,t.walkTokens),N.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+G(e.message+"",!0)+"</pre>";throw e}},o.Parser=N,o.parser=N.parse,o.Renderer=P,o.TextRenderer=L,o.Lexer=C,o.lexer=C.lex,o.Tokenizer=z,o.Slugger=j,o.parse=o;var K=o}));
//# sourceMappingURL=marked.esm.b565d391.js.map
