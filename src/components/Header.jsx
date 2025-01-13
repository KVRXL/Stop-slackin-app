import propTypes from 'prop-types'

export function Header({todos}) {
    const todosLength = todos.length

    const taskOrTasks = todosLength === 1 ? 'task' : 'tasks'

    return(
        <header>
            <h1 className="text-gradient">You have {todosLength} Open {taskOrTasks}</h1>
        </header>
    )
}

Header.propTypes = {
    todos: propTypes.array
}