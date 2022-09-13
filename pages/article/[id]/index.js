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

// getServerSideProps - (Server side rendrering) fetch data at every request
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();

    console.log(article);

    return {
        props: {
            article
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const articles = await res.json();

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({ params: { id: id.toString() } }));

    return {
        // paths: {params: {id: 1, id: 2}}
        paths: paths,
        fallback: false, //if data not exists in fetched data returns a 404 page
    }
}

// getServerSideProps - (Server side rendrering)
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();
//     return {
//         props: {
//             article
//         },
//     }
// }




export default Article;