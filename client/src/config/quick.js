import env from './env'

const bookmarksUrl = `void function(e, t, n, r, c, i, s, o, u) {
    n = location.href,
    r = t.title,
    c = t.documentElement.outerHTML,
    i = "" + (e.getSelection ? e.getSelection() : t.getSelection ? t.getSelection() : t.selection.createRange().text);
    if (!i) {
        o = t.getElementsByTagName("meta");
        for (var a = 0; a < o.length; a++) u = o[a],
        u && u.name.toLowerCase() === "description" && (i = u.content)
    }
    s = encodeURIComponent;
    var f = "${env.baseUrl}/#/bookmark/add?title=" + s(r) + "&url=" + s(n) + "&summary=" + s(i) + "#content=" + s(c);
    e.open(f, "_blank", "scrollbars=no,width=800,height=500,left=75,top=20,status=no,resizable=yes")
} (window, document);`

const notesUrl = `void function(e, t, n, r, c, i, s, o, u) {
n = '/note/new', r = '' + (new Date).toLocaleString();
s = encodeURIComponent;
var f = "${env.baseUrl}/#/note/add?title=" + s(r) + "&url=" + s(n);
e.open(f, "_blank", "scrollbars=no,width=800,height=500,left=75,top=20,status=no,resizable=yes")
} (window, document);`

export default {
  bookmarks: 'javascript:' + encodeURIComponent(bookmarksUrl),
  notemarks: 'javascript:' + encodeURIComponent(notesUrl),
}
