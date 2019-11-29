<template>
  <div v-if="enabled" class="live-emotions-container ">
    <video id="video" class="mdc-elevation--z1" width="250" height="180" autoplay muted></video>

    <span v-if="enabled" id="expression-emoji">
      {{ expressionEmoji }}
    </span>

    <div id="live-emotions-stats" class="mdc-elevation--z1">
      <i class="material-icons centered" id="time-icon">alarm</i><br />
      <h2 class="centered">
        {{ happyTimeSeconds }}
      </h2>
      <p id="seconds-text" class="centered">seconds</p>
      <p id="happy-time-text" class="centered">Happy time on blockgag</p>
    </div>
  </div>
</template>

<script>
import { nets, detectAllFaces, TinyFaceDetectorOptions } from 'face-api.js'

const tickSize = 300 // ms

// Global stram variable for this component
let stream
let timer
let modelsLoaded = false
let loadingModels = false

async function startVideo(onExpressionsDetected) {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })
    const video = document.getElementById('video')
    video.srcObject = stream

    timer = setInterval(async () => {
      let expressions = await detectExpressions()
      onExpressionsDetected(expressions)
    }, tickSize)
  } catch (e) {
    window.toastr.error('Video initialization failed :(')
    console.error(e)
  }
}

async function stopVideo() {
  stream.getTracks().forEach(function(track) {
    track.stop();
  });
  clearInterval(timer)
}

async function loadMLModels() {
  console.log('Loading ML models')
  loadingModels = true
  await Promise.all([
    nets.tinyFaceDetector.loadFromUri('/MLModels'),
    nets.faceLandmark68Net.loadFromUri('/MLModels'),
    nets.faceRecognitionNet.loadFromUri('/MLModels'),
    nets.faceExpressionNet.loadFromUri('/MLModels')
  ])
  modelsLoaded = true
  loadingModels = false
  console.log('ML models loaded')
}

async function detectExpressions() {
  if (loadingModels) {
    return
  }
  if (!modelsLoaded) {
    await loadMLModels()
  }
  let detections = await detectAllFaces(video, new TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
  let expressions = detections[0].expressions
  // console.log(expressions)
  return expressions
}

function updateHappyTime(expressions) {
  
  let prevHappyTime = localStorage.happyTimeOnBlockgag
  if (expressions.happy > 0.4) {
    localStorage.happyTimeOnBlockgag = (Number(prevHappyTime) || 0) + tickSize
  }
  return localStorage.happyTimeOnBlockgag
}

const emoji = {
  neutral: '😐',
  happy: {
    1: '🙂',
    2: '😊',
    3: '😃',
    4: '😄',
    5: '😁',
    6: '😆',
    7: '😅',
    8: '😂',
    // 9: '🤣',
  },
  sad: {
    1: '😕',
    2: '😟',
    3: '😩',
  },
  angry: {
    1: '😠',
    2: '😤',
    3: '😡',
  },
  surprised: {
    1: '😮',
  }
}

export default {
  props: {
    enabled: Boolean,
  },
  data() {
    return {
      expressions: {},
      happyTimeSeconds: (localStorage.happyTimeOnBlockgag || 0) / 1000,
    }
  },
  computed: {
    expressionEmoji() {
      // if (!modelsLoaded) {
      //   return emoji.neutral
      // }

      let emojiConfig = {
        happy: {
          0.8: emoji.happy[8],
          0.6: emoji.happy[7],
          0.5: emoji.happy[5],
          0.3: emoji.happy[2],
          0.2: emoji.happy[1]
        },
        sad: {
          0.5: emoji.sad[3]
        },
        angry: {
          0.2: emoji.angry[3]
        },
        surprised: {
          0.2: emoji.surprised[1]
        }
      }
      for (let expressionType in emojiConfig) {
        for (let level in emojiConfig[expressionType]) {
          if (this.expressions[expressionType] > level) {
            return emojiConfig[expressionType][level]
          }
        }
      }
      return emoji.neutral
    }
  },
  watch: {
    enabled: function(newVal) {
      if (newVal) {
        console.log('Starting video recording')

        startVideo((detectedExpressions) => {
          this.expressions = detectedExpressions
          let newHappyTime = updateHappyTime(detectedExpressions)
          this.happyTimeSeconds = newHappyTime / 1000
        })
      } else {
        console.log('Finishing video recording')
        stopVideo()
      }
    }
  }
}
</script>

<style>
#video {
  position: fixed;
  padding: 3px;
  top: 110px;
  right: 30px;
  /* left:0; */
}

#expression-emoji {
  position: fixed;
  top: 120px;
  right: 80px;
  font-size: 140px;
}

#live-emotions-stats {
  width: 256px;
  /* height: 300px; */
  top: 350px;
  position: fixed;
  right: 30px;
}

#live-emotions-stats h2 {
  /* margin-top: 5px; */
  font-size: 40px;
  color: #00be00;
  margin-top: -5px;
}

#seconds-text {
  margin-bottom: 20px;
}

#happy-time-text {
  font-size: 12px;
  margin-bottom: 20px;
}

#time-icon {
  text-align: center;
  margin: auto;
  margin-top: 20px;
  display: block;
}

</style>