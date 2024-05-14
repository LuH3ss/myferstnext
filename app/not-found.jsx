import Link from "next/link";

export default function Notfound() {
    return <section>
        <h1>404 Not Found</h1>
        <p>No se ha encontrado ningun resultado</p>
        <button>

        <Link href="/">Volver a Home?</Link>
        </button>
    </section>
}