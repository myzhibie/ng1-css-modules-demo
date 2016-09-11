import aboutStyles from "./about.scss";
class AboutController {
  constructor() {
    this.name = '通过自定义事件进行directive通信';
    this.styles=aboutStyles;
    console.log(this.styles);
  }
}

export default AboutController;
