import { useRouter } from "next/router";

const Punks = () => {
    const router = useRouter();
    const { id } = router.query;

    return <div>{id}</div>;
};

export default Punks;
export async function getServerSideProps({ query }) {
    const { id } = query;
    const isRedirect = isNaN(id, 10) || parseInt(id, 10) > 9999;

    if (isRedirect) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {}, // will be passed to the page component as props
    };
}
