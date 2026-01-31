const searchEl = document.querySelector('#search_btn');

searchEl.oninput = () => {
    search();
};

const search = () => {
    let value = searchEl.value.toLowerCase();
    let tr = reglist.querySelectorAll("tr");

    for (let i = 0; i < tr.length; i++) {
        let allTd = tr[i].querySelectorAll("td");

        if (allTd.length > 0) {
            let name = allTd[2].innerText.toLowerCase();

            if (name.indexOf(value) !== -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
};