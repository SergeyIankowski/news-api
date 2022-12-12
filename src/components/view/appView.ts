import NewsInterface from '../../interfaces/view-interfaces/news-interfaces/news-interface';
import NewsViewData from '../../interfaces/view-interfaces/news-interfaces/news-view-data';
import SourceInterface from '../../interfaces/view-interfaces/sources-iterfaces/source-interface';
import SourceViewData from '../../interfaces/view-interfaces/sources-iterfaces/source-view-data';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: NewsInterface;
    sources: SourceInterface;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsViewData) {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    drawSources(data: SourceViewData) {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
