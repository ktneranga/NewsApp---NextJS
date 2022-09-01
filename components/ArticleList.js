import articleStyles from '../styles/Articles.module.css';
import ArticleItem from '../components/ArticleItem';

const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article) => <ArticleItem key={article.id} article={article} />)}
        </div>
    );
}

export default ArticleList;