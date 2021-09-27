
const sessions = {}

// const server_fingerprint () {}

const auth_new = function ( fingerprint, id ) {

    // [Pending] We must generate and compare the server-side fingerprint as well

    sessions[ fingerprint ] = id;

}

const auth_check = function ( fingerprint ) {

    return sessions[ fingerprint ] || false;

}

export { auth_new, auth_check }