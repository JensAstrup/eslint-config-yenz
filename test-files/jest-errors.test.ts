// Jest test file with linting errors (TypeScript version)

// Missing test setup/teardown
describe('Test Suite', () => {
  // Missing beforeEach/afterEach when needed
  
  // Focused tests (should not be committed)
  fit('focused test', () => {
    expect(true).toBe(true)
  })
  
  // Skipped tests without explanation
  xit('skipped test', () => {
    expect(false).toBe(true)
  })
  
  // Empty test
  it('empty test', () => {
    // No assertions
  })
  
  // Test with only.todo (uncommitted development)
  it.only('only test', () => {
    expect(1 + 1).toBe(2)
  })
  
  // Poor test description
  it('test', () => {
    expect(true).toBeTruthy()
  })
  
  // Multiple expectations without proper grouping
  it('multiple unrelated expectations', () => {
    expect(1 + 1).toBe(2)
    expect('hello').toMatch(/world/)
    expect([1, 2, 3]).toHaveLength(3)
  })
  
  // Using toBe instead of toEqual for objects
  it('object comparison error', () => {
    const obj = { a: 1, b: 2 }
    expect(obj).toBe({ a: 1, b: 2 })
  })
  
  // Not using async/await properly
  it('async test error', () => {
    return Promise.resolve(42).then((result: number) => {
      expect(result).toBe(42)
    })
  })
  
  // Using done callback incorrectly
  it('done callback error', (done) => {
    setTimeout(() => {
      expect(true).toBe(true)
      // Missing done() call
    }, 100)
  })
  
  // Console.log in tests
  it('test with debug output', () => {
    console.log('debugging test')
    expect(1).toBe(1)
  })
  
  // Disabled describe block
  xdescribe('disabled describe', () => {
    it('test in disabled describe', () => {
      expect(true).toBe(true)
    })
  })
  
  // Test without proper setup
  it('test needing mock', () => {
    // Should mock dependencies but doesn't
    const result = someExternalFunction()
    expect(result).toBeDefined()
  })
  
  // Type errors
  it('type errors', () => {
    const value: string = 42 // Type error
    expect(value).toBe('42')
  })
})

// Missing function declaration
declare function someExternalFunction(): any 
