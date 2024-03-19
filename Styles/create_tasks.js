document.addEventListener("DOMContentLoaded", function () {
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function (event) {
      event.preventDefault();

      const taskNameInput = document.getElementById("taskName");
      const taskDateInput = document.getElementById("taskDate");

      const taskName = taskNameInput.value;
      const taskDate = taskDateInput.value;

      const newRow = document.createElement("tr");
 // JavaScript
    newRow.innerHTML = `
    <td class="td task2-col">${taskName}</td>
    <td class="td date-col">${taskDate}</td>
    <td class="td state2-col">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault"></label>
        </div>
    </td>
    <td class="actions-col">
        <button type="button" class="btn btn-sm btn-outline-primary edit-task-btn" data-bs-toggle="modal" data-bs-target="#editTaskModal">Edit</button>
    </td>
    `;


      taskList.appendChild(newRow);

      // Limpar os campos de entrada após adicionar a tarefa
      taskNameInput.value = "";
      taskDateInput.value = "";

      // Fechar o modal
      const newTaskModal = bootstrap.Modal.getInstance(document.getElementById('newTaskModal'));
      newTaskModal.hide();
  });
});
