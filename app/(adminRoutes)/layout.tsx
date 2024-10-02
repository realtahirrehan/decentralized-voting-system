import { ReactNode } from "react"

const AdminLayout = ({ children }: {
    children: ReactNode
}) => {
    return (
        <>
            <nav></nav>
            <main>
                {children}
            </main>
        </>
    )
}

export default AdminLayout