import { _decorator, Component, director, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('selectCat')
export class selectCat extends Component {
    buttonClicked:number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    finishClicked:number[] = [0, 0, 0, 0, 0, 1, 1, 0, 0];
    start() {
        
    }

    update(deltaTime: number) {
        
    }

    onSquareClicked(button) {
        var num = + button.target._name.charAt(6)
        if(this.buttonClicked[num - 1] == 0){
            this.buttonClicked[num - 1] = 1;
            tween(button.target)
            .to(0.1, {
                scale: new Vec3(0.9, 0.9, 1)
            })
            .start();
        }else if(this.buttonClicked[num - 1] == 1){
            this.buttonClicked[num - 1] = 0;
            tween(button.target)
            .to(0.1, {
                scale: new Vec3(1, 1, 1)
            })
            .start();
        }
    }
    onCheckBtnClicked() {
        if(this.buttonClicked.toString() == this.finishClicked.toString()){
            director.loadScene("clickCSSU")
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
        }
    }
    
}


