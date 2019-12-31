(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{230:function(a,r,e){"use strict";e.r(r);var s=e(2),t=Object(s.a)({},(function(){var a=this,r=a.$createElement,e=a._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"safe-rm介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#safe-rm介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" safe-rm介绍")]),a._v(" "),e("p",[a._v("safe-rm是避免删除重要文件的工具。执行rm命令时就会检查rm命令的参数是否在黑名单中存在，如果存在则提示用户不能删除该文件或者目录。")]),a._v(" "),e("h2",{attrs:{id:"_1-安装wget"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装wget","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 安装wget")]),a._v(" "),e("pre",[e("code",[a._v("yum -y install wget\n")])]),a._v(" "),e("h2",{attrs:{id:"_2-下载safe-rm安装包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载safe-rm安装包","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 下载safe-rm安装包")]),a._v(" "),e("pre",[e("code",[a._v("wget https://launchpad.net/safe-rm/trunk/0.12/+download/safe-rm-0.12.tar.gz\n")])]),a._v(" "),e("h2",{attrs:{id:"_3-解压"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-解压","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 解压")]),a._v(" "),e("pre",[e("code",[a._v("tar -zxvf safe-rm-0.12.tar.gz -C /usr/local/bin\n")])]),a._v(" "),e("blockquote",[e("p",[a._v("-C：指定解压目录")])]),a._v(" "),e("h2",{attrs:{id:"_4-软连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-软连接","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 软连接")]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[a._v('"aaa"')]),a._v("\n")])])]),e("h2",{attrs:{id:"_5-配置环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置环境变量","aria-hidden":"true"}},[a._v("#")]),a._v(" 5. 配置环境变量")]),a._v(" "),e("pre",[e("code",[a._v("vim /etc/profile    # 全局配置\nvim ~/.bash_profile # 单独用户配置\n")])]),a._v(" "),e("p",[e("strong",[a._v("在配置文件最后一行加上")])]),a._v(" "),e("pre",[e("code",[a._v("PATH=/usr/local/bin:$PATH\n")])]),a._v(" "),e("p",[e("strong",[a._v("保存后使其生效")])]),a._v(" "),e("pre",[e("code",[a._v("source /etc/profile\nsource ~/.bash_profile\n")])]),a._v(" "),e("h2",{attrs:{id:"_6-配置保护文件列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-配置保护文件列表","aria-hidden":"true"}},[a._v("#")]),a._v(" 6. 配置保护文件列表")]),a._v(" "),e("pre",[e("code",[a._v("vim /etc/safe-rm.conf # 全局配置\nvim ~/.safe-rm        # 单独用户配置\n")])]),a._v(" "),e("p",[e("strong",[a._v("配置文件示例")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/\n/bin\n/boot\n/dev\n/etc\n/home\n/initrd\n/lib\n/proc\n/root\n/sbin\n/sys\n/usr\n/usr/bin\n/usr/include\n/usr/lib\n/usr/local\n/usr/local/bin\n/usr/local/include\n/usr/local/sbin\n/usr/local/share\n/usr/sbin\n/usr/share\n/usr/src\n/var\n\n~\n")])])])])}),[],!1,null,null,null);r.default=t.exports}}]);