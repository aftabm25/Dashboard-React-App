export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project ,
            authFirstName : profile.firstName,
            authLastName : profile.lastName,
            authId : authorId,
            createdAt : new Date()
        }).then(() => {
        dispatch({ type:'CREATE_PROJECT', project :project});   
    }
        ).catch((error) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error})
        }
        )
}
}