describe('Pruebas de inicio de sesión en chatgpt.com', () => {
    beforeEach(() => {
      // Configurar la sesión con cy.session
      cy.session('user-session', () => {
        cy.visit('https://chatgpt.com/login');
        
        // Rellenar los campos de inicio de sesión
        cy.get('#email').type('usuario@ejemplo.com'); // Selector del campo de email
        cy.get('#password').type('contraseña123'); // Selector del campo de contraseña
        cy.get('button[type="submit"]').click(); // Selector del botón de inicio de sesión
  
        // Verificar que se inició sesión correctamente (redirección o elemento en pantalla)
        cy.url().should('include', '/dashboard');
      });
    });
  
    it('Debería mostrar el dashboard después de iniciar sesión', () => {
      // Visitar el dashboard directamente con la sesión activa
      cy.visit('https://chatgpt.com/dashboard');
  
      // Verificar que el usuario está autenticado y en el dashboard
      cy.contains('Bienvenido, usuario').should('be.visible');
      cy.url().should('include', '/dashboard');
    });
  
    it('Debería permitir acceder a la configuración del perfil', () => {
      // Acceder a la página de configuración del perfil
      cy.visit('https://chatgpt.com/settings');
  
      // Verificar que la página de configuración está accesible
      cy.contains('Configuración de Perfil').should('be.visible');
    });
  });
  