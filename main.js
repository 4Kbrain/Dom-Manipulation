// Dom Menu by Aditya.
// # Menggabut
// Copyright © 2024 by Aditya Dwi Nugroho
// Github Account : https://github.com/AdityaDwiNugroho

// Function to add the entered name to names.json on the server side
function addNameToServer(name) {
  fetch('/addName', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Name already exists or server error.');
      }
      return response.json();
    })
    .then(data => {
      console.log('Name added to names.json on the server:', data.message);
      alert('Name added successfully.');
    })
    .catch(error => {
      console.error('Error adding name to server:', error.message);
      alert('Error adding name to server. Please try again.');
    });
}

// Function to create the initial menu and handle name input
function createMenu() {
  let container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.textAlign = 'center';
  container.style.height = '50vh';
  container.style.overflowY = 'auto';

  const userName = localStorage.getItem('userName');
  if (userName) {
    showGameModes(container);
    displayUserName(container, userName);
  } else {
    let title = document.createElement('h2');
    title.textContent = "Enter Your Name:";
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.color = '#333';
    container.appendChild(title);

    let nameForm = document.createElement('form');
    let nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Enter your name');
    nameInput.setAttribute('id', 'inputName');
    nameInput.style.marginBottom = '10px';
    nameInput.style.padding = '8px';
    nameInput.style.fontSize = '16px';
    nameInput.style.border = '1px solid #ccc';
    nameForm.appendChild(nameInput);

    let submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.style.padding = '8px 16px';
    submitButton.style.marginLeft = '8px';
    submitButton.style.cursor = 'pointer';
    submitButton.style.backgroundColor = '#3498db';
    submitButton.style.color = '#fff';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '4px';
    nameForm.appendChild(submitButton);

    nameForm.addEventListener('submit', function(event) {
      event.preventDefault();
      let inputName = nameInput.value.trim();

      if (inputName === '') {
        alert('Please enter a name.');
        return;
      }

      // Save name to localStorage for session
      localStorage.setItem('userName', inputName);

      addNameToServer(inputName);

      container.innerHTML = '';
      showGameModes(container);
      displayUserName(container, inputName); 
      // Display user name after submitting
    });

    container.appendChild(nameForm);
  }

  document.body.appendChild(container);
}

// Function to display the user's name
function displayUserName(container, userName) {
  let greeting = document.createElement('h1');
  greeting.textContent = `Welcome, ${userName}!`;
  greeting.style.fontFamily = 'Arial, sans-serif';
  greeting.style.color = '#333';
  container.appendChild(greeting);
}

// Function to display game modes
function showGameModes(container) {
  let title = document.createElement('h2');
  title.textContent = "Select Mode:";
  title.style.fontFamily = 'Arial, sans-serif';
  title.style.color = '#333';
  container.appendChild(title);

  let items = ['Calculator', 'Portfolio'];

  items.forEach((item, index) => {
    let menuItem = document.createElement('div');
    menuItem.textContent = `${index + 1}. ${item}`;
    menuItem.className = 'menu-item';
    menuItem.style.cursor = 'pointer';
    menuItem.style.marginBottom = '10px';
    menuItem.style.padding = '15px 30px';
    menuItem.style.backgroundColor = '#3498db';
    menuItem.style.borderRadius = '8px';
    menuItem.style.fontFamily = 'Arial, sans-serif';
    menuItem.style.color = '#fff';
    menuItem.style.transition = 'background-color 0.3s, border-color 0.3s';

    menuItem.addEventListener('mouseenter', () => {
      menuItem.style.backgroundColor = '#2980b9';
      menuItem.style.border = '2px solid #2980b9';
    });

    menuItem.addEventListener('mouseleave', () => {
      menuItem.style.backgroundColor = '#3498db';
      menuItem.style.border = 'none';
    });

    menuItem.addEventListener('click', () => {
      handleSelection(index + 1, menuItem);
    });

    container.appendChild(menuItem);
  });
}


// item selection 
function handleSelection(choice, menuItem) {
  document.querySelectorAll('.menu-item').forEach(item => {
    item.style.display = 'none';
  });

  let loadingContainer = document.createElement('div');
  loadingContainer.style.position = 'fixed';
  loadingContainer.style.top = '50%';
  loadingContainer.style.left = '50%';
  loadingContainer.style.transform = 'translate(-50%, -50%)';
  loadingContainer.style.textAlign = 'center';
  document.body.appendChild(loadingContainer);

  let loadingBar = document.createElement('div');
  loadingBar.style.width = '0%';
  loadingBar.style.height = '5px';
  loadingBar.style.backgroundColor = '#f39c12';
  loadingBar.style.marginBottom = '10px';
  loadingBar.style.borderRadius = '4px';
  loadingBar.style.transition = 'width 0.1s ease';
  loadingContainer.appendChild(loadingBar);

  let loadingText = document.createElement('p');
  loadingText.textContent = 'Loading...';
  loadingText.style.fontFamily = 'Arial, sans-serif';
  loadingText.style.color = '#333';
  loadingText.style.margin = '10px 0';
  loadingContainer.appendChild(loadingText);

  let percentage = 0;
  let loadingInterval = setInterval(() => {
    percentage++;
    loadingBar.style.width = percentage + '%';
    loadingText.textContent = `Loading... ${percentage}%`;

    if (percentage === 100) {
      clearInterval(loadingInterval);
      setTimeout(() => {
        loadingContainer.style.display = 'none';
        switch (choice) {
          case 1:
            console.log("Redirecting to Calculator...");
            window.location.href = 'src/calculator'; // Uncomment to redirect 
            break;
          case 2:
            console.log("Redirecting to Portfolio...");
            window.location.href = 'https://aditya-portofolio-phi.vercel.app/'; // Uncomment to redirect
            break;
          default:
            console.log("Invalid choice.");
            break;
        }
      }, 500);
    }
  }, 50);
}

// Initialize the application
createMenu();



// Tugas Sensei Dea 





// must insert 10 on it

const arraySaya = [4,6,8, ,12,14]
const masukkanArray =   arraySaya.slice()

console.log(masukkanArray + '\n just an example')


const arrayNumber = []
for(let i = 0; i <=14; i += 2 ) {
  arrayNumber.push(i)
  console.log(arrayNumber)
}


// lingkaran

function helo(phi, r) {
  phi = 22/7
  let jari1 = prompt('Enter the value of r', r)
  let t = parseInt(jari1)

  let hasil = phi * t * t
  console.log('ini adalah value r: ', jari1, 'dan hasilnya: ', hasil)
}

// helo()


// function luasLingkaran(phi, r) {
//   const hasil = phi * r
// }

// const hasilLingkaran = luasLingkaran(3)

// console.log(hasilLingkaran)
