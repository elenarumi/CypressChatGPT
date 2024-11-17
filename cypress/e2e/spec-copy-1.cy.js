describe('Pruebas de inicio de sesión en Chat Hispano', () => {
  const baseUrl = 'https://chathispano.com/auth/login';

  beforeEach(() => {
    // Visita la página de inicio de sesión antes de cada prueba
    cy.visit(baseUrl, {
      failOnStatusCode: false, // No fallar si hay errores en la carga de la página
    });
  });

  it('Debería cargar la página de inicio de sesión correctamente', () => {
    // Verifica que el campo de correo electrónico está presente
    cy.get('input[id="MenuEmail"]', { timeout: 10000 }).should('be.visible');
    // Verifica que el campo de contraseña está presente
    cy.get('input[id="MenuPassword"]', { timeout: 10000 }).should('be.visible');
    // Verifica que el botón de inicio de sesión está presente
    cy.get('button[type="submit"]', { timeout: 10000 }).should('be.visible');
  });
});