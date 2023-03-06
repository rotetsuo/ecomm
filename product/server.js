import app from './src/app.js'

const PORT = procces.env.PORT || 3001;

app.lisetn(PORT, () => {
    console.log(`Servidor funcionando na porta ${PORT}`)
});