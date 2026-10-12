// ==========================================
// ACCOUNT SEARCH
// ==========================================

const searchInput = document.getElementById("accountSearch");
const searchButton = document.getElementById("searchButton");
const tableBody = document.getElementById("accountTableBody");

// Search function
function searchAccounts() {
  const searchValue = searchInput.value.toLowerCase().trim();

  const rows = tableBody.querySelectorAll("tr");

  rows.forEach(function (row) {
    const accountData = row.textContent.toLowerCase();

    if (accountData.includes(searchValue)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Search button
searchButton.addEventListener("click", searchAccounts);

// Search while typing
searchInput.addEventListener("input", searchAccounts);

// Press Enter
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    searchAccounts();
  }
});

// ==========================================
// ADD ACCOUNT
// ==========================================

const accountForm = document.getElementById("accountForm");

accountForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get values

  const username = document.getElementById("username").value.trim();

  const roleId = document.getElementById("roleId").value.trim();

  const lastName = document.getElementById("lastName").value.trim();

  const firstName = document.getElementById("firstName").value.trim();

  const contactNo = document.getElementById("contactNo").value.trim();

  const email = document.getElementById("email").value.trim();

  // Create new row

  const newRow = document.createElement("tr");

  newRow.innerHTML = `

            <td class="p-4 border-bottom">
                ${username}
            </td>

            <td class="p-4 border-bottom">
                ${roleId}
            </td>

            <td class="p-4 border-bottom">
                ${firstName} ${lastName}
            </td>

            <td class="p-4 border-bottom">
                ${contactNo}
            </td>

            <td class="p-4 border-bottom">
                ${email}
            </td>

            <td class="p-4 border-bottom">

                <button
                    type="button"
                    class="delete-account bg-danger text-white border-0 radius-lg px-4 py-2">

                    Delete

                </button>

            </td>

        `;

  // Add row

  tableBody.appendChild(newRow);

  // Clear form

  accountForm.reset();

  alert("Account added successfully!");
});

// ==========================================
// DELETE ACCOUNT
// ==========================================

tableBody.addEventListener("click", function (event) {
  // Check if Delete button was clicked

  if (event.target.classList.contains("delete-account")) {
    // Get the table row

    const row = event.target.closest("tr");

    // Ask for confirmation

    const confirmDelete = confirm("Are you sure you want to delete this account?");

    // Delete the row

    if (confirmDelete) {
      row.remove();

      alert("Account deleted successfully!");
    }
  }
});

// ==========================================
// CLOSE / CLEAR FORM
// ==========================================

const closeForm = document.getElementById("closeForm");

closeForm.addEventListener("click", function () {
  accountForm.reset();
});
