import * as React from 'react';
import './App.css';

import Hello from './components/Hello';
import Hello_ from './components/Hello_';

import Menu from './components/menu/index';

class App extends React.Component {
  public render() {
    // const list = ['第1', '第2', '第3', '第4'];
    const list = [
      { id: 1, name: '第一' },
      { id: 2, name: '第二' }
      // { id: 2, name: 888 },
      // { id: 2, name: 888 }
    ];
    return (
      <div className='app'>
        <header className='app-header'>header</header>
        <div className='app-main'>ma2in</div>
        <Hello name='TypeScript' enthusiasmLevel={10} />
        <Hello_ name='TSS' enthusiasmLevel={5} />
        <Menu name='TSI' enthusiasmLevel={2} list={list} />
      </div>
    );
  }
}

export default App;
