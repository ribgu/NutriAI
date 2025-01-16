import AppLayout from '@/view/components/AppLayout/AppLayout'
import Link from 'next/link'

export default function App() {
    return (
        <AppLayout>
            <Link href="/dashboard">Go to Dashboard</Link>
        </AppLayout>
    )
}
