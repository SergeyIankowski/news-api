import SourceData from '../sources-iterfaces/source-data';

interface NewsData {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: SourceData;
    title: string;
    url: string;
    urlToImage: string;
}

export default NewsData;
