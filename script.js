function sendSelection(fruit) {
    const webhookUrl = 'https://discord.com/api/webhooks/1118471176692437114/eFN7KO8wJ5zVAE5H1qog9AX45XbvDziRPo5WK84SkbIWh9x69rZdgNMu6NIwtQHi0q_v'; // Replace with your Discord webhook URL

    const data = {
        content: `User selected: ${fruit}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert(`You selected: ${fruit}`);
        } else {
            alert('There was an error sending your selection.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
