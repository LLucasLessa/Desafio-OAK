const form = document.getElementById("form");
const itens = document.getElementById("listItens");

let products = [];


form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = form.elements["nameProduct"].value;
  let description = form.elements["descriptionProduct"].value;
  let disp = form.elements["avaliableProduct"].value;
  let price = form.elements["priceProduct"].value;

  // if (disp == "sim"){
  //   itens.innerHTML += `<div class="item"><div class="div-itemdesc"><p><strong>Nome do Item:</strong> ${name}</p><p><strong>Preço:</strong> ${price}</p><p><strong>Disponivel:</strong> <span style="color: green">${disp}</span></p></div><hr><p><strong>Descrição:</strong> ${description}</p></div>`;
  // }else{
  //   itens.innerHTML += `<div class="item"><div class="div-itemdesc"><p><strong>Nome do Item:</strong> ${name}</p><p><strong>Preço:</strong> ${price}</p><p><strong>Disponivel:</strong> <span style="color: red">${disp}</span></p></div><hr><p><strong>Descrição:</strong> ${description}</p></div>`;
  // }

  const newProduct = {
    nome: name,
    preco: price,
    descricao: description,
    disponibilidade: disp
  }

  products.push(newProduct);
  displayProducts();
})

function displayProducts(clearList = true) {

  if (clearList) {
    itens.innerHTML = "";
  }

  products.forEach(product => {
    itens.innerHTML += `<div class="item"><div class="div-itemdesc"><p><strong>Nome do Item:</strong> ${product.nome}</p><p><strong>Preço:</strong> ${product.preco}</p><p><strong>Disponivel:</strong> ${product.disponibilidade}</p></div><hr><p><strong>Descrição:</strong> ${product.descricao}</p></div>`;  
  });
}

function sortByName() {
  products.sort((a, b) => a.nome.localeCompare(b.nome));
  displayProducts();
}

function sortByPrice(){
  products.sort((a, b) => b.preco - a.preco);
  displayProducts();
}