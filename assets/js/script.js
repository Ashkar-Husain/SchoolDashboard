fetch("assets/js/menus.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Something went wrong, please try again later");
    } else {
      return response.json();
    }
  })
  .then((data) => {
    renderSidebar(data);
  })
  .catch((error) => {
    console.log("File not found", error);
  });

function renderSidebar(data) {
  const uls = document.querySelector(".uls");

  let ul = "";
  if (data.length > 0) {
    for (let d of data) {
      ul += `
            <div class="ul">
                        <h5 onclick="toggleMenus(this)"><span>${d.icon}</span> <span>${d.title}</span><small>></small></h5>
                        <ul>
                          ${d.submenu.map((menu) => `<li>${menu}</li>`).join("")}                        
                            
                        </ul>
                    </div>
            `;
    }
  } else {
    ul += "Data Not Found";
  }

  uls.innerHTML = ul;
}

//* toggle Menus
function toggleMenus(module) {
  const ul = module.nextElementSibling;
  const smallTag = module.querySelector("small");
  ul.classList.toggle("hide-ul");
  if (ul.classList.contains("hide-ul")) {
    smallTag.innerHTML = "^";
  } else {
    smallTag.innerHTML = ">";
  }
}

//* toggle sidebar
function toggleSidebar() {
  const hamberger = document.querySelector(".hamberger");
  const sidebar = document.querySelector(".sidebar");
  const header = document.querySelector("header");
  hamberger.addEventListener("click", function () {
    sidebar.classList.toggle("hide-sidebar");
    header.classList.toggle("header-full");

    if (sidebar.classList.contains("hide-sidebar")) {
      hamberger.innerHTML = "☰";
    } else {
      hamberger.innerHTML = "❌";
    }
  });
}

toggleSidebar();

