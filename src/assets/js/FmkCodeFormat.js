import $ from 'jquery'

export function readyIntoPreAboutCtrl (um) {
  let ue = um
  // this.um = ue
  console.log(ue)
  // console.log(`ummmmmmmmmmmmmmmmmmmmm---${this.um}`)
  // console.log('this.$refs.ueeditor.$el', $(this.$refs.ueeditor.$el).find('iframe'))
  ue.addListener('ready', function (editor) {
    console.log('ready')
    let _iframe = $('#ueditor_0').contents()
    console.log(_iframe)

    console.log('editor', editor)

    var jq_ifmHead = _iframe[0].getElementsByTagName('head')[0]
    var jq_ifmScript = document.createElement('script')
    jq_ifmScript.id = 'jq_ifm'
    jq_ifmScript.type = 'text/javascript'
    // jq_ifmScript.crossorigin = 'anonymous'
    // jq_ifmScript.integrity = 'sha384-I6F5OKECLVtK/BL+8iSLDEHowSAfUo76ZL9+kGAgTRdiByINKJaqTPH/QVNS1VDb'
    jq_ifmScript.src = 'static/jquery/2.2.3/jquery.min.js'
    jq_ifmHead.appendChild(jq_ifmScript)

    var ifm_head = _iframe[0].getElementsByTagName('head')[0]
    console.log(ifm_head)
    var ifm_script = document.createElement('script')
    ifm_script.id = 's2'
    ifm_script.type = 'text/javascript'
    ifm_script.text = `var isIE = navigator.userAgent.indexOf('MSIE') > 0

			var Q_EDITFORM_DOCUMENT = null
			var Q_SELECTION = null
			var Q_RANGE = null
			var Q_RANGE_TEXT = ''

			function getParentNode() {
				if (isIE) {
					return document.selection.createRange().parentElement()
				} else {
					var startRangeNode = Q_RANGE.startContainer
					if (startRangeNode.nodeType == 3) {
						var textNode = startRangeNode
						startRangeNode = textNode.parentNode
					} else {
						if (startRangeNode.tagName.toLowerCase() == 'html') {
							startRangeNode = startRangeNode.childNodes[0].nextSibling
						}
					}
					return startRangeNode
				}
			}

			//插入div的相关处理函数
			function QEditformDocument() {
				if (isIE) {
					Q_EDITFORM_DOCUMENT = document
				} else {
					Q_EDITFORM_DOCUMENT = document
				}
			}

			function QSelection() {
				if (isIE) {
					Q_SELECTION = Q_EDITFORM_DOCUMENT.selection
					Q_RANGE = Q_SELECTION.createRange()
					Q_RANGE_TEXT = Q_RANGE.text
					//alert(Q_RANGE_TEXT)
				} else {
					var sel = window.getSelection && window.getSelection()
					console.log(sel)
					Q_SELECTION = Q_EDITFORM_DOCUMENT.getSelection()
					// console.log(Q_SELECTION)
					Q_RANGE = Q_SELECTION.getRangeAt(0)
					Q_RANGE_TEXT = Q_RANGE.toString()
					// console.log(Q_RANGE_TEXT)
				}
			}

			function te() {
				//HtmlEditor为编辑器iframe的id
				//HtmlEditor.focus()
				//调用getParentNode()前必须初始化文档对象
				QEditformDocument()
				QSelection()
				var parentobj = getParentNode()
				console.log('tagName:', parentobj.tagName, ' className:', parentobj.className)
				console.log(parentobj)
				// parentobj.innerHTML = 'hello world'
				// console.dir(parentobj)
				if (parentobj.tagName == 'PRE' && parentobj.className == 'code_flag') {

          $("pre.code_flag").removeAttr('mark')
					$(parentobj).attr('mark', 'current')
				}
			}
      `
    ifm_head.appendChild(ifm_script)
    console.log($('#s2'))
    $(_iframe[0]).on('click', 'pre', function () {
      // console.log('<pre>----', document.getElementById('ueditor_0').contentWindow.te)
      let ifm_dom = document.getElementById('ueditor_0').contentWindow;
      ifm_dom.te();
    })
  })
}

export class codeFormat {
  // fmkType: string
  // _dom :object {ueditor初始化的实例}
  constructor (_fmkType, _dom) {
    this.fmkType = _fmkType
    this.um = _dom
  }
  insetCodeBtn () {
    if (this.fmkType === 'single') {
      this.singleScript()
    } else if (this.fmkType === 'multi') {
      this.multiScript()
    }
  }
  singleScript () {
    let ue = this.um
    console.log('singleScript', ue)
    // 单分支判断模板
    let message = this.fmkTempCenter()
    // 单分支判断模板 - 插入页面
    ue.execCommand('insertHtml', message.join(''))
    let _text = this.getDhtml('.code_flag[mark="current"]')
    let _arr = _text.split('<br>')
    this.initcode_def_flat(_arr)
  }
  multiScript () {
    let ue = this.um
    console.log('multiScript', ue)
    // 多分支判断模板
    let muil_message = this.fmkTempCenter()
    // 多分支判断模板 - 插入页面
    ue.execCommand('insertHtml', muil_message.join(''))
    let _text = this.getDhtml('.code_flag[mark="current"]')
    let _arr = _text.split('<br>')
    this.initcode_def_flat(_arr)
  }
  fmkTempCenter () {
    if (this.fmkType === 'single') {
      return [
        '<pre contenteditable="true" class="code_flag" onclick="te()">',
        '<br>&lt;#if 参数 &lt;= 0&gt;<br>',
        '  第一结果<br>',
        '&lt;#else&gt;<br>',
        '  第二结果<br>',
        '&lt;/#if&gt;<br>',
        '</pre>'
      ]
    } else if (this.fmkType === 'multi') {
      return [
        '<pre contenteditable="true" class="code_flag" onclick="te()">',
        '<br>&lt;#if x == 1&gt;<br>',
        '  x is 1<br>',
        '&lt;#elseif x == 2&gt;<br>',
        '  x is 2<br>',
        '&lt;#else&gt;<br>',
        '  x is not 1 nor 2<br>',
        '&lt;/#if&gt;',
        '</pre>'
      ]
    }
  }
  getDhtml (ele) {
    let cur_text = ''
    // 获取代码段文本内容
    let _dom = $('#ueditor_0')
      .contents()
      .find(ele)

    $.each(_dom, function (i) {
      console.log('_dom', _dom)
      const cur_obj = _dom.eq(i)
      cur_text = cur_obj.html()
      console.log('ccc', cur_text)
    })
    return cur_text
  }
  initcode_def_flat (arr) {
    let i = 0
    let newTmplArr = []
    let _iframe = $('#ueditor_0').contents()
    while (i < arr.length) {
      const line = arr[i]
      let newline = line.replace(/(^\s*)/g, '')

      // 插入到页面原容器
      newTmplArr.push(newline)
      i++
    }
    this.digui(newTmplArr)
  }
  digui (arr) {
    let kcount = ''
    let newTmpl = '' // 用于接收格式化后的模板容器
    let i = 0
    while (i < arr.length) {
      const ele = arr[i]
      // // RegExp:匹配-当前行起始位置的中文字符串（起始位置中文之间不得有空格，否则正则失效）
      // // let test_first_zhcn = /^[^\u0000-\u00FF]+/g.test(output_cutspace)
      let zh_num_en_spec = /^[A-Za-z0-9\s\!\@\#\$\^\*\-\_\+\=\:\\\'\;\,\.\/\?\(\)\{\}\[\]，。%:：、\u4e00-\u9fa5]+$/
      // let test_first_zhcn = zh_num_en_spec.test(output_cutspace)

      if (/^(&#8203;)/.test(ele)) {
        newTmpl += ''
      } else if ('' == ele) {
        newTmpl += '<br>'
      }
      // else if ('&lt;#if 参数 &lt;= 0&gt;' == ele) {
      else if (/^(&lt;#if)/.test(ele)) {
        console.log('我是#if的行：', ele)
        // let base = kcount + '&lt;#if 参数 &lt;= 0&gt;'
        let base = kcount + ele
        console.log('base', base)
        kcount += '    '
        console.log(`kcount:${kcount}`)
        newTmpl += base
        newTmpl += '<br>'
      } else if (/^(&lt;#elseif)/.test(ele)) {
        let _kcount = kcount.replace(/^(    )/, '')
        let base = _kcount + ele
        newTmpl += base
        newTmpl += '<br>'
      }
      // else if (test_first_zhcn) {
      else if (zh_num_en_spec.test(ele)) {
        let base = `${kcount}${ele}`
        newTmpl += base
        newTmpl += '<br>'
        console.log(`newTmpl:${newTmpl}`)
      } else if ('&lt;#else&gt;' == ele) {
        // kcount = ''
        let _kcount = kcount.replace(/^(    )/, '')
        let base = _kcount + '&lt;#else&gt;'
        newTmpl += base
        newTmpl += '<br>'
        // kcount += '  '
        console.log(`newTmpl:${newTmpl}`)
      }
      // else if('&lt;/#if&gt;' == ele){
      else if (/^(&lt;\/#if&gt;)/.test(ele)) {
        // kcount = ''
        let _kcount = kcount.replace(/^(    )/, '')
        let base = _kcount + '&lt;/#if&gt;'
        kcount = _kcount
        newTmpl += base
        newTmpl += '<br>'
        console.log(`newTmpl:${newTmpl}`)
        let _ele = ele.replace(/^(&lt;\/#if&gt;)/, '')
        if (_ele != '') {
          base = kcount + _ele
          newTmpl += base
          newTmpl += '<br>'
        }
      }
      // else if('&lt;/pre&gt;' == ele){
      //   let base = kcount + unescapeHTML('&lt;/pre&gt;')
      //   newTmpl += base
      //   console.log(`newTmpl:${newTmpl}`)
      // }
      // break
      i++
      console.log(`final----newTmpl:${newTmpl}`)
      let _iframe = this.getRootIfm()
      // 每次</if>末尾都会多一个<br>,所以要删除这些br,否则我们插入多次的时候代码段末尾会有n+1个br
      let LastManyBr = newTmpl.substr(0, newTmpl.lastIndexOf(';') + 4)
      // 插入格式化好的片段，先检查dom容器
      console.log(' 插入格式化好的片段，先检查dom容器', _iframe.find('.code_flag'))
      _iframe.find('.code_flag[mark="current"]').html(LastManyBr)
      console.log('原容器格式化后赋值内容：', _iframe.find('.code_flag').html())
    }
  }
  getRootIfm () {
    return $('#ueditor_0').contents()
  }
}
