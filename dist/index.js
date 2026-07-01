"use strict";var f=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}}};var l=f(function(D,o){"use strict";var n=require("@stdlib/assert-has-own-property"),h=require("@stdlib/ndarray-base-assert-is-complex-floating-point-data-type"),q=require("@stdlib/assert-is-empty-collection"),m=require("@stdlib/assert-is-nonnegative-integer-array").primitives,g=require("@stdlib/array-base-assert-is-accessor-array"),c=require("@stdlib/assert-is-ndarray-like"),b=require("@stdlib/assert-is-plain-object"),w=require("@stdlib/assert-is-number").isPrimitive,O=require("@stdlib/array-base-accessor-setter"),T=require("@stdlib/array-zeros"),E=require("@stdlib/array-base-setter"),N=require("@stdlib/ndarray-base-buffer"),j=require("@stdlib/ndarray-dtype"),k=require("@stdlib/ndarray-shape"),A=require("@stdlib/ndarray-order"),P=require("@stdlib/ndarray-ctor"),u=require("@stdlib/string-format");function S(i,e,r){var a,s,v,d,t,p,y;if(!c(i))throw new TypeError(u("invalid argument. First argument must be an ndarray-like object. Value: `%s`.",i));if(a={dtype:j(i),shape:k(i),order:A(i),readonly:!1},arguments.length>2){if(!b(r))throw new TypeError(u("invalid argument. Options argument must be an object. Value: `%s`.",r));if(n(r,"dtype")&&(a.dtype=r.dtype),n(r,"shape")){if(!m(r.shape)&&!q(r.shape))throw new TypeError(u("invalid option. `%s` option must be an array of nonnegative integers. Option: `%s`.","shape",r.shape));a.shape=r.shape}n(r,"order")&&(a.order=r.order),n(r,"readonly")&&(a.readonly=r.readonly)}if(d=a.shape,t=a.dtype,s=N(t,1),s===null)throw new TypeError(u("invalid option. `%s` option must be a recognized data type. Option: `%s`.","dtype",t));return h(t)&&w(e)?p=[e,0]:p=e,g(s)?v=O(t):v=E(t),v(s,0,p),y=d.length||1,new P(t,s,d,T(y),0,a.order,a)}o.exports=S});var z=l();module.exports=z;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
