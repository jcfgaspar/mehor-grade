import { routes, headers, host } from "@helpers/routes"
import fetch from "node-fetch"

const { API_URL } = process.env

const getJWT = body => {
    const path = routes.external.v1.auth.login
    const url = `${API_URL}${path}`
    const raw = JSON.stringify(body);
    const myHeaders = new Headers();
    
    myHeaders.append("accept", "*/*");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    return fetch(url, requestOptions)
      .catch(error => console.log('error', error));
}

const auth = {
    getJWT
}

export default auth