(function (d, w, c) {
    (w[c] = w[c] || []).push(function () {
        try {
            w.yaCounter43539754 = new Ya.Metrika({
                id: 43539754,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
                trackHash: true
            });
        } catch (e) {
        }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () {
            n.parentNode.insertBefore(s, n);
        };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else {
        f();
    }
})
(document, window, "yandex_metrika_callbacks");

try {
    var AG_onLoad = function (func) {
        if (document.readyState === "complete" || document.readyState === "interactive") func();
        else if (document.addEventListener) document.addEventListener("DOMContentLoaded", func);
        else if (document.attachEvent) document.attachEvent("DOMContentLoaded", func)
    };
    var AG_removeElementById = function (id) {
        var element = document.getElementById(id);
        if (element && element.parentNode) {
            element.parentNode.removeChild(element);
        }
    };
    var AG_removeElementBySelector = function (selector) {
        if (!document.querySelectorAll) {
            return;
        }
        var nodes = document.querySelectorAll(selector);
        if (nodes) {
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i] && nodes[i].parentNode) {
                    nodes[i].parentNode.removeChild(nodes[i]);
                }
            }
        }
    };
    var AG_each = function (selector, fn) {
        if (!document.querySelectorAll) return;
        var elements = document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++) {
            fn(elements[i]);
        }
        ;
    };
    var AdFox_getCodeScript = function () {
    };
    AG_onLoad(function () {
        AG_each('iframe[id^="AdFox_iframe_"]', function (el) {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        });
    });
    try {
        Object.defineProperty(window, 'noAdsAtAll', {
            get: function () {
                return true;
            }
        });
    } catch (ex) {
    }
    window.uabInject = function () {
    };
} catch (ex) {
    console.error('Error executing AG js: ' + ex);
}
