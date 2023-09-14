import { _decorator, Component, director, EditBox, EventHandler, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('loginManager')
export class loginManager extends Component {
    userInput:string;
    start() {
        this.node.getChildByName('login').getChildByName('userName').active = false;
        director.preloadScene('dialog1');
    }

    update(deltaTime: number) {
        
    }

    onButtonClicked() {    
        if(this.userInput == '用户名'){
            director.loadScene('dialog1')
        }else{
            tween(this.node.getChildByName('login').getChildByName('Button'))
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
            this.node.getChildByName('login').getChildByName('userName').active = true;
        }
    }

    onEditDidEnded(editbox, customEventData) {
        this.userInput = editbox._string;
    }

}


