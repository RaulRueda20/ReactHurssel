import axios from 'axios';

const SolicitudLogin = (method, params, header) =>{
  axios({
    method: method,
    url: 'http://'+window.location.host+'/api/v1.0',
    responseType: 'JSON',
    headers: header,
    params: { data },
  }).then({response} => {
    return next (response)
  }).catch({

  })
}
