! function(f) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = f();
  else if ("function" == typeof define && define.amd) define([], f);
  else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).VRView = f()
  }
}(function() {
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) { var a = "function" == typeof require && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = "MODULE_NOT_FOUND", f }
        var l = n[o] = { exports: {} };
        t[o][0].call(l.exports, function(e) { var n = t[o][1][e]; return s(n || e) }, l, l.exports, e, t, n, r)
      }
      return n[o].exports
    }
    for (var i = "function" == typeof require && require, o = 0; o < r.length; o++) s(r[o]);
    return s
  }({
    1: [function(_dereq_, module, exports) {
      "use strict";

      function EE(fn, context, once) { this.fn = fn, this.context = context, this.once = once || !1 }

      function EventEmitter() {}
      var has = Object.prototype.hasOwnProperty
        , prefix = "function" != typeof Object.create && "~";
      EventEmitter.prototype._events = void 0, EventEmitter.prototype.eventNames = function() {
        var name, events = this._events
          , names = [];
        if (!events) return names;
        for (name in events) has.call(events, name) && names.push(prefix ? name.slice(1) : name);
        return Object.getOwnPropertySymbols ? names.concat(Object.getOwnPropertySymbols(events)) : names
      }, EventEmitter.prototype.listeners = function(event, exists) {
        var evt = prefix ? prefix + event : event
          , available = this._events && this._events[evt];
        if (exists) return !!available;
        if (!available) return [];
        if (available.fn) return [available.fn];
        for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) ee[i] = available[i].fn;
        return ee
      }, EventEmitter.prototype.emit = function(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events || !this._events[evt]) return !1;
        var args, i, listeners = this._events[evt]
          , len = arguments.length;
        if ("function" == typeof listeners.fn) {
          switch (listeners.once && this.removeListener(event, listeners.fn, void 0, !0), len) {
            case 1:
              return listeners.fn.call(listeners.context), !0;
            case 2:
              return listeners.fn.call(listeners.context, a1), !0;
            case 3:
              return listeners.fn.call(listeners.context, a1, a2), !0;
            case 4:
              return listeners.fn.call(listeners.context, a1, a2, a3), !0;
            case 5:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4), !0;
            case 6:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), !0
          }
          for (i = 1, args = new Array(len - 1); i < len; i++) args[i - 1] = arguments[i];
          listeners.fn.apply(listeners.context, args)
        }
        else {
          var j, length = listeners.length;
          for (i = 0; i < length; i++) switch (listeners[i].once && this.removeListener(event, listeners[i].fn, void 0, !0), len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) args[j - 1] = arguments[j];
              listeners[i].fn.apply(listeners[i].context, args)
          }
        }
        return !0
      }, EventEmitter.prototype.on = function(event, fn, context) {
        var listener = new EE(fn, context || this)
          , evt = prefix ? prefix + event : event;
        return this._events || (this._events = prefix ? {} : Object.create(null)), this._events[evt] ? this._events[evt].fn ? this._events[evt] = [this._events[evt], listener] : this._events[evt].push(listener) : this._events[evt] = listener, this
      }, EventEmitter.prototype.once = function(event, fn, context) {
        var listener = new EE(fn, context || this, !0)
          , evt = prefix ? prefix + event : event;
        return this._events || (this._events = prefix ? {} : Object.create(null)), this._events[evt] ? this._events[evt].fn ? this._events[evt] = [this._events[evt], listener] : this._events[evt].push(listener) : this._events[evt] = listener, this
      }, EventEmitter.prototype.removeListener = function(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events || !this._events[evt]) return this;
        var listeners = this._events[evt]
          , events = [];
        if (fn)
          if (listeners.fn)(listeners.fn !== fn || once && !listeners.once || context && listeners.context !== context) && events.push(listeners);
          else
            for (var i = 0, length = listeners.length; i < length; i++)(listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) && events.push(listeners[i]);
        return events.length ? this._events[evt] = 1 === events.length ? events[0] : events : delete this._events[evt], this
      }, EventEmitter.prototype.removeAllListeners = function(event) { return this._events ? (event ? delete this._events[prefix ? prefix + event : event] : this._events = prefix ? {} : Object.create(null), this) : this }, EventEmitter.prototype.off = EventEmitter.prototype.removeListener, EventEmitter.prototype.addListener = EventEmitter.prototype.on, EventEmitter.prototype.setMaxListeners = function() { return this }, EventEmitter.prefixed = prefix, void 0 !== module && (module.exports = EventEmitter)
    }, {}]
    , 2: [function(_dereq_, module, exports) {
      function IFrameMessageSender(iframe) { iframe ? (this.iframe = iframe, this.isIOS_() && window.addEventListener("devicemotion", this.onDeviceMotion_.bind(this), !1)) : console.error("No iframe specified") }
      var Message = _dereq_("../message");
      IFrameMessageSender.prototype.send = function(message) { this.iframe.contentWindow.postMessage(message, "*") }, IFrameMessageSender.prototype.onDeviceMotion_ = function(e) {
        var message = { type: Message.DEVICE_MOTION, deviceMotionEvent: this.cloneDeviceMotionEvent_(e) };
        this.send(message)
      }, IFrameMessageSender.prototype.cloneDeviceMotionEvent_ = function(e) { return { acceleration: { x: e.acceleration.x, y: e.acceleration.y, z: e.acceleration.z }, accelerationIncludingGravity: { x: e.accelerationIncludingGravity.x, y: e.accelerationIncludingGravity.y, z: e.accelerationIncludingGravity.z }, rotationRate: { alpha: e.rotationRate.alpha, beta: e.rotationRate.beta, gamma: e.rotationRate.gamma }, interval: e.interval, timeStamp: e.timeStamp } }, IFrameMessageSender.prototype.isIOS_ = function() { return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream }, module.exports = IFrameMessageSender
    }, { "../message": 5 }]
    , 3: [function(_dereq_, module, exports) {
      var VRView = { Player: _dereq_("./player") };
      module.exports = VRView
    }, { "./player": 4 }]
    , 4: [function(_dereq_, module, exports) {
      function Player(selector, contentInfo) {
        var iframe = this.createIframe_(contentInfo);
        this.iframe = iframe, document.querySelector(selector).appendChild(iframe), this.sender = new IFrameMessageSender(iframe), window.addEventListener("message", this.onMessage_.bind(this), !1), this.isPaused = !1, this.isMuted = !1, void 0 !== contentInfo.muted && (this.isMuted = contentInfo.muted), this.currentTime = 0, this.duration = 0, this.volume = void 0 != contentInfo.volume ? contentInfo.volume : 1, Util.isIOS() && this.injectFullscreenStylesheet_()
      }
      var EventEmitter = _dereq_("eventemitter3")
        , IFrameMessageSender = _dereq_("./iframe-message-sender")
        , Message = _dereq_("../message")
        , Util = _dereq_("../util")
        , CURRENT_SCRIPT_SRC = Util.getCurrentScript().src;
      (Player.prototype = new EventEmitter).addHotspot = function(hotspotId, params) {
        var data = { pitch: params.pitch, yaw: params.yaw, radius: params.radius, distance: params.distance, id: hotspotId };
        this.sender.send({ type: Message.ADD_HOTSPOT, data: data })
      }, Player.prototype.play = function() { this.sender.send({ type: Message.PLAY }) }, Player.prototype.pause = function() { this.sender.send({ type: Message.PAUSE }) }, Player.prototype.setContent = function(contentInfo) {
        this.absolutifyPaths_(contentInfo);
        var data = { contentInfo: contentInfo };
        this.sender.send({ type: Message.SET_CONTENT, data: data })
      }, Player.prototype.setVolume = function(volumeLevel) {
        var data = { volumeLevel: volumeLevel };
        this.sender.send({ type: Message.SET_VOLUME, data: data })
      }, Player.prototype.getVolume = function() { return this.volume }, Player.prototype.mute = function(muteState) {
        var data = { muteState: muteState };
        this.sender.send({ type: Message.MUTED, data: data })
      }, Player.prototype.setCurrentTime = function(time) {
        var data = { currentTime: time };
        this.sender.send({ type: Message.SET_CURRENT_TIME, data: data })
      }, Player.prototype.getCurrentTime = function() { return this.currentTime }, Player.prototype.getDuration = function() { return this.duration }, Player.prototype.setFullscreen = function() { this.sender.send({ type: Message.SET_FULLSCREEN }) }, Player.prototype.createIframe_ = function(contentInfo) {
        this.absolutifyPaths_(contentInfo);
        var iframe = document.createElement("iframe");
        iframe.setAttribute("allowfullscreen", !0), iframe.setAttribute("scrolling", "no"), iframe.style.border = 0, contentInfo.hasOwnProperty("width") && (iframe.setAttribute("width", contentInfo.width), delete contentInfo.width), contentInfo.hasOwnProperty("height") && (iframe.setAttribute("height", contentInfo.height), delete contentInfo.height);
        var url = this.getEmbedUrl_() + Util.createGetParams(contentInfo);
        return iframe.src = url, iframe
      }, Player.prototype.onMessage_ = function(event) {
        var message = event.data;
        if (message && message.type) {
          var type = message.type.toLowerCase()
            , data = message.data;
          switch (type) {
            case "ready":
              void 0 !== data && void 0 !== data.duration && (this.duration = data.duration);
            case "modechange":
            case "error":
            case "click":
            case "ended":
            case "getposition":
              this.emit(type, data);
              break;
            case "volumechange":
              this.volume = data, this.emit("volumechange", data);
              break;
            case "muted":
              this.isMuted = data, this.emit("mute", data);
              break;
            case "timeupdate":
              this.currentTime = data, this.emit("timeupdate", { currentTime: this.currentTime, duration: this.duration });
              break;
            case "play":
            case "paused":
              this.isPaused = data, this.isPaused ? this.emit("pause", data) : this.emit("play", data);
              break;
            case "enter-fullscreen":
            case "enter-vr":
              this.setFakeFullscreen_(!0);
              break;
            case "exit-fullscreen":
              this.setFakeFullscreen_(!1);
              break;
            default:
              console.warn("Got unknown message of type %s from %s", message.type, message.origin)
          }
        }
        else console.warn("Received message with no type.")
      }, Player.prototype.setFakeFullscreen_ = function(isFullscreen) { isFullscreen ? this.iframe.classList.add("vrview-fake-fullscreen") : this.iframe.classList.remove("vrview-fake-fullscreen") }, Player.prototype.injectFullscreenStylesheet_ = function() {
        var styleString = ["iframe.vrview-fake-fullscreen", "{", "position: fixed !important;", "display: block !important;", "z-index: 9999999999 !important;", "top: 0 !important;", "left: 0 !important;", "width: 100% !important;", "height: 100% !important;", "margin: 0 !important;", "}"].join("\n")
          , style = document.createElement("style");
        style.innerHTML = styleString, document.body.appendChild(style)
      }, Player.prototype.getEmbedUrl_ = function() { var split = CURRENT_SCRIPT_SRC.split("/"); return split.slice(0, split.length - 2).join("/") + "/index.html" }, Player.prototype.getDirName_ = function() { var path = window.location.pathname; return path = path.substring(0, path.lastIndexOf("/")), location.protocol + "//" + location.host + path }, Player.prototype.absolutifyPaths_ = function(contentInfo) {
        for (var dirName = this.getDirName_(), urlParams = ["image", "preview", "video"], i = 0; i < urlParams.length; i++) {
          var name = urlParams[i]
            , path = contentInfo[name];
          if (path && Util.isPathAbsolute(path)) {
            var absolute = Util.relativeToAbsolutePath(dirName, path);
            contentInfo[name] = absolute
          }
        }
      }, Player.prototype.getPosition = function() { this.sender.send({ type: Message.GET_POSITION, data: {} }) }, module.exports = Player
    }, { "../message": 5, "../util": 6, "./iframe-message-sender": 2, eventemitter3: 1 }]
    , 5: [function(_dereq_, module, exports) {
      var Message = { PLAY: "play", PAUSE: "pause", TIMEUPDATE: "timeupdate", ADD_HOTSPOT: "addhotspot", SET_CONTENT: "setimage", SET_VOLUME: "setvolume", MUTED: "muted", SET_CURRENT_TIME: "setcurrenttime", DEVICE_MOTION: "devicemotion", GET_POSITION: "getposition", SET_FULLSCREEN: "setfullscreen" };
      module.exports = Message
    }, {}]
    , 6: [function(_dereq_, module, exports) {
      var Util = window.Util || {};
      Util.isDataURI = function(src) { return src && 0 == src.indexOf("data:") }, Util.generateUUID = function() {
        function s4() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) }
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4()
      }, Util.isMobile = function() {
        var check = !1;
        return function(a) {
          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) && (check = !0)
        }(navigator.userAgent || navigator.vendor || window.opera), check
      }, Util.isIOS = function() { return /(iPad|iPhone|iPod)/g.test(navigator.userAgent) }, Util.isSafari = function() { return /^((?!chrome|android).)*safari/i.test(navigator.userAgent) }, Util.cloneObject = function(obj) { var out = {}; for (key in obj) out[key] = obj[key]; return out }, Util.hashCode = function(s) { return s.split("").reduce(function(a, b) { return (a = (a << 5) - a + b.charCodeAt(0)) & a }, 0) }, Util.loadTrackSrc = function(context, src, callback, opt_progressCallback) {
        var request = new XMLHttpRequest;
        request.open("GET", src, !0), request.responseType = "arraybuffer", request.onload = function() { context.decodeAudioData(request.response, function(buffer) { callback(buffer) }, function(e) { console.error(e) }) }, opt_progressCallback && (request.onprogress = function(e) {
          var percent = e.loaded / e.total;
          opt_progressCallback(percent)
        }), request.send()
      }, Util.isPow2 = function(n) { return 0 == (n & n - 1) }, Util.capitalize = function(s) { return s.charAt(0).toUpperCase() + s.slice(1) }, Util.isIFrame = function() { try { return window.self !== window.top } catch (e) { return !0 } }, Util.getQueryParameter = function(name) { name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var results = new RegExp("[\\?&]" + name + "=([^&#]*)").exec(location.search); return null === results ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")) }, Util.isWebGLEnabled = function() {
        var canvas = document.createElement("canvas");
        try { gl = canvas.getContext("webgl") }
        catch (x) { gl = null }
        if (null == gl) try { gl = canvas.getContext("experimental-webgl"), experimental = !0 }
        catch (x) { gl = null }
        return !!gl
      }, Util.clone = function(obj) { return JSON.parse(JSON.stringify(obj)) }, Util.hypot = Math.hypot || function(x, y) { return Math.sqrt(x * x + y * y) }, Util.isIE11 = function() { return navigator.userAgent.match(/Trident/) }, Util.getRectCenter = function(rect) { return new THREE.Vector2(rect.x + rect.width / 2, rect.y + rect.height / 2) }, Util.getScreenWidth = function() { return Math.max(window.screen.width, window.screen.height) * window.devicePixelRatio }, Util.getScreenHeight = function() { return Math.min(window.screen.width, window.screen.height) * window.devicePixelRatio }, Util.isIOS9OrLess = function() {
        if (!Util.isIOS()) return !1;
        var re = /(iPhone|iPad|iPod) OS ([\d_]+)/
          , iOSVersion = navigator.userAgent.match(re);
        if (!iOSVersion) return !1;
        var versionString = iOSVersion[iOSVersion.length - 1];
        return parseFloat(versionString) <= 9
      }, Util.getExtension = function(url) { return url.split(".").pop().split("?")[0] }, Util.createGetParams = function(params) { var out = "?"; for (var k in params) out += k + "=" + params[k] + "&"; return out.substring(0, params.length - 2), out }, Util.sendParentMessage = function(message) { window.parent && parent.postMessage(message, "*") }, Util.parseBoolean = function(value) { return "false" != value && 0 != value && ("true" == value || 1 == value || !!value) }, Util.relativeToAbsolutePath = function(base, relative) { for (var stack = base.split("/"), parts = relative.split("/"), i = 0; i < parts.length; i++) "." != parts[i] && (".." == parts[i] ? stack.pop() : stack.push(parts[i])); return stack.join("/") }, Util.isPathAbsolute = function(path) { return !/^(?:\/|[a-z]+:\/\/)/.test(path) }, Util.isEmptyObject = function(obj) { return 0 == Object.getOwnPropertyNames(obj).length }, Util.isDebug = function() { return Util.parseBoolean(Util.getQueryParameter("debug")) }, Util.getCurrentScript = function() { return document.currentScript || console.warn("This browser does not support document.currentScript. Trying fallback."), document.currentScript || document.scripts[document.scripts.length - 1] }, module.exports = Util
    }, {}]
  }, {}, [3])(3)
});