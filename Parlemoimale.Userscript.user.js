// ==UserScript==
// @name         Parlemoimale
// @namespace    https://gist.github.com/fhalna/207d4f32777031c00aa122121156a28c
// @version      0.1
// @description  Masque l'écriture inclusive pour les lecteurs d'écran
// @author       Frédéric Halna
// @match      *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.innerHTML = document.body.innerHTML.replace(/elles·/g, '<span aria-hidden="true">elles.</span>');
    document.body.innerHTML = document.body.innerHTML.replace(/·ses/g, '<span aria-hidden="true">.ses</span>');
    document.body.innerHTML = document.body.innerHTML.replace(/·te·/g, '<span aria-hidden="true">·te·</span>');
    document.body.innerHTML = document.body.innerHTML.replace(/·es/g, '<span aria-hidden="true">·es</span>');
    document.body.innerHTML = document.body.innerHTML.replace(/·e·/g, '<span aria-hidden="true">·e·</span>');
    document.body.innerHTML = document.body.innerHTML.replace(/n·e/g, 'n<span aria-hidden="true">·e</span>');
    document.body.innerHTML = document.body.innerHTML.replace(/·rice·/g, '<span aria-hidden="true">·rice·</span>');
    document.body.innerHTML = document.body.innerHTML.replace(/·ve·/g, '<span aria-hidden="true">·ve·</span>');
    document.body.innerHTML = document.body.innerHTML.replace(/·euse·/g, '<span aria-hidden="true">·euse·</span>');
    document.body.innerHTML = document.body.innerHTML.replace(/·ne·/g, '<span aria-hidden="true">·ne·</span>');
    document.body.innerHTML = document.body.innerHTML.replace(/·que·/g, '<span aria-hidden="true">·que·</span>');
})();
