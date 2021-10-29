import axios from 'axios'
import Store from '../redux-store/Store'
import { apiEndPoints } from '../utils/constant'

const alertForUser = () => {
    alert("Something went wrong, Please try Again!");
}

export const getAllBooks = async () => {
    try {
        const booksResponse = await axios.get(`${apiEndPoints.books}`);

        const { data, status } = booksResponse || {};

        if (!status) {
            alertForUser()
            return;
        }

        Store.dispatch({ type: "ADD_BOOKS", payload: data })

    } catch (error) {
        console.log(error, "error from getAllBooks")
    }

}

export const getAllHomes = async () => {
    try {

        const housesResponse = await axios.get(`${apiEndPoints.houses}`)

        const { data, status } = housesResponse || {};

        if (!status) {
            alertForUser()
            return;
        }

        Store.dispatch({ type: "ADD_HOUSES", payload: data })

    } catch (error) {
        console.log(error, "error from getAllHomes")
    }
}

export const getAllCharacters = async () => {
    try {

        const charactersResponse = await axios.get(`${apiEndPoints.characters}`)

        const { data, status } = charactersResponse || {};

        if (!status) {
            alertForUser()
            return;
        }

        Store.dispatch({ type: "ADD_CHARACTERS", payload: data })

    } catch (error) {
        console.log(error, "error from getAllCharacters")
    }
}

