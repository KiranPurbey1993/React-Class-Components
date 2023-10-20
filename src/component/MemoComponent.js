import React from 'react'

// function MemoComponent(props) {
//     console.log('Memo component');
//   return (
//     <div>
//       {props.name}
//     </div>
//   )
// }

// export default React.memo(MemoComponent);

const MemoComponent = (props)=>{
  console.log('Memo component');
    return (
      <div>
        {props.name}
      </div>
    )
}

export default memo(MemoComponent);