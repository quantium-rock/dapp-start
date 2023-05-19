export default function getLang(): string {
  let lang = "";
  fetch("https://api.ipregistry.co/?key=0nxj6f90k9nup0j3")
    .then(function (response) {
      return response.json();
    })
    .then(function (payload) {
      lang = payload.location.language.code;
      console.log(lang);
    });
  return lang;
}
