function sendSelection(fruit) {
    const webhookUrl = 'https://discord.com/api/webhooks/1118471176692437114/eFN7KO8wJ5zVAE5H1qog9AX45XbvDziRPo5WK84SkbIWh9x69rZdgNMu6NIwtQHi0q_v'; // Replace with your Discord webhook URL

    // Fetch the user's public IP address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIp = data.ip;

            // Prepare the data to send to the webhook
            const message = {
                content: `User IP: ${userIp} selected: ${fruit}`
            };

            // Send the data to the Discord webhook
            fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            })
            .then(response => {
                if (response.ok) {
                    alert(`Thank you! You selected: ${fruit}`);
                } else {
                    alert('There was an error sending your selection.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        })
        .catch(error => {
            console.error('Error fetching IP:', error);
        });
}
