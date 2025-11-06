const delayedPromise = new Promise((resolve) => {
    setTimeout(() =>{
        resolve ("promise is resolved")
    },2000)
});

delayedPromise.then((message) => {
  console.log(message);
});

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("📦 Fetched Data:", data);
  } catch (error) {
    console.error(" Error fetching data:", error);
  }
}

fetchData();

