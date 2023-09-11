import { _decorator, Animation, Component, director, EventMouse, EventTouch, Input, input, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StartScene')
export class StartScene extends Component {

    @property(Animation)
    BodyAnim:Animation = null;

    start() {
        if(this.BodyAnim) {
            this.BodyAnim.play('rotateBall');
        }

        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);

        //input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
    }

    update(deltaTime: number) {
        
    }

    // onMouseUp(event: EventMouse) {
    //     director.loadScene("loginScene");
    // }

    onTouchStart(event: EventTouch) {
        director.loadScene("loginScene");
    }
}


