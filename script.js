document.getElementById('load').addEventListener('click', async () => {
    const res = await fetch('http://localhost:5000/api/example');
    const data = await res.json();
    const output = document.getElementById('output');
    output.innerHTML = data.map(item => `<p>${item.title}: ${item.description}</p>`).join('');
});