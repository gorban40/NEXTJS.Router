import Link from "next/link";

function ClientsPage() {
    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                <li>
                    <Link href={{
                        pathname: '/client/[id]',
                        query: {id: 'max'}
                    }}>
                        Max
                    </Link>
                </li>
                <li>
                    <Link href="/client/min">
                        min
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ClientsPage; 