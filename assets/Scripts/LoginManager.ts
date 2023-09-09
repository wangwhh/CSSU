import { _decorator, Component, EditBox, EventHandler, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('loginManager')
export class loginManager extends Component {
    onLoad() {
        // const editboxEventHandler = new EventHandler();
        // editboxEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
        // editboxEventHandler.component = 'loginManager';
        // editboxEventHandler.handler = 'onEditDidEnded';
        // editboxEventHandler.customEventData = 'foobar';

        // const editbox = this.node.getComponent(EditBox);
        // editbox.editingDidEnded.push(editboxEventHandler);
        // editbox.editingReturn.push(editboxEventHandler);
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    onButtonClicked() {    
        console.log('buttonClicked')
    }

    onEditDidEnded(editbox, customEventData) {
        console.log('onEditDidEnded', editbox._string)
    }

    onEditingReturn(editbox, customEventData) {
        console.log('onEditingReturn', editbox._string)
    }

}


