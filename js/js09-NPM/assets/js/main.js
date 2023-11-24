console.log("JS09 - NPM");

const url = "https://fakestoreapi.com/users";

const getUserUsingFetch = async (url) =>{
    try {
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.log(error);
    };
};

const getUserUsingAxios = async (url) => {
    try {
        const users = await axios.get(url);
        console.log (users.data);
    } catch (error) {
        console.log (error);
    };
};

const postUsingAxios = async () =>{
    const url = "https://reqres.in/api/users";
    const user = {
        name: "Aldo",
        job: "Developer Ch34"
    };

    const response = await axios.post (url,user);
    console.log (response.data);
};

const postUsingFetch = async (  ) =>{
    const url = "https://reqres.in/api/users";
    const user = {
      name: "Aldo",
      job: "Developer Ch35"
    }
 
    const response = await fetch( url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // body data type must match "Content-Type" header
      });
    const newUser = await response.json();
    console.log( "Fetch" , newUser );
};


getUserUsingFetch(url);
getUserUsingAxios(url);

postUsingAxios();
postUsingFetch();