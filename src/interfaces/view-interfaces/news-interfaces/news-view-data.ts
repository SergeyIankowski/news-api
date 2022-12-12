import NewsData from './news-data';

interface NewsViewData {
    articles: NewsData[];
    status: string;
    totalResults: number;
}

export default NewsViewData;
