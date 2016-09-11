let styles={};
import aStyle from './a.scss';
import bStyle from './ctrls.scss';
Object.assign(styles,aStyle,bStyle);
class CtrlsController {
  constructor() {
    this.name = 'directive通过Controllers通信';
    this.styles=styles;
  }
}

export default CtrlsController;
