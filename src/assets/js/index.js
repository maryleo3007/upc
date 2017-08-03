'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.page == 0){
    wrapper.append(Login(_=>{ render(root) }));
  } else if(state.page == 1){
    wrapper.append(Resultado(_=>{ render(root) }));
    setTimeout(function() {
      initMap("map-result", upcMo, kata);
    }, 500);
  } else if(state.page == 2) {
      wrapper.append(Header(_=>{ render(root) }));
  } else if(state.page == 3){
    wrapper.append(Sedes(_=>{ render(root) }));
  }


  root.append(wrapper);
};

const state = {
  page: 0,
  data:{},
  rutasMo: null,
  rutasSis: null,
	screenView: null
};

$(document).ready(function() {
  getJSON('/rutasMo', (err, json) => {
  state.rutasMo = json;
  console.log(state.rutasMo);
  const root = $('.root');
  render(root);
  });
});

$(document).ready(function() {
  getJSON('/rutasSis', (err, json) => {
    state.rutasSis = json;
    console.log(state.rutasSis);
    const root = $('.root');
    render(root);
  });
});
