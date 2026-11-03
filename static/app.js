// MemeVaani - Desi Meme & Video Editor Studio Logic
// Theme: #f0c6ad (Peach) & #8ad4b6 (Mint)

// ==========================================
// Curated Indian Meme Clip & GIF Database
// ==========================================
const MEME_CLIP_LIBRARY = {
  hera_pheri: {
    id: "akshay_scheme",
    clipUrl: "/static/templates/akshay_scheme.gif",
    poster: "/static/templates/akshay_scheme.png",
    templateUrl: "/static/templates/akshay_scheme.png",
    title: "Akshay Kumar - 25 Din Me Paisa Double",
    movie: "Phir Hera Pheri",
    character: "Raju",
    dialogue: "25 din me paisa double!",
    category: "bollywood",
    defaultTop: "WHEN FRIEND SAYS: KAL PAKKA PAISE WAPAS KARUNGA",
    defaultBottom: "25 DIN ME PAISA DOUBLE"
  },
  babu_rao: {
    id: "babu_rao",
    clipUrl: "/static/templates/babu_rao.gif",
    poster: "/static/templates/babu_rao.png",
    templateUrl: "/static/templates/babu_rao.png",
    title: "Babu Rao - Utha Le Re Baba",
    movie: "Hera Pheri",
    character: "Babu Rao Apte",
    dialogue: "Utha le re baba, utha le!",
    category: "bollywood",
    defaultTop: "CLIENT CALL AT 8:58 AM ON MONDAY",
    defaultBottom: "UTHA LE RE BABA UTHA LE"
  },
  mirzapur: {
    id: "mirzapur_jalwa",
    clipUrl: "/static/templates/mirzapur_jalwa.gif",
    poster: "/static/templates/mirzapur_jalwa.png",
    templateUrl: "/static/templates/mirzapur_jalwa.png",
    title: "Munna Bhaiya - Jalwa Hai Hamara",
    movie: "Mirzapur",
    character: "Munna / Kaleen Bhaiya",
    dialogue: "Jalwa hai hamara yahan!",
    category: "webseries",
    defaultTop: "FIXED PRODUCTION BUG IN 1 MINUTE",
    defaultBottom: "JALWA HAI HAMARA YAHAN"
  },
  panchayat: {
    id: "panchayat_binod",
    clipUrl: "/static/templates/panchayat_binod.gif",
    poster: "/static/templates/panchayat_binod.png",
    templateUrl: "/static/templates/panchayat_binod.png",
    title: "Dekh Raha Hai Binod",
    movie: "Panchayat",
    character: "Banrakas & Binod",
    dialogue: "Dekh raha hai Binod, kaise baatein ghumaayi jaa rahi hain",
    category: "webseries",
    defaultTop: "MANAGER EXPLAINING 2% SALARY HIKE",
    defaultBottom: "DEKH RAHA HAI BINOD"
  },
  three_idiots: {
    id: "three_idiots",
    clipUrl: "/static/templates/three_idiots.gif",
    poster: "/static/templates/three_idiots.png",
    templateUrl: "/static/templates/three_idiots.png",
    title: "Arre Kehna Kya Chahte Ho",
    movie: "3 Idiots",
    character: "Chatur / Silencer",
    dialogue: "Arre kehna kya chahte ho?",
    category: "bollywood",
    defaultTop: "CLIENT 8-PAGE FEEDBACK FOR BUTTON COLOR",
    defaultBottom: "ARRE KEHNA KYA CHAHTE HO"
  },
  welcome: {
    id: "welcome_majnu",
    clipUrl: "/static/templates/welcome_majnu.gif",
    poster: "/static/templates/welcome_majnu.png",
    templateUrl: "/static/templates/welcome_majnu.png",
    title: "Majnu Bhai - Meri Ek Taang Nakli Hai",
    movie: "Welcome",
    character: "Majnu Bhai (Anil Kapoor)",
    dialogue: "Meri ek taang nakli hai, main hockey ka khiladi tha",
    category: "bollywood",
    defaultTop: "ME EXPLAINING WHY I AM LATE AGAIN",
    defaultBottom: "MERI EK TAANG NAKLI HAI"
  },
  aayein: {
    id: "aayein",
    clipUrl: "/static/templates/aayein.gif",
    poster: "/static/templates/aayein.png",
    templateUrl: "/static/templates/aayein.png",
    title: "Aayein? (Bhupendra Jogi)",
    movie: "Viral Interview",
    character: "Bhupendra Jogi",
    dialogue: "Aayein? US me bahut jagah gaye hain",
    category: "viral",
    defaultTop: "WHERE DO YOU SEE YOURSELF IN 5 YEARS?",
    defaultBottom: "AAYEIN? US ME BAHUT JAGAH GAYE HAIN"
  },
  tata_bye_bye: {
    id: "tata_bye_bye",
    clipUrl: "/static/templates/tata_bye_bye.gif",
    poster: "/static/templates/tata_bye_bye.png",
    templateUrl: "/static/templates/tata_bye_bye.png",
    title: "Gaya... Khatam... Tata Bye Bye",
    movie: "Viral Speech",
    character: "Rahul Gandhi",
    dialogue: "Gaya, khatam, tata, bye bye!",
    category: "viral",
    defaultTop: "MOM OPENING THE EXAM REPORT CARD",
    defaultBottom: "GAYA KHATAM TATA BYE BYE"
  },
  shark_tank: {
    id: "shark_tank",
    clipUrl: "/static/templates/shark_tank.gif",
    poster: "/static/templates/shark_tank.png",
    templateUrl: "/static/templates/shark_tank.png",
    title: "Ashneer Grover - Yeh Sab Doglapan Hai",
    movie: "Shark Tank India",
    character: "Ashneer Grover",
    dialogue: "Yeh sab doglapan hai!",
    category: "viral",
    defaultTop: "WHEN TOPPER SAYS: BHAI MAINE KUCH NAHI PADHA",
    defaultBottom: "YEH SAB DOGLAPAN HAI"
  },
  munna_bhai: {
    id: "munna_bhai",
    clipUrl: "/static/templates/munna_bhai.gif",
    poster: "/static/templates/munna_bhai.png",
    templateUrl: "/static/templates/munna_bhai.png",
    title: "Munna Bhai - Nahi",
    movie: "Munna Bhai M.B.B.S.",
    character: "Sanjay Dutt",
    dialogue: "Nahi!",
    category: "bollywood",
    defaultTop: "CAN YOU WORK OVERTIME THIS WEEKEND?",
    defaultBottom: "NAHI"
  },
  moye_moye: {
    id: "moye_moye",
    clipUrl: "/static/templates/moye_moye.gif",
    poster: "/static/templates/moye_moye.png",
    templateUrl: "/static/templates/moye_moye.png",
    title: "Moye Moye Traumatic Moment",
    movie: "Viral Reel",
    character: "Viral Hook",
    dialogue: "Moye Moye",
    category: "viral",
    defaultTop: "INVESTED ALL SAVINGS IN RANDOM CRYPTO COIN",
    defaultBottom: "MOYE MOYE"
  }
};

let ALL_DESI_MEMES = Object.values(MEME_CLIP_LIBRARY);

const MEME_MEDIA_API = "https://justmeme.wtf/api/v1";
let EXTERNAL_MEME_TEMPLATES = [];
let EXTERNAL_TRENDING_MEMES = [];

function proxiedMemeImage(url) {
  return "/api/meme-image?url=" + encodeURIComponent(url);
}

function normalizeExternalTemplate(template) {
  const imageUrl = template && (template.url || template.image_url);
  if (!imageUrl || !/^https:\/\/i\.imgflip\.com\//i.test(imageUrl)) return null;
  const slug = template.slug || template.id || template.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const tags = Array.isArray(template.categories) ? template.categories : [];
  const categoryText = (tags.join(" ") + " " + template.name).toLowerCase();
  let category = "community";
  if (/bollywood|indian|desi|hera pheri|babu rao|munna bhai|panchayat|mirzapur|ashneer|bhupendra|aayein/.test(categoryText)) category = "bollywood";
  else if (/web.?series|series|show/.test(categoryText)) category = "webseries";
  else if (/viral|reaction|trending/.test(categoryText)) category = "viral";
  const proxiedUrl = proxiedMemeImage(imageUrl);
  return {
    id: "external-" + String(slug).replace(/[^a-zA-Z0-9_-]/g, "-"),
    externalId: template.id || slug,
    title: template.name || "Meme template",
    movie: tags.length ? tags.join(" · ") : "Community template",
    character: "Template",
    dialogue: "",
    category,
    clipUrl: proxiedUrl,
    poster: proxiedUrl,
    templateUrl: proxiedUrl,
    sourceUrl: imageUrl,
    pageUrl: template.page_url || ("https://justmeme.wtf/meme/" + slug),
    defaultTop: "",
    defaultBottom: ""
  };
}

async function fetchMemeApi(path) {
  const response = await fetch(MEME_MEDIA_API + path);
  if (!response.ok) throw new Error("Meme library request failed (" + response.status + ")");
  const data = await response.json();
  if (data.success === false) throw new Error(data.error || "Meme library request failed");
  return data;
}

async function loadExternalMemeLibrary() {
  const queries = ["hera pheri", "babu rao", "aayein", "binod", "ashneer", "indian meme", "bollywood", "munna bhai", "puneet superstar", "bhupendra jogi"];
  try {
    const results = await Promise.allSettled([
      fetchMemeApi("/trending"),
      fetchMemeApi("/templates?page=1&limit=100"),
      ...queries.map(q => fetchMemeApi("/templates/search?q=" + encodeURIComponent(q)))
    ]);
    const collected = [];
    const trendingData = results[0].status === "fulfilled" ? results[0].value : {};
    const popularData = results[1].status === "fulfilled" ? results[1].value : {};
    EXTERNAL_TRENDING_MEMES = (trendingData.trending || []).map(normalizeExternalTemplate).filter(Boolean);
    collected.push(...(popularData.templates || []));
    results.slice(2).forEach(result => {
      if (result.status === "fulfilled") collected.push(...(result.value.templates || []));
    });
    collected.push(...(trendingData.trending || []));
    const unique = new Map();
    collected.forEach(item => {
      const normalized = normalizeExternalTemplate(item);
      if (normalized && !unique.has(normalized.id)) unique.set(normalized.id, normalized);
    });
    EXTERNAL_MEME_TEMPLATES = Array.from(unique.values());
    if (!EXTERNAL_MEME_TEMPLATES.length) throw new Error("The meme provider returned no usable templates.");

    // Replace the broken local placeholder paths with real, externally hosted templates.
    ALL_DESI_MEMES = EXTERNAL_MEME_TEMPLATES;
    TRENDING_MEME_IDEAS = (EXTERNAL_TRENDING_MEMES.length ? EXTERNAL_TRENDING_MEMES : ALL_DESI_MEMES.slice(0, 8))
      .map((item, index) => ({
        ...item,
        situation: "Try this real meme template with your own situation.",
        dialogue: "",
        category: item.category || "community"
      }));
    renderTemplatePicker();
    renderTrendingIdeas();
    renderVaultMemes();
    if (ALL_DESI_MEMES[0]) selectStockTemplate(ALL_DESI_MEMES[0].id);
  } catch (error) {
    console.warn("Could not load external meme templates:", error);
    const grid = document.getElementById("vaultMemeGrid");
    if (grid && !EXTERNAL_MEME_TEMPLATES.length) {
      grid.innerHTML = '<p class="col-span-full text-sm text-slate-500">Live meme templates are temporarily unavailable. Please refresh to try again.</p>';
    }
  }
}

function getBestClipForMeme(meme) {
  const text = ((meme.template_name || "") + " " + (meme.origin || "") + " " +
    (meme.character || "") + " " + (meme.clip_keyword || "") + " " + (meme.search_query || "")).toLowerCase();
  const words = text.split(/[^a-z0-9]+/).filter(word => word.length > 2);
  let best = null;
  let bestScore = 0;
  EXTERNAL_MEME_TEMPLATES.forEach(template => {
    const candidate = (template.title + " " + template.movie + " " + template.character).toLowerCase();
    const score = words.reduce((total, word) => total + (candidate.includes(word) ? 1 : 0), 0);
    if (score > bestScore) {
      best = template;
      bestScore = score;
    }
  });
  return best || null;
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
    if (!clipData) return;
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

  const matched = ALL_DESI_MEMES.find(m => 
    templateName.toLowerCase().includes(m.id) || 
    templateName.toLowerCase().includes(m.movie.toLowerCase()) ||
    (m.character && templateName.toLowerCase().includes(m.character.toLowerCase()))
  );

  const imgToLoad = matched ? matched.templateUrl : (clipUrl || (EXTERNAL_TRENDING_MEMES[0] && EXTERNAL_TRENDING_MEMES[0].templateUrl) || '/static/templates/akshay_scheme.png');
  const img = new Image();
  img.onload = () => {
    currentMemeImg = img;
    currentTemplateType = matched ? matched.id : 'clip';
    document.getElementById('memeUploadLabel').innerText = templateName + ' (Loaded)';
    renderMemeCanvas();
  };
  img.src = imgToLoad;

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
let currentTemplateType = 'akshay_scheme';

function selectStockTemplate(memeId) {
  const meme = ALL_DESI_MEMES.find(m => m.id === memeId) || ALL_DESI_MEMES[0];
  if (!meme) return;

  const img = new Image();
  img.onload = () => {
    currentMemeImg = img;
    currentTemplateType = meme.id;
    if (meme.defaultTop) document.getElementById('memeTopText').value = meme.defaultTop;
    if (meme.defaultBottom) document.getElementById('memeBottomText').value = meme.defaultBottom;
    document.getElementById('memeUploadLabel').innerText = `${meme.title} (Loaded)`;
    renderMemeCanvas();
  };
  img.src = meme.templateUrl;

  document.querySelectorAll('.template-pick-card').forEach(c => {
    c.classList.remove('border-[#8ad4b6]', 'ring-2', 'ring-[#8ad4b6]', 'bg-[#8ad4b6]/10');
  });
  const activeEl = document.getElementById(`template-card-${memeId}`);
  if (activeEl) activeEl.classList.add('border-[#8ad4b6]', 'ring-2', 'ring-[#8ad4b6]', 'bg-[#8ad4b6]/10');
}

function renderTemplatePicker() {
  const container = document.getElementById('templatePickerContainer');
  if (!container) return;
  container.innerHTML = '';

  ALL_DESI_MEMES.forEach(m => {
    const card = document.createElement('button');
    card.id = `template-card-${m.id}`;
    card.className = 'template-pick-card p-1.5 rounded-xl border border-[#ede5dd] bg-white hover:border-[#8ad4b6] transition flex flex-col items-center text-center shadow-sm';
    card.onclick = () => selectStockTemplate(m.id);
    card.innerHTML = `
      <img src="${m.poster}" alt="${m.title}" class="w-full h-14 object-cover rounded-lg mb-1">
      <span class="text-[10px] font-bold text-slate-800 truncate w-full">${m.character || m.title}</span>
      <span class="text-[9px] text-slate-500 truncate w-full">${m.movie}</span>
    `;
    container.appendChild(card);
  });
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
let TRENDING_MEME_IDEAS = [
  {
    id: "scheme",
    category: "dosti",
    movie: "Phir Hera Pheri",
    template_name: "25 Din Me Paisa Double",
    situation: "When friend promises: 'Bhai kal pakka paise wapas karunga, aisi scheme hai ki 25 din me paisa double!'",
    dialogue: "25 din me paisa double!",
    clipUrl: "/static/templates/akshay_scheme.gif"
  },
  {
    id: "binod",
    category: "corporate",
    movie: "Panchayat",
    template_name: "Dekh Raha Hai Binod",
    situation: "When manager pretends to be your best friend in 1-on-1 right before giving a 2% appraisal.",
    dialogue: "Dekh raha hai Binod, kaise baatein ghumaayi jaa rahi hain",
    clipUrl: "/static/templates/panchayat_binod.gif"
  },
  {
    id: "jalwa",
    category: "corporate",
    movie: "Mirzapur",
    template_name: "Jalwa Hai Hamara",
    situation: "When you finally fix an impossible production bug after 10 hours with one simple print statement.",
    dialogue: "Jalwa hai hamara yahan!",
    clipUrl: "/static/templates/mirzapur_jalwa.gif"
  },
  {
    id: "kehna_kya",
    category: "exams",
    movie: "3 Idiots",
    template_name: "Arre Kehna Kya Chahte Ho",
    situation: "When client sends an 8-page document explaining feedback for a single button color change.",
    dialogue: "Arre kehna kya chahte ho?",
    clipUrl: "/static/templates/three_idiots.gif"
  },
  {
    id: "aayein",
    category: "corporate",
    movie: "Viral Interview",
    template_name: "Aayein? (Bhupendra Jogi)",
    situation: "When interviewer asks: 'Where do you see yourself in 5 years solving quantum equations in Excel?'",
    dialogue: "Aayein? US me bahut jagah gaye hain",
    clipUrl: "/static/templates/aayein.gif"
  },
  {
    id: "doglapan",
    category: "dosti",
    movie: "Shark Tank India",
    template_name: "Yeh Sab Doglapan Hai",
    situation: "When that one friend who said 'bhai bilkul padhai nahi hui' scores 98% in the final exam.",
    dialogue: "Yeh sab doglapan hai!",
    clipUrl: "/static/templates/shark_tank.gif"
  },
  {
    id: "tata_bye",
    category: "exams",
    movie: "Viral Speech",
    template_name: "Gaya... Khatam... Tata Bye Bye",
    situation: "When mom finds the semester report card behind the fridge and calls you by your full official name.",
    dialogue: "Gaya, khatam, tata, bye bye!",
    clipUrl: "/static/templates/tata_bye_bye.gif"
  },
  {
    id: "babu_rao",
    category: "bollywood",
    movie: "Hera Pheri",
    template_name: "Utha Le Re Baba",
    situation: "When you wake up at 8:58 AM on Monday and remember your client demo starts at 9:00 AM.",
    dialogue: "Utha le re baba, utha le, mere ko nahi re, in dono ko utha le!",
    clipUrl: "/static/templates/babu_rao.gif"
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

function renderVaultMemes(filterText = '', category = 'all') {
  const grid = document.getElementById('vaultMemeGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const search = (filterText || '').toLowerCase().trim();
  const filtered = ALL_DESI_MEMES.filter(m => {
    const matchesCat = category === 'all' || m.category === category;
    const matchesSearch = !search || 
      m.title.toLowerCase().includes(search) || 
      m.dialogue.toLowerCase().includes(search) ||
      m.movie.toLowerCase().includes(search) ||
      (m.character && m.character.toLowerCase().includes(search));
    return matchesCat && matchesSearch;
  });

  filtered.forEach(m => {
    const card = document.createElement('div');
    card.className = 'meme-card rounded-2xl p-4 bg-white border border-[#ede5dd] shadow-sm flex flex-col justify-between space-y-3';
    card.innerHTML = `
      <div>
        <div class="clip-preview-container border border-[#ede5dd] shadow-sm group bg-[#faf8f5] mb-2.5">
          <img src="${m.clipUrl}" alt="${m.title}" class="w-full h-full object-cover">
          <div class="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/95 text-[#1e5843] text-[10px] font-bold border border-[#8ad4b6]/60 shadow-sm">
            <i class="fa-solid fa-play mr-1 text-[#2d7e5d]"></i>Template Clip
          </div>
          <a href="${m.templateUrl}" download="${m.id}-template.png" class="absolute top-2 right-2 px-2 py-1 rounded bg-white/95 hover:bg-white text-slate-700 text-xs shadow-sm transition" title="Download Blank Template">
            <i class="fa-solid fa-download"></i>
          </a>
        </div>

        <div class="flex items-center justify-between text-xs mb-1">
          <span class="px-2 py-0.5 rounded-full bg-[#f0c6ad]/40 text-[#854522] font-semibold text-[10px] border border-[#f0c6ad]">${m.movie}</span>
          <span class="text-[11px] font-bold text-[#2d7e5d] uppercase tracking-wider">${m.character || ''}</span>
        </div>
        <h4 class="text-sm font-bold text-slate-800">${m.title}</h4>
        
        <div class="mt-2 flex items-center justify-between bg-[#faf8f5] border border-[#ede5dd] rounded-lg p-2">
          <span class="text-xs font-mono font-medium text-[#854522] truncate mr-2">"${m.dialogue}"</span>
          <button onclick="playDialogueVoice('${encodeURIComponent(m.dialogue)}', 'ratan', this)" class="px-2 py-1 rounded-full bg-white hover:bg-[#ede5dd] text-[#2d7e5d] text-xs shadow-sm border border-[#ede5dd] flex items-center space-x-1 shrink-0 transition" title="Listen to voice">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>

      <div class="pt-2 border-t border-[#ede5dd] flex items-center space-x-2">
        <button onclick="openMemeInStudio('${m.id}')" class="flex-1 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#ede5dd] text-xs font-semibold text-slate-700 border border-[#ede5dd] transition flex items-center justify-center space-x-1">
          <i class="fa-regular fa-image text-[#2d7e5d]"></i>
          <span>Create Meme</span>
        </button>
        <a href="${m.templateUrl}" download="${m.id}-template.png" class="px-3 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#ede5dd] text-xs font-semibold text-slate-700 border border-[#ede5dd] transition flex items-center justify-center space-x-1" title="Download High-Res Blank Template">
          <i class="fa-solid fa-download text-[#b86134]"></i>
          <span>Template</span>
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterVaultMemes() {
  const query = document.getElementById('vaultSearchInput').value;
  const category = document.getElementById('vaultCategoryFilter').value;
  renderVaultMemes(query, category);
}

function openMemeInStudio(memeId) {
  switchTab('tab-meme-studio');
  selectStockTemplate(memeId);
}

// Initial setup
window.addEventListener('DOMContentLoaded', () => {
  renderSoundboard();
  const vault = document.getElementById("vaultMemeGrid");
  if (vault) vault.innerHTML = '<p class="col-span-full text-sm text-slate-500">Loading real meme templates…</p>';
  loadExternalMemeLibrary();
});
