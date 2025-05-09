let openInventoryBtn = document.getElementById("openInventory");
let closeInventoryBtn = document.getElementById("closeInventoryBtn");
let inventoryModal = document.getElementById("inventoryModal");
// Речi в Iнвенторi
let inventory = [
    { id: 1, name: "Меч", image: "images/sword.png", description: "Меч для бою." },
    { id: 2, name: "Лікувальний еліксир", image: "images/elexir.png", description: "Відновлює 50 HP." },
    { id: 3, name: "Кристал часу", image: "images/time.png", description: "Використовувати для зміни часу." }
];

// Відкриття модального вікна інвентаря
openInventoryBtn.addEventListener("click", function () {
    inventoryModal.style.display = "flex";
    displayInventoryItems(); 
});

// Закриття модального вікна інвентаря
closeInventoryBtn.addEventListener("click", function () {
    inventoryModal.style.display = "none";
});


inventoryModal.addEventListener("click", function (event) {
    if (event.target === inventoryModal) {
        inventoryModal.style.display = "none";
    }
});


function displayInventoryItems() {
    let inventoryItemsContainer = document.getElementById("inventoryItems");
    inventoryItemsContainer.innerHTML = ""; 
    inventory.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("inventory-item");
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
        `;
        itemElement.addEventListener("click", function () {
            alert(item.description);
        });
        inventoryItemsContainer.appendChild(itemElement);
    });
}