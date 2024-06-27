document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const addButton = document.getElementById('addButton');
    const drawButton = document.getElementById('drawButton');
    const nameList = document.getElementById('nameList');
    const result = document.getElementById('result');

    const names = [];

    // Add new name to the list
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

    // Draw lottery
    drawButton.addEventListener('click', () => {
        if (names.length > 0) {
            const randomIndex = Math.floor(Math.random() * names.length);
            const winner = names[randomIndex];
            result.textContent = `🎉 Winner: ${winner} 🎉`;
            result.style.animation = 'fadeIn 1s';
        } else {
            result.textContent = 'Please add some names first.';
        }
    });
});
