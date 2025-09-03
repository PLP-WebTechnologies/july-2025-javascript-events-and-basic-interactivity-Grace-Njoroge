// A custom form validation function to check if the email and password inputs are valid
function validateForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    let isValid = true;
    emailError.textContent = '';
    passwordError.textContent = '';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }
    return isValid;
}
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
    } else {
        console.log('Form validation failed.');
    }
});
// --- Drag and Drop File Upload ---
const dropArea = document.getElementById('drop-area');
const fileElem = document.getElementById('fileElem');
const fileList = document.getElementById('file-list');

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}
// Highlight drop area when file is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.add('highlight'), false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.remove('highlight'), false);
});
// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

// Handle files from the input element
fileElem.addEventListener('change', function(e) {
    const files = e.target.files;
    handleFiles(files);
});

function handleFiles(files) {
    for (const file of files) {
        const li = document.createElement('li');
        li.textContent = file.name;
        fileList.appendChild(li);
    }
    // In a real application, you would send these files to a server here.
    alert(`${files.length} file(s) have been added.`);
}

// --- Dark Mode Toggle ---
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for user's preferred theme on page load and apply it
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', null);
    }
});
