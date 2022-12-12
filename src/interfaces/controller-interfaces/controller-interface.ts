import LoaderRespCallback from '../../objects-types/controller-types/loader-res-callback';
import NewsViewData from '../view-interfaces/news-interfaces/news-view-data';
import SourceViewData from '../view-interfaces/sources-iterfaces/source-view-data';

export default interface ControllerInterface {
    getSources(callback: LoaderRespCallback<SourceViewData>): void;
    getNews(e: Event, callback: LoaderRespCallback<NewsViewData>): void;
}
