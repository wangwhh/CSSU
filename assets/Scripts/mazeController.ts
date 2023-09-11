import { _decorator, Component, director, Node, Slider, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('mazeController')
export class mazeController extends Component {
    piece: Node;
    x0: number;
    y0: number;
    maze_x: number = 0;
    maze_y: number = 0;
    prev_progressX: number = 0;
    prev_progressY: number = 0;
    maze: number[][] = [
        [1, 0, 0, 0, 0, 0, 0, 0, 0], 
        [1, 0, 1, 1, 1, 0, 1, 0, 0], 
        [1, 0, 1, 0, 1, 1, 1, 1, 0], 
        [1, 1, 1, 0, 0, 1, 0, 0, 0], 
        [1, 0, 1, 1, 1, 0, 1, 1, 0], 
        [0, 1, 1, 0, 1, 0, 0, 1, 0], 
        [1, 1, 0, 0, 1, 1, 1, 1, 0], 
        [0, 1, 1, 1, 0, 1, 0, 1, 1]
    ];
    start() {
        this.piece = this.node.getChildByName('piece');
        this.x0 = this.piece.position.x;
        this.y0 = this.piece.position.y;
    }

    update(deltaTime: number) {
        
    }

    sliderXEventHandler(slider: Slider) {
        let tmp_maze_x = Math.ceil((slider.progress - 0.0625) * 8);
        if(tmp_maze_x <= 0) tmp_maze_x = 0;
        if(Math.abs(tmp_maze_x - this.maze_x) <= 1 && this.maze[this.maze_y][tmp_maze_x] == 1) {
            this.maze_x = tmp_maze_x;
            let x = this.x0 + 490 * slider.progress;
            this.piece.setPosition(new Vec3(x, this.piece.position.y, 0));
            this.prev_progressX = slider.progress;
        }else {
            slider.progress = this.prev_progressX;
        }
    }

    sliderYEventHandler(slider: Slider) {
        let tmp_maze_y = Math.ceil((1 - slider.progress - 0.0714) * 7);
        if(tmp_maze_y <= 0) tmp_maze_y = 0;
        if(Math.abs(tmp_maze_y - this.maze_y) <= 1 && this.maze[tmp_maze_y][this.maze_x] == 1) {
            this.maze_y = tmp_maze_y;
            let y = this.y0 - 420 * (1 - slider.progress);
            this.piece.setPosition(new Vec3(this.piece.position.x, y, 0));
            this.prev_progressY = slider.progress;
        }else {
            slider.progress = this.prev_progressY;
        }
    }

    onCheckBtnClicked() {
        if(this.maze_x == 8 && this.maze_y == 7){
            //director.loadScene("HuaRongDao")
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


