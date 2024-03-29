import React, { useEffect } from "react";
import { startListening } from "../../../utils/speechRecognitionUtils.js";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { StartButton, StopButton } from "../consultationReazon/ControlVoiceButton";
import VoiceTranscriptionBox from "../consultationReazon/VoiceTranscriptionBox";
import Imagen from "../../../assets/img/recordingprogres.png";

const Dictaphone = ({ onSaveMotivoConsulta }) => {
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return (
      <span>
        <h3 className="title-dictaphone">
          Tu navegador no soporta el modo de reconocimiento de voz 😢 <br />
          <a
            href="https://www.google.com/intl/es_es/chrome/?brand=CHBD&gclid=CjwKCAjw6eWnBhAKEiwADpnw9uJI3944zm8xrc9_omJ8YEGgI_gxI4TWn7feh5431nA05QDRvHsd6BoC99gQAvD_BwE&gclsrc=aw.ds"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar Chrome
          </a>
        </h3>
        <VoiceTranscriptionBox transcript={transcript} editable={true} />
      </span>
    );
  }

  return (
    <div>
      <p>
        {listening ? (
          <img className="recording-img" src={Imagen} alt="Persona" />
        ) : (
          "🔕"
        )}
      </p>
      <StartButton onClick={startListening} />
      <StopButton onClick={SpeechRecognition.stopListening} /> <br></br>
      <VoiceTranscriptionBox
        className="dictaphone-textarea"
        transcript={transcript}
        onSaveMotivoConsulta={onSaveMotivoConsulta}
      />
    </div>
  );
};

export default Dictaphone;
