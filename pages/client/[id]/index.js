import { useRouter } from "next/router";

function ClientProjectsPage() {

    const router = useRouter();

    console.log(router.query);

    function loadProjectHandler(e) {
        router.push("/client/max/projectA");
    }

    return (
        <div>
            <h1>The Projects of given Client</h1>
            <button onClick={loadProjectHandler} > Load Project A </button>
        </div>
    )
}

export default ClientProjectsPage