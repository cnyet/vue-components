const MyTodo = ({ props }) => {
 // 允许绑定的HTML Attribute
  const property = {
    // 与v-bind:class的api相同
    // 接受一个字符串、对象或字符串和对象组成的数组
    'class': {
      container: true,
      input: true
    },
    // 与v-bind:style 的API相同
    // 接受一个字符串、对象、或对象组成的数组  
    style: {
      color: 'red',
      fontSize: '14px'
    },
    // 普通的HTML attribute
    attrs: {
      id: 'input'
    },
    // 组件 prop
    props: {
      myProp: 'text'
    },
    // DOM property
    domProps: {
      innerHTML: 'input text'
    },
    // 事件监听器在 on 内
    // 但不再支持如 v-on:keyup.enter 这样的修饰器
    // 需要在处理函数中手动检查keyCode
    on: {
      input: function(event) {
        console.log(event);
      }
    },
    // 仅用于组件，用于监听原生事件，而不是组件内部使用
    // vm.$emit触发的事件 
    nativeOn: {
      click: function(event) {
        console.log(event);
      }
    },
    // 自定义指令，注意，你无法对binding中的oldValue赋值，因为vue已经自动为你进行了同步
    directives: [
      {
        name: 'my-custom-directive',
        value: '2',
        expression: '1 + 1',
        arg: 'foo',
        modifires: {
          bar: true
        }
      }
    ],
    // 作用域插槽的格式
    // { name: props => VNode | Array<VNode> }
    scopedSlots: {
      default: props => createElement('span', props.text)
    },
    // 如果组件是其他组件的子组件，需要插槽指定名称
    slot: 'my-slot',
    // 其他特殊顶层 property
    key: 'myKey',
    ref: 'myRef',
    // 如果你在渲染函数中给多个元素都应用了相同的 ref 名
    // 那么 $refs.myRef 会变成一个数字
    refInFor: true
  };
  console.log(props);
  const inputAttr = {
    type: 'text',
    placeholder: 'please input'
  };
  const onEvent = {
    input: function(event) {
      props.change(event.target.value);
    }
  };
  return (
    <div>
      <p>{props.message}</p>
      <input attrs={inputAttr} on={onEvent} />
    </div>
  );
};

export default MyTodo;