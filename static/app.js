// MemeVaani - Desi Meme & Video Editor Studio Logic
// Theme: #f0c6ad (Peach) & #8ad4b6 (Mint)

// ==========================================
// Curated Indian Meme Clip & GIF Database
// ==========================================
const MEME_CLIP_LIBRARY = {
  hera_pheri: {
    clipUrl: "https://media.giphy.com/media/dIncxHCFdSmh0ROHwq/giphy.gif",
    poster: "https://media.giphy.com/media/dIncxHCFdSmh0ROHwq/giphy_s.gif",
    title: "Akshay Kumar - Scheme Face",
    movie: "Phir Hera Pheri"
  },
  babu_rao: {
    clipUrl: "https://media.giphy.com/media/W0c3xcZ3F1d0EYYb0f/giphy.gif",
    poster: "https://media.giphy.com/media/W0c3xcZ3F1d0EYYb0f/giphy_s.gif",
    title: "Babu Rao Utha Le Re Baba",
    movie: "Hera Pheri"
  },
  mirzapur: {
    clipUrl: "https://media.giphy.com/media/26n61r3hygmRzpHqM/giphy.gif",
    poster: "https://media.giphy.com/media/26n61r3hygmRzpHqM/giphy_s.gif",
    title: "Kaleen Bhaiya / Munna - Jalwa",
    movie: "Mirzapur"
  },
  panchayat: {
    clipUrl: "https://media.giphy.com/media/W3a0zO282odf9jeg9z/giphy.gif",
    poster: "https://media.giphy.com/media/W3a0zO282odf9jeg9z/giphy_s.gif",
    title: "Dekh Raha Hai Binod",
    movie: "Panchayat"
  },
  three_idiots: {
    clipUrl: "https://media.giphy.com/media/13m24iFmhomZi0/giphy.gif",
    poster: "https://media.giphy.com/media/13m24iFmhomZi0/giphy_s.gif",
    title: "Arre Kehna Kya Chahte Ho",
    movie: "3 Idiots"
  },
  welcome: {
    clipUrl: "https://media.giphy.com/media/IS6CvSgWNVqVtLBB5A/giphy.gif",
    poster: "https://media.giphy.com/media/IS6CvSgWNVqVtLBB5A/giphy_s.gif",
    title: "Majnu Bhai - Meri Ek Taang Nakli Hai",
    movie: "Welcome"
  },
  aayein: {
    clipUrl: "https://media.giphy.com/media/0Vv0Ne2CnOClIExIuL/giphy.gif",
    poster: "https://media.giphy.com/media/0Vv0Ne2CnOClIExIuL/giphy_s.gif",
    title: "Bhupendra Jogi - Aayein?",
    movie: "Viral Interview"
  },
  tata_bye_bye: {
    clipUrl: "https://media.giphy.com/media/3o7btUg31RCoBK2rMQ/giphy.gif",
    poster: "https://media.giphy.com/media/3o7btUg31RCoBK2rMQ/giphy_s.gif",
    title: "Gaya... Khatam... Tata Bye Bye",
    movie: "Viral Speech"
  },
  shark_tank: {
    clipUrl: "https://media.giphy.com/media/3o6Zt6KHxJTbXCnSvu/giphy.gif",
    poster: "https://media.giphy.com/media/3o6Zt6KHxJTbXCnSvu/giphy_s.gif",
    title: "Ashneer Grover - Doglapan",
    movie: "Shark Tank India"
  },
  munna_bhai: {
    clipUrl: "https://media.giphy.com/media/3o7TKr3nzbh5WgCFxe/giphy.gif",
    poster: "https://media.giphy.com/media/3o7TKr3nzbh5WgCFxe/giphy_s.gif",
    title: "Munna Bhai - Nahi",
    movie: "Munna Bhai M.B.B.S."
  },
  moye_moye: {
    clipUrl: "https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif",
    poster: "https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy_s.gif",
    title: "Moye Moye Traumatic Moment",
    movie: "Viral Reel"
  }
};

function getBestClipForMeme(meme) {
  const text = ((meme.template_name || '') + ' ' + (meme.origin || '') + ' ' + (meme.character || '') + ' ' + (meme.clip_keyword || '')).toLowerCase();
  
  if (text.includes('babu') || text.includes('utha le') || text.includes('apte')) return MEME_CLIP_LIBRARY.babu_rao;
  if (text.includes('hera pheri') || text.includes('scheme') || text.includes('akshay') || text.includes('paisa')) return MEME_CLIP_LIBRARY.hera_pheri;
  if (text.includes('mirzapur') || text.includes('tripathi') || text.includes('munna')) return MEME_CLIP_LIBRARY.mirzapur;
  if (text.includes('binod') || text.includes('panchayat') || text.includes('sachiv')) return MEME_CLIP_LIBRARY.panchayat;
  if (text.includes('idiot') || text.includes('virus') || text.includes('kehna kya')) return MEME_CLIP_LIBRARY.three_idiots;
  if (text.includes('welcome') || text.includes('majnu') || text.includes('uday')) return MEME_CLIP_LIBRARY.welcome;
  if (text.includes('aayein') || text.includes('bhupendra')) return MEME_CLIP_LIBRARY.aayein;
  if (text.includes('khatam') || text.includes('bye bye') || text.includes('tata')) return MEME_CLIP_LIBRARY.tata_bye_bye;
  if (text.includes('shark') || text.includes('ashneer') || text.includes('dogla')) return MEME_CLIP_LIBRARY.shark_tank;
  if (text.includes('munna bhai') || text.includes('circuit')) return MEME_CLIP_LIBRARY.munna_bhai;
  if (text.includes('moye')) return MEME_CLIP_LIBRARY.moye_moye;

  // Fallback cycling clip
  return MEME_CLIP_LIBRARY.hera_pheri;
}

// ==========================================
// 1. Audio System (Real Playback via Sarvam Bulbul TTS & Web Audio)
// ==========================================
let audioCtx = null;
const audioCache = new Map(); // caches generated base64 audio to avoid re-fetching
const sharedAudioEl = new Audio();

function unlockAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Play real voice using Sarvam Bulbul TTS
async function playDialogueVoice(text, speaker = 'ratan', btnElement = null) {
  unlockAudioContext();
  if (!text) return;

  const originalHtml = btnElement ? btnElement.innerHTML : null;
  if (btnElement) {
    btnElement.disabled = true;
    btnElement.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-[#8ad4b6]"></i> Playing...`;
  }

  try {
    const cacheKey = `${text}_${speaker}`;
    let audioUrl = audioCache.get(cacheKey);

    if (!audioUrl) {
      const res = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: text,
          speaker: speaker,
          language_code: 'hi-IN'
        })
      });

      if (!res.ok) {
        throw new Error('TTS audio generation failed');
      }

      const data = await res.json();
      audioUrl = `data:audio/mp3;base64,${data.audio_base64}`;
      audioCache.set(cacheKey, audioUrl);
    }

    sharedAudioEl.src = audioUrl;
    sharedAudioEl.volume = 1.0;
    await sharedAudioEl.play();
  } catch (err) {
    console.warn('Voice playback fallback:', err);
    // Fallback to high-presence synthesized sound so user always hears sound
    playSynthesizedSFX('punch', 440);
  } finally {
    if (btnElement && originalHtml) {
      btnElement.disabled = false;
      btnElement.innerHTML = originalHtml;
    }
  }
}

// Rich Web Audio Synthesizer for instant high-volume sound effects
function playSynthesizedSFX(type, baseFreq = 400) {
  const ctx = unlockAudioContext();
  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.gain.setValueAtTime(0.85, now);
  masterGain.connect(ctx.destination);

  if (type === 'boom' || baseFreq < 120) {
    // Vine Boom Bass Drop
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, now);
    filter.frequency.exponentialRampToValueAtTime(40, now + 1.0);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(32, now + 1.0);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.9, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.0);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    osc.start(now);
    osc.stop(now + 1.0);
  } else if (type === 'fail' || type === 'harmonium') {
    // Descending comic sad harmonium riff
    [260, 240, 220, 195].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + idx * 0.15);
      gain.gain.setValueAtTime(0.3, now + idx * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.01, now + (idx + 1) * 0.15);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now + idx * 0.15);
      osc.stop(now + (idx + 1) * 0.15);
    });
  } else if (type === 'scratch') {
    // Record Scratch Noise
    const bufferSize = ctx.sampleRate * 0.3;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin(i / 100);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.frequency.linearRampToValueAtTime(200, now + 0.3);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    noise.start(now);
  } else {
    // Comedic punch stinger
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.setValueAtTime(baseFreq * 1.6, now + 0.08);
    osc.frequency.setValueAtTime(baseFreq * 0.9, now + 0.18);

    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.4);
  }
}

// ==========================================
// 2. Tab Navigation
// ==========================================
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  const activeContent = document.getElementById(tabId);
  if (activeContent) activeContent.classList.add('active');

  const activeBtn = document.querySelector(`button[onclick="switchTab('${tabId}')"]`);
  if (activeBtn) activeBtn.classList.add('active');

  unlockAudioContext();
}

function setPrompt(text) {
  const input = document.getElementById('situationInput');
  input.value = text;
  input.focus();
}

// ==========================================
// 3. AI Situation Matcher (Sarvam-105B)
// ==========================================
async function fetchRecommendations() {
  unlockAudioContext();
  const input = document.getElementById('situationInput');
  const situation = input.value.trim();
  if (!situation) {
    alert('Please describe a situation or prompt first!');
    return;
  }

  const formatEl = document.querySelector('input[name="recFormat"]:checked');
  const targetFormat = formatEl ? formatEl.value : 'both';

  const loader = document.getElementById('recLoader');
  const results = document.getElementById('recResults');
  const btn = document.getElementById('btnRecommend');

  loader.classList.remove('hidden');
  results.classList.add('hidden');
  btn.disabled = true;

  try {
    const res = await fetch('/api/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ situation, target_format: targetFormat })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || 'Failed to fetch recommendations');
    }

    const data = await res.json();
    renderRecommendations(data);
  } catch (err) {
    alert('Error from Sarvam AI: ' + err.message);
  } finally {
    loader.classList.add('hidden');
    btn.disabled = false;
  }
}

function renderRecommendations(data) {
  const results = document.getElementById('recResults');
  results.classList.remove('hidden');

  document.getElementById('resEmotionBadge').innerText = data.emotion || 'Desi Meme Context';
  document.getElementById('resSummary').innerText = data.situation_summary || '';
  document.getElementById('resCutTip').innerText = data.editor_cut_tip || 'Use quick zooms and comedic pauses for best punch.';

  // Render Memes with Visual Clips
  const memeGrid = document.getElementById('memeCardsGrid');
  memeGrid.innerHTML = '';
  const memes = data.memes || [];

  memes.forEach((m, idx) => {
    const clipData = getBestClipForMeme(m);
    const card = document.createElement('div');
    card.className = 'meme-card rounded-2xl p-4 flex flex-col justify-between space-y-3 bg-white border border-[#ede5dd] shadow-sm';
    
    card.innerHTML = `
      <div>
        <!-- Visual Meme Clip Player -->
        <div class="clip-preview-container border border-[#ede5dd] shadow-sm group bg-[#faf8f5]">
          <img src="${clipData.clipUrl}" alt="${m.template_name}" class="w-full h-full object-cover">
          <div class="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-white/90 text-[#1e5843] text-[10px] font-bold border border-[#8ad4b6]/60 shadow-sm">
            <i class="fa-solid fa-play mr-1 text-[#2d7e5d]"></i>Meme Clip
          </div>
          <button onclick="copyClipUrl('${clipData.clipUrl}')" class="absolute top-2 right-2 px-2 py-1 rounded bg-white/90 hover:bg-white text-slate-700 text-xs shadow-sm transition" title="Copy GIF Clip URL">
            <i class="fa-regular fa-copy"></i>
          </button>
        </div>

        <!-- Meta Details -->
        <div class="flex items-center justify-between text-xs mt-3 mb-1">
          <span class="px-2.5 py-0.5 rounded-full bg-[#8ad4b6]/20 text-[#1e5843] font-semibold border border-[#8ad4b6]/40">${m.origin || clipData.movie}</span>
          <span class="text-slate-500 font-medium">${m.character || ''}</span>
        </div>
        <h4 class="text-base font-bold text-slate-800">${m.template_name}</h4>
        
        <div class="flex items-center space-x-2 mt-1">
          <p class="text-xs text-[#854522] font-mono italic">"${m.iconic_dialogue || ''}"</p>
          <button onclick="playDialogueVoice('${encodeURIComponent(m.iconic_dialogue || '')}', 'ratan', this)" class="px-2 py-0.5 rounded-full bg-[#faf8f5] hover:bg-[#ede5dd] text-[11px] text-[#2d7e5d] border border-[#ede5dd] flex items-center space-x-1 transition" title="Play dialogue voice">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
        
        <p class="text-xs text-slate-600 mt-2">${m.why_it_fits || ''}</p>
        
        <!-- Suggested Caption -->
        <div class="mt-3 bg-[#faf8f5] border border-[#ede5dd] rounded-lg p-2.5">
          <span class="text-[10px] text-[#2d7e5d] uppercase tracking-wider block font-bold">Suggested Caption:</span>
          <p class="text-xs text-slate-800 font-semibold mt-0.5">"${m.suggested_caption || ''}"</p>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="pt-2 border-t border-[#ede5dd] flex items-center space-x-2">
        <button onclick="useInMemeStudio('${encodeURIComponent(m.suggested_caption || m.iconic_dialogue || '')}', '${encodeURIComponent(m.template_name || '')}', '${clipData.clipUrl}')" class="flex-1 py-2 rounded-xl bg-[#faf8f5] hover:bg-[#ede5dd] text-xs font-semibold text-slate-700 transition flex items-center justify-center space-x-1 border border-[#ede5dd]">
          <i class="fa-regular fa-image text-[#b86134]"></i>
          <span>Use in Studio</span>
        </button>
        <button onclick="useInVoiceover('${encodeURIComponent(m.iconic_dialogue || m.suggested_caption || '')}')" class="flex-1 py-2 rounded-xl bg-[#faf8f5] hover:bg-[#ede5dd] text-xs font-semibold text-slate-700 transition flex items-center justify-center space-x-1 border border-[#ede5dd]">
          <i class="fa-solid fa-microphone text-[#2d7e5d]"></i>
          <span>AI Voiceover</span>
        </button>
      </div>
    `;
    memeGrid.appendChild(card);
  });

  // Render Audio / SFX with Instant Play Button
  const audioGrid = document.getElementById('audioCardsGrid');
  audioGrid.innerHTML = '';
  const audios = data.audio_recommendations || [];

  audios.forEach(a => {
    const card = document.createElement('div');
    card.className = 'sound-pad rounded-2xl p-4 flex flex-col justify-between space-y-2 bg-white border border-[#ede5dd] shadow-sm';
    const isBgm = a.type === 'bgm';
    const typeBadge = isBgm ? 'text-[#854522] bg-[#f0c6ad]/30 border-[#f0c6ad]' : 'text-[#1e5843] bg-[#8ad4b6]/25 border-[#8ad4b6]';

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between text-xs mb-1">
          <span class="px-2.5 py-0.5 rounded-full font-semibold uppercase border ${typeBadge}">${a.type || 'SFX'}</span>
          <span class="text-slate-500 font-medium">${a.source || 'Viral'}</span>
        </div>
        <h4 class="text-sm font-bold text-slate-800">${a.title}</h4>
        <div class="mt-2 text-xs bg-[#faf8f5] border border-[#ede5dd] rounded-lg p-2 text-slate-700">
          <span class="text-[10px] text-[#b86134] font-bold block uppercase"><i class="fa-solid fa-stopwatch mr-1"></i>Timing Cue:</span>
          <p class="mt-0.5">${a.timing_tip || 'Play right on punchline.'}</p>
        </div>
      </div>
      <div class="pt-2 flex items-center space-x-2">
        <button onclick="handleAudioCardPlay('${encodeURIComponent(a.title)}', '${a.type}', this)" class="flex-1 py-2 rounded-xl bg-[#faf8f5] hover:bg-[#ede5dd] text-xs font-bold text-[#1e5843] flex items-center justify-center space-x-1.5 transition border border-[#ede5dd]">
          <i class="fa-solid fa-circle-play text-base text-[#2d7e5d]"></i>
          <span>Play Audio</span>
        </button>
        <button onclick="copyTimingCue('${encodeURIComponent(a.title + ': ' + (a.timing_tip || ''))}')" class="px-3 py-2 rounded-xl bg-[#faf8f5] hover:bg-[#ede5dd] text-xs text-slate-700 border border-[#ede5dd] transition" title="Copy cue for video editor timeline">
          <i class="fa-regular fa-copy"></i>
        </button>
      </div>
    `;
    audioGrid.appendChild(card);
  });

  results.scrollIntoView({ behavior: 'smooth' });
}

function handleAudioCardPlay(encodedTitle, type, btnEl) {
  const title = decodeURIComponent(encodedTitle);
  if (type === 'bgm' || title.toLowerCase().includes('boom') || title.toLowerCase().includes('scratch')) {
    playSynthesizedSFX(type === 'bgm' ? 'fail' : 'boom', 300);
  } else {
    // Generate real speech audio via Sarvam Bulbul
    playDialogueVoice(title, 'ratan', btnEl);
  }
}

function copyClipUrl(url) {
  navigator.clipboard.writeText(url);
  alert('Copied Meme Clip GIF URL to clipboard!');
}

function useInMemeStudio(caption, templateName, clipUrl) {
  caption = decodeURIComponent(caption);
  templateName = decodeURIComponent(templateName);
  document.getElementById('memeTopText').value = templateName;
  document.getElementById('memeBottomText').value = caption;

  if (clipUrl) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      currentMemeImg = img;
      currentTemplateType = 'clip';
      document.getElementById('memeUploadLabel').innerText = templateName + ' (Loaded)';
      renderMemeCanvas();
    };
    img.src = clipUrl;
  }

  switchTab('tab-meme-studio');
  renderMemeCanvas();
}

function useInVoiceover(text) {
  text = decodeURIComponent(text);
  document.getElementById('ttsTextInput').value = text;
  switchTab('tab-voiceover');
}

function copyTimingCue(text) {
  navigator.clipboard.writeText(decodeURIComponent(text));
  alert('Copied editor cue to clipboard!');
}

// ==========================================
// 4. Speech-to-Text Voice Input (Sarvam Saaras)
// ==========================================
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;

async function toggleVoiceInput() {
  unlockAudioContext();
  const btn = document.getElementById('btnVoiceInput');
  const micIcon = document.getElementById('micIcon');
  const micText = document.getElementById('micText');

  if (!isRecording) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = e => {
        if (e.data.size > 0) audioChunks.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        await sendAudioToTranscribe(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      isRecording = true;
      micIcon.classList.add('animate-pulse', 'text-red-400');
      micText.innerText = 'Listening... Click to Stop';
      btn.classList.add('border-[#f0c6ad]', 'text-[#f0c6ad]');
    } catch (err) {
      alert('Microphone access denied or not available: ' + err.message);
    }
  } else {
    mediaRecorder.stop();
    isRecording = false;
    micIcon.classList.remove('animate-pulse', 'text-red-400');
    micText.innerText = 'Transcribing with Saaras...';
    btn.classList.remove('border-[#f0c6ad]', 'text-[#f0c6ad]');
  }
}

async function sendAudioToTranscribe(blob) {
  const micText = document.getElementById('micText');
  try {
    const formData = new FormData();
    formData.append('file', blob, 'recording.wav');

    const res = await fetch('/api/transcribe', {
      method: 'POST',
      body: formData
    });

    if (!res.ok) throw new Error('Transcription failed');
    const data = await res.json();
    if (data.transcript) {
      document.getElementById('situationInput').value = data.transcript;
      fetchRecommendations();
    }
  } catch (err) {
    alert('STT Error: ' + err.message);
  } finally {
    micText.innerText = 'Speak Situation (Voice)';
  }
}

// ==========================================
// 5. Video Clipper & GIF Maker
// ==========================================
let loadedVideo = null;

function loadVideo(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const url = URL.createObjectURL(file);
    const video = document.getElementById('previewVideo');
    video.src = url;
    video.classList.remove('hidden');
    document.getElementById('videoUploadPrompt').classList.add('hidden');
    loadedVideo = video;

    video.onloadedmetadata = () => {
      document.getElementById('clipStart').value = 0;
      const end = Math.min(3.0, video.duration);
      document.getElementById('clipEnd').value = end.toFixed(1);
      updateClipRange();
    };
  }
}

function updateClipRange() {
  const start = parseFloat(document.getElementById('clipStart').value) || 0;
  const end = parseFloat(document.getElementById('clipEnd').value) || 0;
  const dur = Math.max(0, end - start).toFixed(1);
  document.getElementById('clipDurationDisplay').innerText = `${start.toFixed(1)}s - ${end.toFixed(1)}s (${dur}s total)`;
}

function setClipStartFromCurrent() {
  const video = document.getElementById('previewVideo');
  if (video && !isNaN(video.currentTime)) {
    document.getElementById('clipStart').value = video.currentTime.toFixed(1);
    updateClipRange();
  }
}

function setClipEndFromCurrent() {
  const video = document.getElementById('previewVideo');
  if (video && !isNaN(video.currentTime)) {
    document.getElementById('clipEnd').value = video.currentTime.toFixed(1);
    updateClipRange();
  }
}

async function generateGifFromVideo() {
  const video = document.getElementById('previewVideo');
  if (!video || !video.src || video.classList.contains('hidden')) {
    alert('Please upload a video first!');
    return;
  }

  const start = parseFloat(document.getElementById('clipStart').value) || 0;
  const end = parseFloat(document.getElementById('clipEnd').value) || 0;
  if (end <= start) {
    alert('End time must be greater than Start time!');
    return;
  }
  if (end - start > 8) {
    alert('Please keep meme GIFs under 8 seconds for smooth generation.');
    return;
  }

  const topText = document.getElementById('videoTopText').value;
  const bottomText = document.getElementById('videoBottomText').value;

  const btn = document.getElementById('btnGenerateGif');
  const progressBar = document.getElementById('gifProgressBar');
  const progressFill = document.getElementById('gifProgressFill');
  const progressText = document.getElementById('gifProgressText');
  const resultImg = document.getElementById('gifResultImg');
  const placeholder = document.getElementById('gifPlaceholder');
  const downloadBtn = document.getElementById('btnDownloadGif');

  btn.disabled = true;
  progressBar.classList.remove('hidden');
  resultImg.classList.add('hidden');
  placeholder.classList.add('hidden');
  downloadBtn.classList.add('hidden');

  const fps = 8;
  const totalFrames = Math.floor((end - start) * fps);
  const frames = [];

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  const scale = 360 / Math.max(video.videoWidth, video.videoHeight);
  canvas.width = Math.floor(video.videoWidth * scale);
  canvas.height = Math.floor(video.videoHeight * scale);

  for (let i = 0; i < totalFrames; i++) {
    const t = start + (i / fps);
    progressText.innerText = `Extracting frame ${i + 1} of ${totalFrames}...`;
    progressFill.style.width = `${Math.floor(((i + 1) / totalFrames) * 60)}%`;

    await new Promise(resolve => {
      video.currentTime = t;
      video.onseeked = () => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        frames.push(canvas.toDataURL('image/jpeg', 0.8));
        resolve();
      };
    });
  }

  progressText.innerText = 'Compiling animated GIF with captions...';
  progressFill.style.width = '85%';

  try {
    const formData = new FormData();
    frames.forEach(f => formData.append('frames_data', f));
    formData.append('duration', Math.floor(1000 / fps));
    formData.append('top_text', topText);
    formData.append('bottom_text', bottomText);

    const res = await fetch('/api/render-gif', {
      method: 'POST',
      body: formData
    });

    if (!res.ok) throw new Error('GIF generation failed');
    const data = await res.json();

    progressFill.style.width = '100%';
    resultImg.src = data.gif_base64;
    resultImg.classList.remove('hidden');
    downloadBtn.href = data.gif_base64;
    downloadBtn.classList.remove('hidden');
    document.getElementById('gifStatusBadge').innerText = 'Ready!';
  } catch (err) {
    alert('GIF Error: ' + err.message);
    placeholder.classList.remove('hidden');
  } finally {
    progressBar.classList.add('hidden');
    btn.disabled = false;
  }
}

// ==========================================
// 6. Meme & Sticker Canvas Studio
// ==========================================
let currentMemeImg = null;
let currentTemplateType = 'custom';

function selectStockTemplate(type) {
  currentTemplateType = type;
  document.querySelectorAll('.template-choice-btn').forEach(b => b.classList.remove('border-[#8ad4b6]', 'bg-[#8ad4b6]/10'));
  event.target.classList.add('border-[#8ad4b6]', 'bg-[#8ad4b6]/10');
  currentMemeImg = null;
  renderMemeCanvas();
}

function loadMemeImage(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        currentMemeImg = img;
        currentTemplateType = 'uploaded';
        document.getElementById('memeUploadLabel').innerText = input.files[0].name;
        renderMemeCanvas();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function renderMemeCanvas() {
  const canvas = document.getElementById('memeCanvas');
  const ctx = canvas.getContext('2d');
  const topText = (document.getElementById('memeTopText').value || '').toUpperCase();
  const bottomText = (document.getElementById('memeBottomText').value || '').toUpperCase();
  const isSticker = document.getElementById('stickerToggle').checked;

  const w = 600;
  const h = 600;
  canvas.width = w;
  canvas.height = h;

  if (currentMemeImg) {
    ctx.drawImage(currentMemeImg, 0, 0, w, h);
  } else {
    const grad = ctx.createLinearGradient(0, 0, w, h);
    if (currentTemplateType === 'babu_rao') {
      grad.addColorStop(0, '#f0c6ad');
      grad.addColorStop(1, '#8ad4b6');
    } else if (currentTemplateType === 'scheme') {
      grad.addColorStop(0, '#fde8db');
      grad.addColorStop(1, '#c5edd8');
    } else if (currentTemplateType === 'panchayat') {
      grad.addColorStop(0, '#d1f2e2');
      grad.addColorStop(1, '#f7dbcb');
    } else {
      grad.addColorStop(0, '#f0c6ad');
      grad.addColorStop(1, '#8ad4b6');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 6;
    ctx.strokeRect(20, 20, w - 40, h - 40);

    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 32px sans-serif';
    ctx.textAlign = 'center';

    let label = 'DESI MEME TEMPLATE';
    if (currentTemplateType === 'babu_rao') label = '👓 BABU RAO APTE';
    if (currentTemplateType === 'scheme') label = '🤫 25 DIN ME PAISA DOUBLE';
    if (currentTemplateType === 'panchayat') label = '👀 DEKH RAHA HAI BINOD';
    if (currentTemplateType === 'mirzapur') label = '🔫 JALWA HAI HAMARA';

    ctx.fillText(label, w / 2, h / 2 - 20);
    ctx.font = '16px sans-serif';
    ctx.fillStyle = '#475569';
    ctx.fillText('(Upload custom image or use template)', w / 2, h / 2 + 20);
  }

  // Draw Meme Captions
  function drawText(text, y, isTop) {
    if (!text) return;
    const fontSize = 38;
    ctx.font = `900 ${fontSize}px Impact, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 8;
    ctx.lineJoin = 'round';

    const words = text.split(' ');
    let line = '';
    const lines = [];
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > w - 40 && n > 0) {
        lines.push(line.trim());
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line.trim());

    let lineY = isTop ? y : y - (lines.length - 1) * 44;
    lines.forEach(l => {
      ctx.strokeText(l, w / 2, lineY);
      ctx.fillText(l, w / 2, lineY);
      lineY += 44;
    });
  }

  drawText(topText, 60, true);
  drawText(bottomText, h - 30, false);

  if (isSticker) {
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#FFFFFF';
    ctx.strokeRect(8, 8, w - 16, h - 16);
  }
}

function downloadMemeImage() {
  const canvas = document.getElementById('memeCanvas');
  const a = document.createElement('a');
  a.download = 'desimeme.png';
  a.href = canvas.toDataURL('image/png');
  a.click();
}

// ==========================================
// 7. Voiceover Generation (Sarvam Bulbul TTS)
// ==========================================
async function generateVoiceover() {
  unlockAudioContext();
  const text = document.getElementById('ttsTextInput').value.trim();
  if (!text) {
    alert('Please enter or select dialogue text first!');
    return;
  }

  const speaker = document.getElementById('ttsSpeakerSelect').value;
  const lang = document.getElementById('ttsLangSelect').value;
  const btn = document.getElementById('btnGenerateTTS');
  const playerCard = document.getElementById('ttsPlayerCard');
  const player = document.getElementById('ttsAudioPlayer');
  const downloadBtn = document.getElementById('ttsDownloadBtn');

  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Generating Bulbul Voice...';

  try {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, speaker, language_code: lang })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || 'TTS generation failed');
    }

    const data = await res.json();
    const audioDataUrl = `data:audio/mp3;base64,${data.audio_base64}`;
    player.src = audioDataUrl;
    downloadBtn.href = audioDataUrl;
    playerCard.classList.remove('hidden');
    player.play();
  } catch (err) {
    alert('Sarvam TTS Error: ' + err.message);
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-volume-high mr-2"></i>Generate Voiceover Audio (Bulbul AI)';
  }
}

// ==========================================
// 8. Trending Meme Idea Clips (Homepage Gallery)
// ==========================================
const TRENDING_MEME_IDEAS = [
  {
    id: "scheme",
    category: "dosti",
    movie: "Phir Hera Pheri",
    template_name: "25 Din Me Paisa Double",
    situation: "When friend promises: 'Bhai kal pakka paise wapas karunga, aisi scheme hai ki 25 din me paisa double!'",
    dialogue: "25 din me paisa double!",
    clipUrl: "https://media.giphy.com/media/dIncxHCFdSmh0ROHwq/giphy.gif"
  },
  {
    id: "binod",
    category: "corporate",
    movie: "Panchayat",
    template_name: "Dekh Raha Hai Binod",
    situation: "When manager pretends to be your best friend in 1-on-1 right before giving a 2% appraisal.",
    dialogue: "Dekh raha hai Binod, kaise baatein ghumaayi jaa rahi hain",
    clipUrl: "https://media.giphy.com/media/W3a0zO282odf9jeg9z/giphy.gif"
  },
  {
    id: "jalwa",
    category: "corporate",
    movie: "Mirzapur",
    template_name: "Jalwa Hai Hamara",
    situation: "When you finally fix an impossible production bug after 10 hours with one simple print statement.",
    dialogue: "Jalwa hai hamara yahan!",
    clipUrl: "https://media.giphy.com/media/26n61r3hygmRzpHqM/giphy.gif"
  },
  {
    id: "kehna_kya",
    category: "exams",
    movie: "3 Idiots",
    template_name: "Arre Kehna Kya Chahte Ho",
    situation: "When client sends an 8-page document explaining feedback for a single button color change.",
    dialogue: "Arre kehna kya chahte ho?",
    clipUrl: "https://media.giphy.com/media/13m24iFmhomZi0/giphy.gif"
  },
  {
    id: "aayein",
    category: "corporate",
    movie: "Viral Interview",
    template_name: "Aayein? (Bhupendra Jogi)",
    situation: "When interviewer asks: 'Where do you see yourself in 5 years solving quantum equations in Excel?'",
    dialogue: "Aayein? US me bahut jagah gaye hain",
    clipUrl: "https://media.giphy.com/media/0Vv0Ne2CnOClIExIuL/giphy.gif"
  },
  {
    id: "doglapan",
    category: "dosti",
    movie: "Shark Tank India",
    template_name: "Yeh Sab Doglapan Hai",
    situation: "When that one friend who said 'bhai bilkul padhai nahi hui' scores 98% in the final exam.",
    dialogue: "Yeh sab doglapan hai!",
    clipUrl: "https://media.giphy.com/media/3o6Zt6KHxJTbXCnSvu/giphy.gif"
  },
  {
    id: "tata_bye",
    category: "exams",
    movie: "Viral Speech",
    template_name: "Gaya... Khatam... Tata Bye Bye",
    situation: "When mom finds the semester report card behind the fridge and calls you by your full official name.",
    dialogue: "Gaya, khatam, tata, bye bye!",
    clipUrl: "https://media.giphy.com/media/3o7btUg31RCoBK2rMQ/giphy.gif"
  },
  {
    id: "babu_rao",
    category: "bollywood",
    movie: "Hera Pheri",
    template_name: "Utha Le Re Baba",
    situation: "When you wake up at 8:58 AM on Monday and remember your client demo starts at 9:00 AM.",
    dialogue: "Utha le re baba, utha le, mere ko nahi re, in dono ko utha le!",
    clipUrl: "https://media.giphy.com/media/W0c3xcZ3F1d0EYYb0f/giphy.gif"
  }
];

function renderTrendingIdeas(categoryFilter = "all") {
  const grid = document.getElementById("trendingClipsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const filtered = categoryFilter === "all" 
    ? TRENDING_MEME_IDEAS 
    : TRENDING_MEME_IDEAS.filter(item => item.category === categoryFilter);

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "meme-card rounded-2xl p-3.5 flex flex-col justify-between space-y-2.5 bg-white border border-[#ede5dd] shadow-sm";
    
    card.innerHTML = `
      <div>
        <!-- Clip Player Frame -->
        <div class="clip-preview-container border border-[#ede5dd] shadow-sm group bg-[#faf8f5]">
          <img src="${item.clipUrl}" alt="${item.template_name}" class="w-full h-full object-cover">
          <div class="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/90 text-[#1e5843] text-[10px] font-bold border border-[#8ad4b6]/60 shadow-sm">
            <i class="fa-solid fa-play mr-1 text-[#2d7e5d]"></i>Clip
          </div>
          <button onclick="copyClipUrl('${item.clipUrl}')" class="absolute top-2 right-2 px-2 py-1 rounded bg-white/90 hover:bg-white text-slate-700 text-xs shadow-sm transition" title="Copy Clip GIF">
            <i class="fa-regular fa-copy"></i>
          </button>
        </div>

        <!-- Meta -->
        <div class="flex items-center justify-between text-xs mt-2.5 mb-1">
          <span class="px-2 py-0.5 rounded-full bg-[#f0c6ad]/40 text-[#854522] font-semibold text-[10px] border border-[#f0c6ad]">${item.movie}</span>
          <span class="text-[11px] font-bold text-[#2d7e5d] uppercase tracking-wider">${item.category}</span>
        </div>
        <h4 class="text-sm font-bold text-slate-800 line-clamp-1">${item.template_name}</h4>
        
        <!-- Situation Idea -->
        <p class="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">"${item.situation}"</p>

        <!-- Punchline with Audio -->
        <div class="mt-2 flex items-center justify-between bg-[#faf8f5] border border-[#ede5dd] rounded-lg p-2">
          <span class="text-xs font-mono font-medium text-[#854522] truncate mr-2">"${item.dialogue}"</span>
          <button onclick="playDialogueVoice('${encodeURIComponent(item.dialogue)}', 'ratan', this)" class="px-2 py-1 rounded-full bg-white hover:bg-[#ede5dd] text-[#2d7e5d] text-xs shadow-sm border border-[#ede5dd] flex items-center space-x-1 shrink-0 transition" title="Listen to voice">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="pt-2 border-t border-[#ede5dd] flex items-center space-x-1.5">
        <button onclick="useTrendingIdea('${encodeURIComponent(item.situation)}')" class="flex-1 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#ede5dd] text-[11px] font-semibold text-slate-700 border border-[#ede5dd] transition flex items-center justify-center space-x-1" title="Test this situation with Sarvam AI">
          <i class="fa-solid fa-sparkles text-[#b86134]"></i>
          <span>Ask AI</span>
        </button>
        <button onclick="useInMemeStudio('${encodeURIComponent(item.situation)}', '${encodeURIComponent(item.template_name)}', '${item.clipUrl}')" class="flex-1 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#ede5dd] text-[11px] font-semibold text-slate-700 border border-[#ede5dd] transition flex items-center justify-center space-x-1" title="Open this clip in Meme Studio">
          <i class="fa-regular fa-image text-[#2d7e5d]"></i>
          <span>Make Meme</span>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterTrendingIdeas(cat) {
  document.querySelectorAll(".idea-filter-btn").forEach(btn => {
    btn.classList.remove("active", "bg-[#8ad4b6]/30", "text-[#1e5843]", "border-[#8ad4b6]");
    btn.classList.add("bg-white", "text-slate-600", "border-[#ede5dd]");
  });
  if (event && event.target) {
    event.target.classList.add("active", "bg-[#8ad4b6]/30", "text-[#1e5843]", "border-[#8ad4b6]");
    event.target.classList.remove("bg-white", "text-slate-600", "border-[#ede5dd]");
  }
  renderTrendingIdeas(cat);
}

function useTrendingIdea(encodedSituation) {
  const situation = decodeURIComponent(encodedSituation);
  const input = document.getElementById("situationInput");
  input.value = situation;
  input.scrollIntoView({ behavior: "smooth" });
  input.focus();
}

// ==========================================
// 9. Viral Indian SFX Soundboard
// ==========================================
const soundboardData = [
  { name: 'Aayein?', origin: 'Bhupendra Jogi', dialogue: 'Aayein?', type: 'dialogue', pitch: 350 },
  { name: 'Gaya... Khatam', origin: 'Tata Bye Bye', dialogue: 'Gaya, khatam, tata, bye bye', type: 'dialogue', pitch: 200 },
  { name: 'Paisa Laya?', origin: 'Phir Hera Pheri', dialogue: 'Paisa laya?', type: 'dialogue', pitch: 520 },
  { name: 'Arre Kehna Kya Chahte Ho', origin: '3 Idiots', dialogue: 'Arre kehna kya chahte ho?', type: 'dialogue', pitch: 480 },
  { name: 'Ye To Tatti Hai', origin: 'Delhi Belly', dialogue: 'Yeh toh tatti hai!', type: 'dialogue', pitch: 160 },
  { name: 'Daya Darwaza Tod', origin: 'CID', dialogue: 'Daya darwaza tod do!', type: 'dialogue', pitch: 300 },
  { name: 'Jalwa Hai Hamara', origin: 'Mirzapur', dialogue: 'Jalwa hai hamara yahan!', type: 'dialogue', pitch: 220 },
  { name: 'Dekh Raha Hai Binod', origin: 'Panchayat', dialogue: 'Dekh raha hai Binod, kaise baatein ghumaayi jaa rahi hain', type: 'dialogue', pitch: 380 },
  { name: 'Vine Boom (Bass)', origin: 'Reels Bass Drop', dialogue: null, type: 'boom', pitch: 80 },
  { name: 'Sad Harmonium', origin: 'Indian Fail BGM', dialogue: null, type: 'harmonium', pitch: 260 },
  { name: 'Record Scratch', origin: 'Awkward Stop SFX', dialogue: null, type: 'scratch', pitch: 600 },
  { name: 'Moye Moye', origin: 'Viral Meme Hook', dialogue: null, type: 'fail', pitch: 440 }
];

function renderSoundboard() {
  const grid = document.getElementById('soundboardGrid');
  grid.innerHTML = '';

  soundboardData.forEach(item => {
    const pad = document.createElement('button');
    pad.className = 'sound-pad rounded-2xl p-4 text-left flex flex-col justify-between bg-white border border-[#ede5dd] shadow-sm hover:border-[#8ad4b6] transition group';
    pad.onclick = () => {
      unlockAudioContext();
      if (item.dialogue) {
        // Play real voice with Sarvam Bulbul TTS
        playDialogueVoice(item.dialogue, 'ratan', pad);
      } else {
        // High-presence synthesized sound effect
        playSynthesizedSFX(item.type, item.pitch);
      }
    };

    pad.innerHTML = `
      <div>
        <div class="flex items-center justify-between text-[11px] text-slate-500 mb-1">
          <span>${item.origin}</span>
          <i class="fa-solid fa-volume-high text-[#2d7e5d] opacity-70 group-hover:opacity-100 transition"></i>
        </div>
        <h4 class="text-sm font-bold text-slate-800 group-hover:text-[#2d7e5d] transition">${item.name}</h4>
      </div>
      <div class="mt-3 flex items-center justify-between text-[10px] text-slate-500 border-t border-[#ede5dd] pt-2">
        <span class="uppercase tracking-wider font-semibold text-[#854522] bg-[#f0c6ad]/30 px-2 py-0.5 rounded">${item.type}</span>
        <span class="text-slate-400 font-medium">Click to Play</span>
      </div>
    `;
    grid.appendChild(pad);
  });
}

// Initial setup
window.addEventListener('DOMContentLoaded', () => {
  renderMemeCanvas();
  renderSoundboard();
  renderTrendingIdeas();
});
