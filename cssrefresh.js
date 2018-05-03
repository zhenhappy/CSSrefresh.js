/*	
 *	CSSrefresh v1.0.1
 *	
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

(function () {
  var utils = {
    getRandom: function (link) {
      return link + '?x=' + Math.random()
    },
    getHash: function (str) {
      var hash = 1315423911, i, ch
      for (i = str.length - 1; i >= 0; i--) {
        ch = str.charCodeAt(i)
        hash ^= ((hash << 5) + ch + (hash >> 2))
      }
      return (hash & 0x7FFFFFFF)
    },
    getFile: function (url, callback) {
      var xhr = window.ActiveXObject ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest()
      if (!xhr) throw new Error('XMLHttpRequest not supported.')
      try {
        xhr.open('GET', url)
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) callback(xhr.responseText)
            else callback(false)
          }
        }
        xhr.send(null)
      } catch (err) {
        return false
      }
    },
    getLinks: function () {
      var files = document.getElementsByTagName('link'), links = []
      for (var i = 0; i < files.length; i++) {
        var elem = files[i], rel = elem.rel
        if (typeof rel !== 'string' || rel.length === 0 || rel === 'stylesheet') links.push({
          'elem': elem,
          'href': elem.getAttribute('href').split('?')[0],
          'hash': false
        })
      }
      return links
    }
  }
  var cssRefresh = function (links) {
    for (var i = 0; i < links.length; i++) {
      var link = links[i]
      utils.getFile(utils.getRandom(link.href), function (file) {
        var hash = utils.getHash(file)
        if (link.hash && link.hash !== hash) link.elem.setAttribute('href', utils.getRandom(link.href))
        link.hash = hash
      })
    }
    setTimeout(function () {
      cssRefresh(links)
    }, 1000)
  }
  cssRefresh(utils.getLinks())
})()
