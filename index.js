const path = require('path');
const { NethackSession } = require('nodehack');
const express = require('express');
const expressSession = require('express-session');
const app = express();
const uuid4 = require('uuid/v4');

app.use(express.json());
app.use('/assets', express.static('dist/assets'));
app.use(expressSession({ secret: 'i love nodehack' }));

const nethackSessions = {};

const asyncRoute = route => (req, res, next = console.error) => {
  Promise.resolve(route(req,res)).catch(next);
};

const login = async (req, res) => {
  const { body: { username, password }} = req;
  console.log('got data', username, password);
  if (req.session.running) {
     res.json({ success: false, screens: [], message: 'Session already running' });
  } else {
    const nethackSession = new NethackSession();
    const screens = await nethackSession.loginSSH('hardfoughtEU', username, password);
    req.session.running = true;
    const uuid = uuid4();
    req.session.nhSessionId = uuid;
    nethackSessions[uuid] = nethackSession;
    res.json({ success: true, screens, message: 'success' });
  }
};

const input = async (req, res) => {
  const { body: { input } } = req;
  if (!req.session.running) {
    res.json({ success: false, screens: [], message: 'No session running' });
  } else {
    const nethackSession = nethackSessions[req.session.nhSessionId];
    const screens = await nethackSession.doInput(input);
    res.json({ success: true, screens, message: 'success' });
  }
}

const save = async (req, res) => {
  if (!req.session.running) {
    res.json({ success: false, screens: [], message: 'No session running' });
  } else {
    console.log('save got', req.session.nhSessionId, nethackSessions);
    const nethackSession = nethackSessions[req.session.nhSessionId];
    const screens = await nethackSession.doInput('Sy ');
    nethackSession.close();
    req.session.running = false;
    delete req.session.nhSessionId;
    res.json({ success: true, screens, message: 'success' });
  }
};

app.post('/login', asyncRoute(login));
app.post('/input', asyncRoute(input));
app.post('/save', asyncRoute(save));

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'dist/assets/index.html'));
});

app.listen(8000, () => console.log('success!'));



