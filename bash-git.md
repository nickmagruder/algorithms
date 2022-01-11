## Clone repo then change the remote GitHub repo:
- git clone {repo url}
- git remote origin
- git remote remove origin
- git remote
- git remote add origin {new repo url}



Instead of this:
npx create-react-app crwn-clothing

Do this:
npx create-react-app crwn-clothing --template cra-template-pwa


Unhandled Error

[REDACTED].unpacked\ts\workers\heicConverter.bundle.js:1



SyntaxError: Invalid or unexpected token
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1032:15)
    at Module._compile (node:internal/modules/cjs/loader:1066:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1140:10)
    at Module.load (node:internal/modules/cjs/loader:982:32)
    at Function.Module._load (node:internal/modules/cjs/loader:823:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)
    at MessagePort.<anonymous> (node:internal/main/worker_thread:188:24)
    at MessagePort.[nodejs.internal.kHybridDispatch] (node:internal/event_target:455:20)
    at MessagePort.exports.emitMessage (node:internal/per_context/messageport:23:28)