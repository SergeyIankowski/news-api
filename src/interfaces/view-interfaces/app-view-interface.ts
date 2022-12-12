import NewsViewData from './news-interfaces/news-view-data';
import SourceViewData from './sources-iterfaces/source-view-data';

interface AppViewInterface {
    drawNews(data: NewsViewData): void;
    drawSources(data: SourceViewData): void;
}

export default AppViewInterface;
