export class Http {


  constructor() {
  }

  post(url, data) {
    /*let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log('post success');
      }
    };
    xhr.send(data);*/
    console.log(data);
  }
}