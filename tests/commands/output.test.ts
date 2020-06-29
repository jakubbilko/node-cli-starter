import output, { description, command } from '../../src/commands/output';

describe('Output command', () => {
  test('should contain description', () => {
    expect(description).toBeDefined();
  });

  test('should contain the command', () => {
    expect(command).toBeDefined();
  });

  test('should output string to console', () => {
    const spy = jest.spyOn(global.console, 'log');
    output('some test string input');
    expect(spy).toHaveBeenCalled();
  });
});