import { _decorator, Component, director, Node, random, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('hrdController')
export class hrdController extends Component {
    finish_pics:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    cur_pics:number[];
    pos:Vec3[] = [
        new Vec3(-214,  214,    0), 
        new Vec3(0,     214,    0), 
        new Vec3(214,   214,    0), 
        new Vec3(-214,  0,      0), 
        new Vec3(0,     0,      0), 
        new Vec3(214,   0,      0), 
        new Vec3(-214,  -214,   0), 
        new Vec3(0,     -214,   0),
        new Vec3(214,   -214,   0)
    ];
    start() {
        do{
            this.cur_pics = this.getRandomData();
        }while(!this.hasEvenInversions(this.cur_pics));
        this.adjustPos();
    }

    update(deltaTime: number) {
        
    }

    adjustPos() {
        for(let i = 0; i < 8; i++){
            let child = this.node.getChildByName('squares').getChildByName(this.cur_pics[i].toString())
            child.setPosition(this.pos[i]);
        }
    }

    // 生成随机数组，偶数个逆序数对
    getRandomData() {
        let random_arr = [];
        while (random_arr.length < 8) {
            let random = Math.floor(Math.random() * 8) + 1;
            if (random_arr.indexOf(random) == -1) {
                random_arr.push(random);
            }
        }
        random_arr.push(0);   // 添加0作为最后的空白位
        return random_arr;
    }

    hasEvenInversions(arr: number[]): boolean {
        let inversions = 0;
        for (let i = 0; i < arr.length - 1; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
              inversions++;
            }
          }
        }
        return inversions % 2 === 0;
    }

    move(num:number) {
        let up = num - 3;
        let down = num + 3;
        let left = num - 1;
        let right = num + 1;
        let ret = -1;
        if(up >= 0 && this.cur_pics[up] == 0){   
            // 向上移动
            this.move_pics(num, up);    // 把num向上移动
            ret = up;
        }else if(down < 9 && this.cur_pics[down] == 0){
            // 向下移动
            this.move_pics(num, down);
            ret = down;
        }else if(left % 3 != 2 && this.cur_pics[left] == 0){
            // 向左移动
            this.move_pics(num, left);
            ret = left;
        }else if(right % 3 != 0 && this.cur_pics[right] == 0){
            // 向右移动
            this.move_pics(num, right);
            ret = right;
        }
        return ret;
    }
    move_pics(tomove:number, to:number) {
        let tmp = this.cur_pics[tomove];
        this.cur_pics[tomove] = 0;
        this.cur_pics[to] = tmp;
    }

    onSquareClicked(button){
        var num = this.cur_pics.indexOf(+button.target._name);
        let moveTo = this.move(num);
        if(moveTo != -1){
            tween(button.target)
            .to(0.1, {
                position: this.pos[moveTo]
            })
            .start();
        }
    }

    onCheckBtnClicked(){
        if(this.cur_pics.toString() == this.finish_pics.toString()){
            director.loadScene('maze');
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


