import CustomerCard from 'customer_remote/CustomerCard'

const App = () => {
  const customer = {
    id: 'CUST-107',
    name: 'Ameen',
    email: 'ameen@example.com',
    status: 'Active',
  }

  return (
    <>
      <p>Hello React Build Application Buliding the app</p>
      <h1>PR Checks In Main Pages</h1>

      <CustomerCard customer={customer} />
    </>
  )
}

export default App