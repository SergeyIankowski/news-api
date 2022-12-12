import ControllerInterface from '../../interfaces/controller-interfaces/controller-interface';
import AppViewInterface from '../../interfaces/view-interfaces/app-view-interface';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: ControllerInterface;
    view: AppViewInterface;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => {
            this.view.drawSources(data);
        });
    }
}

export default App;
