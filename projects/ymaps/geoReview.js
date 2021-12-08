import InteractiveMap from './interactiveMap';

export default class GeoReview {
  construtor() {
    this.map = new InteractiveMap ('map', this.onClick.bind(this));
    this.map.init().then(this.OnInit.bind(this));
  }

  async OnInit() {
    //..
  }

  onClick(coords) {
    //..
  }
}