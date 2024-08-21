document.getElementById('createGroupBtn').addEventListener('click', () => {
    document.getElementById('createGroupModal').style.display = 'block';
    document.getElementById('dropdownMenu').remove('show')
});

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('createGroupModal').style.display = 'none';
});

document.getElementById('createGroupForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const groupName = document.getElementById('groupName').value;

    fetch('/create-group', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ groupName }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Group created successfully!');
        document.getElementById('createGroupModal').style.display = 'none';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});