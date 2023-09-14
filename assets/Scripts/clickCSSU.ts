import { _decorator, Component, director, EventTouch, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('clickCSSU')
export class clickCSSU extends Component {
    touch_cnt = 0;
    circles: Node;
    start() {
        this.circles = this.node.getChildByName('circles');
        this.hideCircles();
        this.node.getChildByName('ikun1').active = false;
        this.node.getChildByName('ikun2').active = false;
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this, true);
        director.preloadScene("HuaRongDao");
    }

    update(deltaTime: number) {
        
    }

    hideCircles() {
        this.circles.getChildByName('1').active = false;
        this.circles.getChildByName('2').active = false;
        this.circles.getChildByName('3').active = false;
        this.circles.getChildByName('4').active = false;
    }

    onTouchStart(event: EventTouch) {
        this.touch_cnt ++;
        if(this.touch_cnt <= 4){
            let circle = this.circles.getChildByName(this.touch_cnt.toString());
            let touchX = event.getUILocation().x;
            let touchY = event.getUILocation().y;
            
            circle.setWorldPosition(new Vec3(touchX, touchY, 0));
            circle.active = true;
        }
    }

    onCheckBtnClicked() {
        this.touch_cnt --;
        if(this.isFinished()){
            director.loadScene("HuaRongDao")
        }else{
            tween(this.node.getChildByName('checkButton'))
            .by(0.05, {
                position: new Vec3(-5, 0, 0)
            })
            .by(0.05, {
                position: new Vec3(8, 0, 0)
            })
            .by(0.03, {
                position: new Vec3(-3, 0, 0)
            })
            .start();
            this.touch_cnt = 0;
            this.hideCircles();
        }
    }

    isFinished() {
        if(this.touch_cnt != 4) return false;
        let clicked_str:string = '';
        for(let i=1; i<=4; i++) {
            let circle_x = this.circles.getChildByName(i.toString()).getPosition().x;
            let circle_y = this.circles.getChildByName(i.toString()).getPosition().y;

            if(circle_x <= -160 && circle_x >= -220 && circle_y <= -110 && circle_y >= -180) {
                clicked_str += 'C'
            }else if(circle_x <= -70 && circle_x >= -170 && circle_y >=90 && circle_y <= 190) {
                clicked_str += 'S'
            }else if(circle_x <= -200 && circle_x >= -270 && circle_y >= 160 && circle_y <= 210) {
                clicked_str += 'S'
            }else if(circle_x >= 10 && circle_x <= 80 && circle_y >= -60 && circle_y <= 10) {
                clicked_str += 'U'
            }else if(circle_x >= 200 && circle_x <= 270 && circle_y >= 160 && circle_y <= 220) {
                clicked_str += 'I'
            }else if(circle_x >= 100 && circle_x <= 170 && circle_y >= 60 && circle_y <= 130) {
                clicked_str += 'K'
            }else if(circle_x >= 80 && circle_x <= 190 && circle_y >= -260 && circle_y <= -140) {
                clicked_str += 'N'
            }
        }
        if(clicked_str == 'CSSU') {
            return true;
        }else if(clicked_str =='IKUN') {
            this.node.getChildByName('ikun1').active = true;
            this.node.getChildByName('ikun2').active = true;
        }

        return false;
    }
}


