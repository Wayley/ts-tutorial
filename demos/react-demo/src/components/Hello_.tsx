import * as React from 'react';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}
// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
class Hello extends React.Component<IProps, object> {
  public render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className='hello'>
        <div className='greeting'>
          HELLO {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}

export default Hello;
