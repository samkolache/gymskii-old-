import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <>
        <div className="bg-brand min-h-screen w-full flex flex-col items-center justify-center">
            <h1 className="text-5xl">404 Not Found</h1>
            <Link to = "/" className="underline">Return to gymskii</Link>
        </div>
            
        </>
    )
}