
// (AAA) Pattern
describe('Test <DemoComponent />', () => {
    test('This test should not fail', () => {

        // Arrange
        const message1 = 'Hello world';
    
        // Act
        const message2 = message1.trim();
    
        // Assert
        expect(message2).toBe(message1);
    
    });

});
