const elementoChute = document.getElementById('chute')  

//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#speech_recognition
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(event){
    const chute = event.results[0][0].transcript
    exibeChute(chute)
    verificaSeChuteTemValorValido(chute)
}

function exibeChute(chute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
        `
}

recognition.addEventListener('end', () => recognition.start())