import indecision from '../images/indecision.png'
import clientManager from '../images/managerapp.png'
import contactManager from '../images/contactmanager.png'

export const portfolio = {
    contactManager: {
        name: 'Contact Manager',
        description: 'Easy contact manager application built with React designed with bootstrap. Fetching data from Json Placeholder, implemented with context API.',
        live: true,
        url: 'https://csabat.github.io/reactcontactmanager',
        src: contactManager,
        github: 'https://github.com/csabat/reactcontactmanager'
    },
    indecision: {
        name: 'Indecision App',
        description: 'Simple React App helping you what to do first. Add items to the list and the computer return a random element.',
        live: false,
        src: indecision,
        url: '',
        github: 'https://github.com/csabat/indecision-app'
    },
    clientManager: {
        name: 'Client Manager',
        description: 'This app allows you to manage your clients financial state. Implemented Log in with Firebase, used Firestore with Redux as a Database.',
        live: true,
        url: "https://csabat.github.io/managerapp/",
        src: clientManager,
        github: 'https://github.com/csabat/managerapp'
    }
}