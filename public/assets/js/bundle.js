(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

'use strict';

const Resultado = (update) => {
  const section = $('<section></section>');
  const divMap  = $('<div></div>');
  const containerDetails = $('<div></div>');

  const details          = $('<div></div>');
  const figure           = $('<figure></figure>');
  const img              = $('<img src="assets/img/serv-piscina.png" alt="piscina">');
  const div              = $('<div></div>');
  const h4               = $('<h4>piscina upc</h4>');
  const h5               = $('<h5>metros</h5>');

  const pasos = $('<div></div>');
  const p     = $('<p></p>');

  const btns     = $('<div></div>');
  const reservar = $('<button type="button" class="btn btn-danger uppercase" name="button">reservar</button>');
  const volver   = $('<button type="button" class="btn btn-default uppercase" name="button">volver</button>');

  section.append(divMap);
  divMap.append(containerDetails);
  containerDetails.append(details);
  containerDetails.append(pasos);
  containerDetails.append(btns);
  details.append(figure);
  details.append(div);
  figure.append(img);
  div.append(h4);
  div.append(h5);
  pasos.append(p);
  btns.append(reservar);
  btns.append(volver);

  return section;

};
'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == 0){
    wrapper.append(Resultado(_=>{ render(root) }));
  }

  root.append(wrapper);
};

const state = {
  page: 0,
  data:{}
};

$( _ => {
  const root = $("#root");
  render(root);
});
},{}]},{},[1])