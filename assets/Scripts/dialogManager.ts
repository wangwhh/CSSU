import { _decorator, Component, director, EventTouch, Input, input, Label, Node, Sprite, tween, UIOpacity, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('dialogManager')
export class dialogManager extends Component {
    dialog1 = [{
        speaker: "player", str: "掉进了像素世界...", mood: "shock"
    }, {
        speaker: "cat", str: "你好啊，用户名", mood: "mi"
    }, {
        speaker: "player", str: "啊啊啊啊猫说话了！", mood: "shock"
    }, {
        speaker: "player", str: "等等，谁是用户名！？" , mood: "shock"
    }, {
        speaker: "cat", str: "不是你自己写的用户名吗？", mood: "general"
    }, {
        speaker: "player", str: "不想吐槽了。。", mood: "wuyu"
    }, {
        speaker: "cat", str: "最近人工智能大肆入侵我院，看你名字这么奇怪，你肯定是机器人！", mood: "mi"
    }, {
        speaker: "player", str: "我不叫用户名。。", mood: "wuyu"
    }, {
        speaker: "cat", str: "而且，最重要的是，你和我们的画风不一样！", mood: "mi"
    }, {
        speaker: "player", str: "是我不小心掉进来的", mood: "wuyu"
    }, {
        speaker: "cat", str: "不要解释了！通过我的考验再说吧！", mood: "mi"
    }];

    dialog2 = [{
        speaker: "cat", str: "恭喜你通过挑战！", mood: "happy"
    }, {
        speaker: "cat", str: "这么厉害，要不要加入我们计算机学院学生会啊！", mood: "mi"
    }, {
        speaker: "player", str: "计算机学院学生会？", mood: "general"
    }, {
        speaker: "cat", str: "是的，刚才出现了很多次的【CSSU】就是我们哦", mood: "general"
    }, {
        speaker: "cat", str: "我们有五个小组，办公、传媒、权服、文体、学术，负责承办计算机学院的各项活动~", mood: "general"
    }, {
        speaker: "cat", str: "想了解更多，可以关注公众号【ZJU微计录】，加入纳新群！", mood: "general"
    }, {
        speaker: "cat", str: "对啦，为了奖励你通关，可以14-17日来云峰广场CSSU现宣摊位领取奖品哦~记得截图^-^", mood: "happy"
    }, {
        speaker: "player", str: "好耶！！马上就到！", mood: "happy"
    }];

    dialog3 = [{
        speaker: "cat", str: "这就放弃啦，你也太菜了！", mood: "mi"
    }, {
        speaker: "player", str: "是题目太逆天了吧", mood: "wuyu"
    }, {
        speaker: "cat", str: "哈哈，不过这么菜，你肯定是人类了", mood: "happy"
    }, {
        speaker: "cat", str: "人类，要不要加入我们计算机学院学生会啊", mood: "mi"
    }, {
        speaker: "player", str: "计算机学院学生会？", mood: "general"
    }, {
        speaker: "cat", str: "是的，刚才出现了很多次的【CSSU】就是我们哦", mood: "general"
    }, {
        speaker: "cat", str: "我们有五个小组，办公、传媒、权服、文体、学术，负责承办计算机学院的各项活动~", mood: "general"
    }, {
        speaker: "cat", str: "想了解更多，可以关注公众号【ZJU微计录】，加入纳新群！", mood: "general"
    }, {
        speaker: "cat", str: "对了，14-17日我们在云峰广场有现宣~欢迎来玩^-^", mood: "happy"
    }, {
        speaker: "player", str: "好耶！！马上就到！", mood: "happy"
    }];

    dialog_cnt = 0;
    dialog;
    Label: Node;
    cat: Node;
    player: Node;

    start() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        if(this.node.name == "Dialog1") {
            this.dialog = this.dialog1;
            director.preloadScene('selectCat')
        } else if(this.node.name == "Dialog2") {
            this.dialog = this.dialog2;
        } else if(this.node.name == "Dialog3") {
            this.dialog = this.dialog3;
        }
        this.Label = this.node.getChildByName('Labels');
        this.cat = this.node.getChildByName('cat');
        this.player = this.node.getChildByName('player');

        this.nextDialog();
    }

    update(deltaTime: number) {
        
    }

    onTouchStart(event: EventTouch) {
        this.nextDialog();
    }

    nextDialog() {
        if(this.dialog_cnt < this.dialog.length){
            if(this.dialog[this.dialog_cnt].speaker == "cat"){
                this.catSay(this.dialog[this.dialog_cnt].str, this.dialog[this.dialog_cnt].mood);
            }else if(this.dialog[this.dialog_cnt].speaker == "player"){
                this.playerSay(this.dialog[this.dialog_cnt].str, this.dialog[this.dialog_cnt].mood);
            }
            this.dialog_cnt++;
        }else{
            if(this.node.name == "Dialog1") {
                director.loadScene('selectCat')
            }else if(this.node.name == "Dialog2" || this.node.name == "Dialog3") {
                console.log(this.node.getChildByName('ending'))
                tween(this.node.getChildByName('ending').getComponent(UIOpacity))
                .to(0.5, {
                    opacity: 255
                })
                .start()
                console.log('q')
            }
            
        }
    }
    
    catSay(str: string, mood: string) {
        this.cat.getChildByName('general').active = false;
        this.cat.getChildByName('happy').active = false;
        this.cat.getChildByName('mi').active = false;
        this.cat.getChildByName(mood).active = true;
        tween(this.cat)
        .to(0.1,{
            scale: new Vec3(1.2, 1.2, 0)
        })
        .start();

        tween(this.player)
        .to(0.1,{
            scale: new Vec3(1.6, 1.6, 0)
        })
        .start();
        this.Label.getChildByName('Label_cat').active = true;
        this.Label.getChildByName('Label_player').active = false;
        this.Label.getChildByName('dialog').getComponent(Label).string = str;
    }

    playerSay(str: string, mood: string) {
        this.player.getChildByName('general').active = false;
        this.player.getChildByName('happy').active = false;
        this.player.getChildByName('shock').active = false;
        this.player.getChildByName('wuyu').active = false;
        this.player.getChildByName(mood).active = true;
        tween(this.player)
        .to(0.1,{
            scale: new Vec3(1.8, 1.8, 0)
        })
        .start();

        tween(this.cat)
        .to(0.1,{
            scale: new Vec3(1, 1, 0)
        })
        .start();
        this.Label.getChildByName('Label_cat').active = false;
        this.Label.getChildByName('Label_player').active = true;
        this.Label.getChildByName('dialog').getComponent(Label).string = str;
    }
    
}


