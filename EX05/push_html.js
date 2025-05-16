const ids = ['footer', 'header', 'main_login','community', 'banner'];

ids.forEach(id => {
    fetch(`content/${id}`)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${id}`);
            return response.text();
        })
        .then(data => {
            const target = document.getElementById(id);
            if (target) {
                target.innerHTML = data;
            } else {
                console.warn(`No element with ID: ${id}`);
            }
        })
        .catch(error => {
            console.error(error);
        });
});
