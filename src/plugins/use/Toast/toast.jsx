/**
 * toast 函数式组件
 */
const MyToast = ({ props }) => {
  console.log(props);
  return <p>hello {props.message}</p>;
};

export default MyToast;