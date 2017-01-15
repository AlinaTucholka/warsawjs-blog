import {PostListComponent} from '../components/post-list.component.js';

export class AboutComponent extends PostListComponent {

    template() {
        return document.querySelector('#template-about').innerHTML;
    }

}