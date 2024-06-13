import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <body className='block bg-gray-100 flex flex-col min-h-screen'>
      <header className="bg-indiblue-300 text-white p-2">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">WordLink</h1>
      </div>
      </header>
      <main className="container my-auto mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-slate-900 text-white p-4 mt-auto">  <div className="container mx-auto text-center">Inspired by NY Times Connections - © 2024</div></footer>
    </body>
  )
}
