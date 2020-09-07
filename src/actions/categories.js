const GET_CATEGORIES = 'GET_CATEGORIES'

export function fetchCategories() {
    return (dispatch) => {
        fetch('http://localhost:3000/categories')
        .then(response => response.json())
        // .then(obj => {
        //     console.log(obj)
        //     return obj
        // })
        .then(categories => dispatch({ type: GET_CATEGORIES, categories: categories }));
    };
}