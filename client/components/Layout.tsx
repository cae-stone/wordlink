import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <body className='bg-gray-100 flex flex-col min-h-screen'>
      <header className="bg-indigo-600 text-white p-2">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">WordLink</h1>
      </div>
      </header>
      <main className="flex-grow container mt-8 mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-slate-900 text-white p-4 mt-auto">  <div className="container mx-auto text-center">Word Game Footer</div></footer>
    </body>
  )
}
