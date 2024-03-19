document.addEventListener("DOMContentLoaded", function () {
    const editTaskModal = new bootstrap.Modal(document.getElementById('editTaskModal'));
    const updateTaskBtn = document.getElementById('updateTaskBtn');
    const deleteTaskBtn = document.getElementById('deleteTaskBtn');
    let currentTaskRow; // Armazenar a linha da tarefa atualmente sendo editada/deletada

    // Função para preencher o formulário de edição com os detalhes da tarefa
    function fillEditForm(taskName, taskDate) {
        document.getElementById('editTaskName').value = taskName;
        document.getElementById('editTaskDate').value = taskDate;
    }

    // Evento de clique no botão "Edit"
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('edit-task-btn')) {
            const taskRow = event.target.closest('tr');
            const taskName = taskRow.querySelector('.task2-col').innerText;
            const taskDate = taskRow.querySelector('.date-col').innerText;

            fillEditForm(taskName, taskDate);
            currentTaskRow = taskRow; // Armazenar a linha da tarefa atual
            editTaskModal.show();
        }
    });

    // Evento de envio do formulário de edição
    document.getElementById('editTaskForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Obter os novos valores do formulário de edição
        const editedTaskName = document.getElementById('editTaskName').value;
        const editedTaskDate = document.getElementById('editTaskDate').value;

        // Atualizar os valores da tarefa na linha da tabela
        currentTaskRow.querySelector('.task2-col').innerText = editedTaskName;
        currentTaskRow.querySelector('.date-col').innerText = editedTaskDate;

        // Fechar o modal de edição
        editTaskModal.hide();
    });

    // Evento de clique no botão "Delete"
    deleteTaskBtn.addEventListener('click', function () {
        currentTaskRow.remove(); // Remover a linha da tabela da tarefa atual
        editTaskModal.hide(); // Fechar o modal de edição
    });
});
