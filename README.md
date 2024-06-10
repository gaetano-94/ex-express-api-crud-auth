# Esercizio

Partendo dall'esercizio di ieri, aggiungiamo l'autenticazione al nostro progetto! Create tutto il necessario (Model, Controller, rotte e validazioni) per implementare le due funzionalità principali:

1. Creazione nuovo utente: rotta POST /auth/register

2. Login utente: rotta POST /auth/login

3. Proteggete, attraverso un middleware che verifichi il token JWT passato nell'header della richiesta, le rotte di creazione, modifica e cancellazione della risorsa Post.

4. Aggiungete la policy CORS per consentire a qualunque dominio di accedere alle API (tanto siamo in locale).

## BONUS:

1. Aggiungete una relazione one-to-many fra i modelli User e Post.
2. Aggiungete un middleware che verifichi che un utente possa modificare o cancellare solo i Post a lui associati, altrimenti restituisca un errore 403.
