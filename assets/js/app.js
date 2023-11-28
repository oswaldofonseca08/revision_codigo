
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector("name");
const $b = document.querySelector("blog");
const $l = document.querySelector("location");

const displayUser = async (username) => {
  //$n.textContent = 'cargando...';
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
  
  try {
    const response = await fetch(`${usersEndpoint}/username`);
    console.log(data);

  } catch (error) {
      console.log('OH NO!');
      console.log(error);
      $n.textContent = `Algo salió mal: ${error}`
  }
}


displayUser('stolinski')
.then(response => console.log(response))
.catch(error => console.log(error));