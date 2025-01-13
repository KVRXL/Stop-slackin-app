import propTypes from 'prop-types';

export function Tabs({ todos, selectedTab, setSelectedTab }) {
    const tabs = ['All', 'Open', 'Completed'];
    return (
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === "All" 
                    ? todos.length 
                    : tab === 'Open' 
                        ? todos.filter(val => !val.complete).length 
                        : todos.filter(val => val.complete).length;

                return (
                    <button onClick={() => { setSelectedTab(tab); }} key={tabIndex}>
                        <h4 className={"tab-button" + (tab === selectedTab ? ' tab-selected' : ' ')}>
                            {tab} <span>{numOfTasks}</span>
                        </h4>
                    </button>
                );
            })}
        </nav>
    );
}

Tabs.propTypes = {
    todos: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number,
            complete: propTypes.bool.isRequired,
            text: propTypes.string,
        })
    ).isRequired,
    selectedTab: propTypes.string.isRequired,
    setSelectedTab: propTypes.func.isRequired,
};
