// @ts-nocheck

// React component with styling and formatting errors
import React from 'react'

// Component with poor naming and structure
const badComponent = (props: any) => {
  // Missing proper indentation
  const { data, loading, error } = props

  // Inline styles instead of proper styling approach
  const inlineStyles = {
    backgroundColor: 'red',
    fontSize: '16px',
    marginTop: '10px'
  }

  // Poor JSX formatting
  return (
    <div style={inlineStyles}>
      <h1>Bad Component</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.map(item =>
        <div key={item.id} style={{ padding: '10px', margin: '5px' }}>
          <span>{item.name}</span>
          <button onClick={() => {
            // Bad event handler formatting
            console.log('clicked')
            handleClick(item.id)
          }}>Click</button>
        </div>
      )}
    </div>
  )
}

// Function with inconsistent spacing and formatting
const handleClick = (id: number) => {
  // Missing spaces around operators
  const result = id * 2 + 1
  console.log(result)
}

// Component with mixed quote styles and poor formatting  
const AnotherBadComponent: React.FC = () => {
  const items = ['item1', 'item2', 'item3']

  // Poor conditional rendering
  if (items.length === 0) {
    return <div>No items</div>
  }

  return (
    <>
      {items.map((item, index) => {
        return (
          <div key={index} className='item-wrapper'>
            <p style={{ color: 'blue', fontWeight: 'bold' }}>{item}</p>
          </div>
        )
      })}
    </>
  )
}

// Bad prop types and formatting
interface BadProps {
  data?: any;
  onClick: (value: string) => void;
  children: React.ReactNode;
}

// Component using class syntax (should be functional)
class OldStyleComponent extends React.Component<BadProps> {
  render() {
    return (
      <div onClick={() => this.props.onClick('test')}>
        {this.props.children}
      </div>
    )
  }
}

// Poor export structure
export default badComponent
export { AnotherBadComponent, OldStyleComponent }
