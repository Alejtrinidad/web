import checkComplete from "assets/js/check.js";

(()=>{
    const btn = document.querySelector('[data-form-btn]');

    const crearTask = (evento) =>{
        evento.preventDefault ();

        const input = document.querySelector('[data-form-input]');
        console.log (input.value);

        const value = input.value;

        const lista = document.querySelector ('[data-List]')

        const task = document.createElement('li');
        task.classList.add('form-register')
        input.value = '';

        const taskContent = document.createElement('section')
        const taskinp = document.createElement('input')

            taskContent.appendChild(checkComplete())
            taskContent.appendChild(taskinp);

        const content = 
            task.appendChild(taskContent)
            lista.appendChild(task)

    }

    btn.addEventListener('click', crearTask)
})();