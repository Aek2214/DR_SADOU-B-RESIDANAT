// Fonction pour afficher/cacher la liste
function toggleList(listId) {
    const list = document.getElementById(listId);
    list.classList.toggle("hidden");
}

// Ajouter un cours existant aux révisions
function addCourse(button) {
    const courseName = button.parentElement.textContent.replace("✅ Ajouter", "").trim();
    const revisedList = document.getElementById("revised-courses");
    const newCourse = document.createElement("li");
    newCourse.innerHTML = `${courseName} <button onclick="removeItem(this)">🗑 Supprimer</button>`;
    revisedList.appendChild(newCourse);
}

// Ajouter un nouveau cours
function addNewCourse() {
    const newCourseInput = document.getElementById("new-course");
    const courseName = newCourseInput.value.trim();
    if (courseName === "") return;
    
    const existingList = document.getElementById("existing-courses");
    const newItem = document.createElement("li");
    newItem.innerHTML = `${courseName} <button onclick="addCourse(this)">✅ Ajouter</button>`;
    existingList.appendChild(newItem);

    newCourseInput.value = ""; // Réinitialiser l'entrée
}

// Ajouter un QCM existant
function addQCM(button) {
    const qcmName = button.parentElement.textContent.replace("✅ Ajouter", "").trim();
    const selectedList = document.getElementById("selected-qcms");
    const newQCM = document.createElement("li");
    newQCM.innerHTML = `${qcmName} <button onclick="removeItem(this)">🗑 Supprimer</button>`;
    selectedList.appendChild(newQCM);
}

// Ajouter un nouveau QCM
function addNewQCM() {
    const newQCMInput = document.getElementById("new-qcm");
    const qcmContent = newQCMInput.value.trim();
    if (qcmContent === "") return;

    const qcmList = document.getElementById("existing-qcms");
    const newItem = document.createElement("li");
    newItem.innerHTML = `${qcmContent} <button onclick="addQCM(this)">✅ Ajouter</button>`;
    qcmList.appendChild(newItem);

    newQCMInput.value = ""; // Réinitialiser
}

// Supprimer un élément
function removeItem(button) {
    button.parentElement.remove();
}