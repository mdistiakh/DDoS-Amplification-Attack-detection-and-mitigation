document.getElementById('dns-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const input = document.getElementById('dns-input').value;
    let responses;

    try {
        responses = JSON.parse(input);
    } catch (error) {
        alert('Invalid JSON format');
        return;
    }

    const response = await fetch('/api/dns-response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ responses })
    });

    const result = await response.json();
    const ipsList = document.getElementById('suspicious-ips');
    ipsList.innerHTML = '';

    if (result.suspiciousIPs.length > 0) {
        result.suspiciousIPs.forEach(ip => {
            const li = document.createElement('li');
            li.textContent = ip;
            ipsList.appendChild(li);
        });
    } else {
        ipsList.innerHTML = '<li>No suspicious IPs detected</li>';
    }
});
