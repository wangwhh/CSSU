import { _decorator, Animation, Component, EventKeyboard, Input, input, KeyCode, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('gameController')
export class gameController extends Component {
    player: Node;

    @property(Animation)
    BodyAnim:Animation = null;

    start() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        this.player = this.node;
    }

    update(deltaTime: number) {
        
    }

    onKeyDown(event: EventKeyboard) {
        let x = this.player.getPosition().x;
        let y = this.player.getPosition().y;
        switch(event.keyCode) {
            case KeyCode.KEY_A:
                this.player.getChildByName('Body').setScale(new Vec3(-0.6, 0.6, 1));
                x -= 20;
                this.player.setPosition(new Vec3(x, y, 0));
                break;
            case KeyCode.KEY_D:
                this.player.getChildByName('Body').setScale(new Vec3(0.6, 0.6, 1));
                x += 20;
                this.player.setPosition(new Vec3(x, y, 0));
                break;

            case KeyCode.SPACE:
                tween(this.player)
                .by(0.1, {
                    position: new Vec3(0, 100, 0),
                },{
                    easing: 'quadOut'
                })
                .by(0.1, {
                    position: new Vec3(0, -100, 0)
                },{
                    easing: 'quadOut'
                })
                .start();
                break;
            default:
                return;

        }

        if(this.BodyAnim) {
            this.BodyAnim.play('run_cat');
        }
    }

    onKeyPressing(event: EventKeyboard) {
        let x = this.player.getPosition().x;
        let y = this.player.getPosition().y;

        switch(event.keyCode) {
            case KeyCode.KEY_A:
                x -= 15;
                this.player.setPosition(new Vec3(x, y, 0));
                break;

            case KeyCode.KEY_D:
                x += 15;
                this.player.setPosition(new Vec3(x, y, 0));
                break;

            case KeyCode.SPACE:
                break;
        }
    }

    onKeyUp(event: EventKeyboard) {
        this.BodyAnim.stop();
    }
    
}


