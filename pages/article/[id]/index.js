import Meta from "../../../components/Meta";
import { useRouter } from "next/router";
import Link from "next/link";

const Article = ({ article }) => {
    // const router = useRouter();
    // distructure
    // const { id } = router.query;

    return (
        <>
            <Meta title={article.title} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    );
}

// getServerSideProps - (Server side rendrering)
export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();
    return {
        props: {
            article
        },
    }
}




export default Article;