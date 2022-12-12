import NewsViewData from '../../interfaces/view-interfaces/news-interfaces/news-view-data';
import LoaderRespCallback from '../../objects-types/controller-types/loader-res-callback';
import SourceViewData from '../../objects-types/controller-types/loader-res-data';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: LoaderRespCallback<SourceViewData>) {
        super.getResp<SourceViewData>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: LoaderRespCallback<NewsViewData>) {
        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<NewsViewData>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
