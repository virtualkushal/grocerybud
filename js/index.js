let regForm = document.querySelector(".register-form");
let allInput = regForm.querySelectorAll("input");
let reglist = document.querySelector('.reg-list');

let submitBtn = regForm.querySelector("button[type='submit']");
let nameInput = allInput[0];

let allRegData = JSON.parse(localStorage.getItem("allRegData")) || [];
let editIndex = null;

const getRegData = () => {
    reglist.innerHTML = ""; 
    allRegData.forEach((data, index) => {
        reglist.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${data.name}</td>
            <td>
                <button index='${index}' class="edit-btn btn btn-sm btn-primary">Edit</button>
                <button index='${index}' class="delete-btn btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>
        `;
    });
    action();
}

const action = () => {
    let allDelBtn = reglist.querySelectorAll('.delete-btn');
    let allEditBtn = reglist.querySelectorAll('.edit-btn');

    for (let btn of allDelBtn) {
        btn.onclick = () => {
            let index = btn.getAttribute("index");
            allRegData.splice(index, 1);
            localStorage.setItem('allRegData', JSON.stringify(allRegData));
            getRegData();
        }
    }

    for (let btn of allEditBtn) {
    btn.onclick = () => {
        editIndex = btn.getAttribute("index"); 
        nameInput.value = allRegData[editIndex].name; 
        submitBtn.innerText = "Update";
        let myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
    }
}


}

regForm.onsubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      
        allRegData[editIndex].name = nameInput.value.toUpperCase();
        editIndex = null;
        submitBtn.innerText = "Submit";
    } else {
        
        allRegData.push({
            name: nameInput.value.toUpperCase(),
        });    
    }

    localStorage.setItem("allRegData", JSON.stringify(allRegData));
    regForm.reset();
    getRegData();
}

getRegData();
