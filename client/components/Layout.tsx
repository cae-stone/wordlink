import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>
        <h1>Word Game Header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer> Word Game Footer</footer>
    </>
  )
}
