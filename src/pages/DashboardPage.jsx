import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function DashboardPage() {
    return(
        <div className='min-h-screen grid grid-cols-[auto,1fr]'>
            <section>
                <Sidebar />
            </section>
            <div className="flex flex-col w-full">
                <header className='bg-white p-4 shadow-md'>
                    <h1 className='text-2xl font-bold'>Header</h1>
                </header>
                <main className='flex-1 bg-gray-200 p-8'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}