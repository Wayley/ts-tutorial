import * as React from 'react';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  // list: any[];
  list: IMenuItem[];
}
export interface IMenuItem {
  id: number;
  name: string;
}
// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
class Hello extends React.Component<IProps, object> {
  public render() {
    const { name, enthusiasmLevel = 1, list } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className='hello'>
        <div className='greeting'>
          HELLO {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {index}----{item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Hello;
