// Definir um array de nomes
const names: string[] = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos'];

// Obter a referência para a lista
const nameList = document.getElementById('nameList');

// Preencher a lista com os nomes
if (nameList) {
  names.forEach((name) => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    nameList.appendChild(listItem);
  });
}
