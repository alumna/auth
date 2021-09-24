import { auth_new, auth_check } from '../src/index';



describe( 'Alumna Auth tests', () => {

    test( '1. Creating a new token', async () => {

        const fingerprint   = "123abc"
        const id            = "user@provider.com"
    
        auth_new( fingerprint, id )
    
        expect(auth_check(fingerprint)).toBe(id)
    
    });

    test( '2. Checking for an inexistent fingerprint', async () => {

        const fingerprint   = "789xyz"
        
        expect(auth_check(fingerprint)).toBe( false )
    
    });
    
});