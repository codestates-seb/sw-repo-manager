const yesno = require('yesno');   // commonjs approach
const onExit = require('signal-exit')

onExit(function (code, signal) {
  console.log('signal!')
  console.log('\n-------STOP-------');
  process.exit(1); // cntl-c 를 해도 exit(1)로 파이프 라인에서 인식되도록
});

(async () => {
    console.log('\n-----------------');
    const ok = await yesno({
        question: '? y/n',
        yesValues: [ 'y', 'yes', 'Y', 'Yes', 'YES' , 'ㅛ' ],
        noValues: [ 'n', 'no', 'N', 'No', 'NO', 'ㅜ' ],
    });
    if(ok) {
        console.log('\n-------NEXT-------');
        process.exit(0);
    } else {
        console.log('\n-------STOP-------');
        process.exit(1); // Uncaught Fatal Exception https://nodejs.org/api/process.html#process_exit_codes
    }
})();
