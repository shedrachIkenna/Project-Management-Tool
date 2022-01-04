const initState = {
    projects : [
        {id: 1, title: 'Learn Solidity', content: 'blah blah blah'},
        {id: 2, title: 'Develop a Forex Trading Strategy', content: 'blah blah blah'},
        {id: 3, title: 'Sharpen my Keyboard and bass guitar skills', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("project created", action.project)
    }
    return state;
}

export default projectReducer;