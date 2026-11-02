import { Script } from 'scripting'

async function main() {
  const web = new WebViewController()
  try {
    await web.addScriptMessageHandler('load2048', () => Storage.get('game-save-v1'))
    await web.addScriptMessageHandler('save2048', (state: any) => {
      if (!state || !Array.isArray(state.board) || state.board.length !== 16) {
        throw new Error('无效的2048存档')
      }
      if (!Storage.set('game-save-v1', state)) throw new Error('存档写入失败')
      return true
    })
    await web.setSettings({
      bounces: false,
      allowsBackForwardNavigationGestures: false,
      backgroundColor: '#faf8ef',
      underPageBackgroundColor: '#faf8ef',
    })
    const loaded = await web.loadFile(`${Script.directory}/index.html`, Script.directory)
    if (!loaded) throw new Error('2048游戏页面加载失败')
    if (Script.queryParameters.test === '1') {
      console.log(await web.callAsyncJavaScript(`
        await new Promise(resolve => setTimeout(resolve, 300));
        const pad = row => row.concat(Array(12).fill(0));
        const cases = [
          [pad([2,2,2,2]), 'left', [4,4,0,0], 8],
          [pad([2,2,4,0]), 'left', [4,4,0,0], 4],
          [pad([2,0,2,2]), 'right', [0,0,2,4], 4]
        ];
        for (const [board,direction,row,score] of cases) {
          const r = E.slide(board,direction);
          if (JSON.stringify(r.board.slice(0,4)) !== JSON.stringify(row) || r.score !== score) throw new Error('合并测试失败');
        }
        if(E.slide(pad([2,0,0,0]),'left').changed) throw new Error('无效移动测试失败');
        if(E.canMove([2,4,2,4,4,2,4,2,2,4,2,4,4,2,4,2])) throw new Error('结束判断测试失败');
        const saved = await window.webkit.messageHandlers.load2048.postMessage(null);
        return {title:document.title, cells:document.querySelectorAll('.cell').length,
          ready, board:state.board, saveRestored:JSON.stringify(saved.board) === JSON.stringify(state.board), rulesTests:'5 passed'};
      `))
    } else {
      await web.present({ navigationTitle: '2048' })
    }
  } finally {
    web.dispose()
    Script.exit()
  }
}
main().catch(error => { console.error(String(error)); Script.exit() })
