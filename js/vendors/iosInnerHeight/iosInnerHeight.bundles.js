!function(f){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).iosInnerHeight=f()}}(function(){return function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){return o(e[i][1][r]||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(require,module,exports){"use strict";module.exports=function(){if("undefined"==typeof window||"undefined"==typeof navigator)return function(){return 0};if(!navigator.userAgent.match(/iphone|ipod|ipad/i))return function(){return window.innerHeight};var ruler,axis=Math.abs(window.orientation),dims={w:0,h:0};return(ruler=document.createElement("div")).style.position="fixed",ruler.style.height="100vh",ruler.style.width=0,ruler.style.top=0,document.documentElement.appendChild(ruler),dims.w=90===axis?ruler.offsetHeight:window.innerWidth,dims.h=90===axis?window.innerWidth:ruler.offsetHeight,document.documentElement.removeChild(ruler),ruler=null,function(){return 90!==Math.abs(window.orientation)?dims.h:dims.w}}()},{}]},{},[1])(1)});