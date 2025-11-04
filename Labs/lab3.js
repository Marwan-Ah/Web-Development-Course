class Task {
    tasks = [];
    constructor(){
        this.list = document.getElementById('List');
    }
    print() {
        console.log('first')
        let txt = document.getElementById('inp').value.trim();
        if (txt === '') return;
        if (this.tasks.map(task => task.text).includes(txt)) return;
        this.tasks.push({ text: txt, completed: false });
        this.render();
    }

    render(){
        console.log('second');
        this.list.innerHTML = '';
        this.tasks.forEach((task,indx) => {
            const li = document.createElement('li');
            li.textContent = task.text;
            if(task.completed) {
                li.classList.add('completed');
            }

            li.addEventListener('click', () => {
                task.completed = !task.completed;
                li.classList.toggle('completed');
            });
            const delBtn = document.createElement('button');
            delBtn.textContent = 'X';
            delBtn.addEventListener('click', (e) => this.delete(e,indx));
            li.appendChild(delBtn);
            this.list.appendChild(li);
        })

    }

    delete(e,indx){
        this.tasks.splice(indx, 1);
        e.target.parentElement.remove();
    }
}

let toDo = new Task();
document.getElementById('cin').addEventListener('click', () => toDo.print());

