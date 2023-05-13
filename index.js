const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  try {
    await PromiseAPI1();
    await PromiseAPI2();
    await PromiseAPI3();
  } catch (error) {
    console.error(error);
  }
});

function PromiseAPI1() {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      const resultDiv = document.getElementById("container_1");

      console.log(data.posts);
      data.posts.forEach((el) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = el.id;
        let td2 = document.createElement("td");
        td2.innerHTML = el.title;
        let td3 = document.createElement("td");
        td3.innerHTML = el.body;
        let td4 = document.createElement("td");
        td4.innerHTML = el.userId;
        let td5 = document.createElement("td");
        td5.innerHTML = el.tags;
        let td6 = document.createElement("td");
        td6.innerHTML = el.reactions;
        resultDiv.append(tr, td1, td2, td3, td4, td5, td6);
      });
      resolve(true);
    }, 1000);
  });
}

function PromiseAPI2() {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const resultDiv = document.getElementById("container_2");
      let h = document.getElementById("h2");

      console.log(data.products);
      data.products.forEach((el) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = el.id;
        let td2 = document.createElement("td");
        td2.innerHTML = el.title;
        let td3 = document.createElement("td");
        td3.innerHTML = el.description;
        let td4 = document.createElement("td");
        td4.innerHTML = el.price;
        let td5 = document.createElement("td");
        td5.innerHTML = el.discountPercentage;
        let td6 = document.createElement("td");
        td6.innerHTML = el.rating;
        let td7 = document.createElement("td");
        td7.innerHTML = el.stock;
        let td8 = document.createElement("td");
        td8.innerHTML = el.brand;
        let td9 = document.createElement("td");
        td9.innerHTML = el.category;
        let td10 = document.createElement("td");
        td10.src = el.thumbnail;
        let td11 = document.createElement("td");
        td11.src = el.images;
        resultDiv.append(tr, td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11);
      });
      resolve(true);
    }, 2000);
  });
}

function PromiseAPI3() {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      console.log(data);
      const resultDiv = document.getElementById("container_3");

      data.todos.forEach((el) => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = el.id;
        let td2 = document.createElement("td");
        td2.innerHTML = el.todo;
        let td3 = document.createElement("td");
        td3.innerHTML = el.completed;
        let td4 = document.createElement("td");
        td4.innerHTML = el.userId;
        resultDiv.append(tr, td, td2, td3, td4);
      });
      resolve(true);
    }, 3000);
  });
}
