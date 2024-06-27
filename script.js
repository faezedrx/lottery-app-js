document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const addButton = document.getElementById('addButton');
    const drawButton = document.getElementById('drawButton');
    const nameList = document.getElementById('nameList');
    const result = document.getElementById('result');

    const names = [];

    // افزودن نام جدید به لیست
    addButton.addEventListener('click', addName);
    nameInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addName();
        }
    });

    function addName() {
        const name = nameInput.value.trim();
        if (name) {
            names.push(name);
            updateNameList();
            nameInput.value = '';
            nameInput.focus();
        }
    }

    function updateNameList() {
        nameList.innerHTML = '';
        names.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            nameList.appendChild(li);
        });
    }

    // انجام قرعه‌کشی
    drawButton.addEventListener('click', () => {
        if (names.length > 0) {
            const randomIndex = Math.floor(Math.random() * names.length);
            const winner = names[randomIndex];
            result.textContent = `برنده: ${winner}`;
        } else {
            result.textContent = 'لطفاً ابتدا چند نام اضافه کنید.';
        }
    });
});
