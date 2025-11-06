let textarea = document.getElementById('textarea');

 let featureFlag = document.getElementById('feature-flag');

 function firstLoad() {

  if (window.localStorage.getItem("autosave-data")) {

  textarea.value = window.localStorage.getItem("autosave-data");

  }

  updateLocalStorage();

 }

 function updateLocalStorage() {

  setInterval(() => {

  let inputData = textarea.value;

  if(featureFlag.checked) window.localStorage.setItem("autosave-data", inputData);

  }, 1000);

 }


