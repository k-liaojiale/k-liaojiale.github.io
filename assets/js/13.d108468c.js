(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{231:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"管理用户相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理用户相关命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 管理用户相关命令")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加用户")]),s._v("\nadduser    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为用户设置密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改用户命令，可以通过usermod 来修改登录名、用户的家目录等等")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看用户的UID、GID及所归属的用户组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户切换工具")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo 是通过另一个用户来执行命令（execute a command as another user")]),s._v("\n")])])]),t("ul",[t("li",[s._v("useradd可选参数")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("-c：加上备注文字，备注文字保存在passwd的备注栏中。\n-d：指定用户登入时的主目录，替换系统默认值/home/<用户名>\n-D：变更预设值。\n-e：指定账号的失效日期，日期格式为MM/DD/YY，例如06/30/12。缺省表示永久有效。\n-f：指定在密码过期后多少天即关闭该账号。如果为0账号立即被停用；如果为-1则账号一直可用。默认值为-1.\n-g：指定用户所属的群组。值可以使组名也可以是GID。用户组必须已经存在的，期默认值为100，即users。\n-G：指定用户所属的附加群组。\n-m：自动建立用户的登入目录。\n-M：不要自动建立用户的登入目录。\n-n：取消建立以用户名称为名的群组。\n-r：建立系统账号。\n-s：指定用户登入后所使用的shell。默认值为/bin/bash。\n-u：指定用户ID号。该值在系统中必须是唯一的。0~499默认是保留给系统用户账号使用的，所以该值必须大于499。\n")])])]),t("ul",[t("li",[s._v("usermod可选参数")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("-c<REMARKS>     : 修改用户帐号的备注文字。\n-d<DIR>         : 修改用户登入时的目录。\n-e<LIMIT_TIME>  : 修改帐号的有效期限。\n-f<DAYS>        : 修改在密码过期后多少天即关闭该帐号。\n-g<GROUP_NAME>  : 修改用户所属的群组。\n-G<GROUP_NAME>  : 修改用户所属的附加群组。\n-l<USER_NAME>   : 修改用户帐号名称。\n-L              : 锁定用户密码，使密码无效。\n-s<SHELL>       : 修改用户登入后所使用的shell。\n-u<UID>         : 修改用户ID。\n-U              : 解除密码锁定。\n")])])]),t("h2",{attrs:{id:"管理用户组相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理用户组相关命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 管理用户组相关命令")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加用户组；")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupdel")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除用户组；")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupmod")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改用户组信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groups")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示用户所属的用户组")]),s._v("\ngpasswd    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把用户添加进组或从组中删除")]),s._v("\nnewgrp     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换用户的有效组")]),s._v("\n")])])]),t("ul",[t("li",[s._v("gpasswd可选参数")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("''                        : 选项为空时, 表示给群组设置密码(仅 root 用户可用)\n-A user1,... [GROUP_NAME] ：指定管理员(仅 root 用户可用)\n-M user1,... [GROUP_NAME] ：指定组成员(仅 root 用户可用)\n-r                        ：移除群组的密码(仅 root 用户可用)\n-R                        ：限制用户登入组，只有组中的成员才可以用newgrp加入该组(仅 root 用户可用)\n-a user                   : 添加用户到组(仅 root 用户可用)\n-d user                   : 从组删除用户\n")])])]),t("h2",{attrs:{id:"其它"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它","aria-hidden":"true"}},[s._v("#")]),s._v(" 其它")]),s._v(" "),t("ul",[t("li",[s._v("查看用户")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USER_NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ul",[t("li",[s._v("查看用户组")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/group\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/group "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("GROUP_NAME"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);