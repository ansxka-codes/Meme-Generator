import os
import io
import json
import base64
from pathlib import Path
from typing import Optional, List
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.responses import HTMLResponse, JSONResponse, Response
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageOps
from sarvamai import SarvamAI

# -------------------------------------------------------------
# Configuration & Environment
# -------------------------------------------------------------
BASE_DIR = Path(__file__).resolve().parent
ENV_PATH = BASE_DIR / ".env"

if ENV_PATH.exists():
    with open(ENV_PATH, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                key, val = line.split("=", 1)
                val = val.strip().strip("'\"")
                if val:
                    os.environ.setdefault(key.strip(), val)

SARVAM_KEY = os.getenv("SARVAM_API_KEY", "")

def get_sarvam_client():
    key = os.getenv("SARVAM_API_KEY", "")
    if not key:
        return None
    return SarvamAI(api_subscription_key=key)

app = FastAPI(title="MemeVaani - Desi Meme & Video Editor AI Studio")

# Static files setup
STATIC_DIR = BASE_DIR / "static"
try:
    STATIC_DIR.mkdir(parents=True, exist_ok=True)
except Exception:
    pass
app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")

# -------------------------------------------------------------
# Pydantic Schemas
# -------------------------------------------------------------
class RecommendRequest(BaseModel):
    situation: str
    target_format: Optional[str] = "both"  # "meme", "audio", or "both"

class TTSRequest(BaseModel):
    text: str
    language_code: Optional[str] = "hi-IN"
    speaker: Optional[str] = "ratan"

# -------------------------------------------------------------
# Meme Intelligence Prompt
# -------------------------------------------------------------
SYSTEM_PROMPT = """You are "MemeVaani AI", the ultimate Indian Meme, Pop Culture & Video Editor Intelligence.
You possess encyclopedic knowledge of Indian memes, Bollywood, regional cinema (Tollywood, Kollywood, Sandalwood, Mollywood), web series (Panchayat, Mirzapur, Sacred Games, Gullak, Farzi), cricket moments, viral influencer trends (Puneet Superstar, Elvish, Dhruv Rathee, Bhupendra Jogi, Dolly Chaiwala), and classic Indian internet tropes (Hera Pheri, Munna Bhai, Welcome, 3 Idiots, Gangs of Wasseypur).

When a user describes a situation (which might be in English, Hindi, Hinglish, or regional terms):
1. Analyze the core emotion (e.g., betrayal, sudden shock, fake confidence, corporate trauma, jugaad, awkwardness, poverty, moye moye).
2. Recommend 3 highly accurate, culturally iconic Indian meme templates that fit the situation.
3. For video editors, recommend matching Indian meme audio clips (dialogue punchlines, trending BGMs, sound effects) and precise editing cut/timing tips (e.g., pause length, zoom-in, beat drop).

Always reply strictly with a valid JSON object without any Markdown formatting or backticks around it.
JSON structure:
{
  "emotion": "Short punchy emotion tag (e.g., Dhokha / Betrayal, Aukaat Yaad Dila Di)",
  "situation_summary": "1-sentence funny interpretation of the situation",
  "memes": [
    {
      "template_name": "Official name of the meme template",
      "origin": "Movie, Web Series, or Internet trend",
      "iconic_dialogue": "Exact dialogue or punchline in Hinglish/Hindi",
      "character": "Actor or Character name",
      "why_it_fits": "Brief hilarious reason why this fits",
      "suggested_caption": "Ready-to-use funny caption overlay",
      "search_query": "Image search query for video editors to download the blank template",
      "clip_keyword": "Short 1-2 word clip tag: e.g. 'hera_pheri', 'mirzapur', 'panchayat', 'welcome', '3_idiots', 'aayein', 'shark_tank', 'munna_bhai', 'tata_bye_bye', 'cricket', or 'general'"
    }
  ],
  "audio_recommendations": [
    {
      "type": "dialogue_clip | bgm | sfx",
      "title": "Title of the audio clip or sound (e.g., 'Aayein?', 'Moye Moye', 'Hera Pheri flute')",
      "source": "Origin of sound",
      "timing_tip": "When to trigger this sound (e.g., 'Drop 0.2s after the character stares into camera')"
    }
  ],
  "editor_cut_tip": "A professional comedic timing tip for video editors (e.g., zoom, speed ramp, freeze frame, sound placement)."
}
"""

# -------------------------------------------------------------
# Endpoints
# -------------------------------------------------------------
@app.get("/", response_class=HTMLResponse)
def index():
    html_path = BASE_DIR / "templates" / "index.html"
    if html_path.exists():
        return HTMLResponse(content=html_path.read_text(encoding="utf-8"))
    return HTMLResponse(content="<h1>MemeVaani is loading...</h1>")


@app.post("/api/recommend")
async def recommend_meme(req: RecommendRequest):
    client = get_sarvam_client()
    if not client:
        raise HTTPException(status_code=500, detail="SARVAM_API_KEY is not configured.")
    if not req.situation.strip():
        raise HTTPException(status_code=400, detail="Situation cannot be empty.")

    user_query = f"""Situation: {req.situation}
Target focus: {req.target_format}

Return the matching Indian memes, audio cues, and video editor cut tips in the specified JSON structure."""

    try:
        response = client.chat.completions(
            model="sarvam-105b-conversations",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_query}
            ],
            temperature=0.7,
        )
        content = response.choices[0].message.content.strip()
        
        # Strip code fences if present
        if content.startswith("```"):
            lines = content.split("\n")
            if lines[0].startswith("```"):
                lines = lines[1:]
            if lines and lines[-1].startswith("```"):
                lines = lines[:-1]
            content = "\n".join(lines).strip()

        data = json.loads(content)
        return JSONResponse(content=data)
    except json.JSONDecodeError:
        return JSONResponse(content={
            "emotion": "Desi Humour",
            "situation_summary": req.situation,
            "raw_response": content,
            "memes": [
                {
                    "template_name": "Babu Rao Utha Le Re Baba",
                    "origin": "Hera Pheri",
                    "iconic_dialogue": "Utha le re baba, utha le!",
                    "character": "Babu Rao Ganpatrao Apte",
                    "why_it_fits": "Fits any chaotic or disastrous situation.",
                    "suggested_caption": req.situation,
                    "search_query": "babu rao utha le re baba template"
                }
            ],
            "audio_recommendations": [
                {
                    "type": "dialogue_clip",
                    "title": "Aayein?",
                    "source": "Bhupendra Jogi meme",
                    "timing_tip": "Play right when the shock lands."
                }
            ],
            "editor_cut_tip": "Use a 0.3s zoom on punchline."
        })
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/tts")
async def text_to_speech(req: TTSRequest):
    client = get_sarvam_client()
    if not client:
        raise HTTPException(status_code=500, detail="SARVAM_API_KEY is not configured.")
    if not req.text.strip():
        raise HTTPException(status_code=400, detail="Text cannot be empty.")

    try:
        tts_res = client.text_to_speech.convert(
            text=req.text.strip(),
            language_code=req.language_code or "hi-IN",
            speaker=req.speaker or "ratan",
            model="bulbul:v3",
            output_audio_codec="mp3"
        )
        if tts_res.audios and len(tts_res.audios) > 0:
            return JSONResponse(content={
                "audio_base64": tts_res.audios[0],
                "format": "mp3"
            })
        raise HTTPException(status_code=500, detail="No audio returned from Sarvam TTS.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/transcribe")
async def transcribe_audio(file: UploadFile = File(...)):
    client = get_sarvam_client()
    if not client:
        raise HTTPException(status_code=500, detail="SARVAM_API_KEY is not configured.")

    try:
        content = await file.read()
        file_tuple = (file.filename or "audio.wav", content)
        stt_res = client.speech_to_text.transcribe(
            file=file_tuple,
            model="saaras:v3",
            with_timestamps=True
        )
        return JSONResponse(content={
            "transcript": stt_res.transcript,
            "timestamps": stt_res.timestamps,
            "language_code": getattr(stt_res, "language_code", "hi-IN")
        })
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# -------------------------------------------------------------
# Meme & Sticker Image Rendering (PIL)
# -------------------------------------------------------------
def draw_impact_text(draw, text, x, y, font, font_size, max_width, align="center"):
    """Draw classic meme text with thick black outline."""
    words = text.upper().split()
    lines = []
    curr = []
    
    for word in words:
        curr.append(word)
        bbox = draw.textbbox((0, 0), " ".join(curr), font=font)
        if bbox[2] - bbox[0] > max_width and len(curr) > 1:
            curr.pop()
            lines.append(" ".join(curr))
            curr = [word]
    if curr:
        lines.append(" ".join(curr))

    line_height = int(font_size * 1.2)
    start_y = y
    
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=font)
        w = bbox[2] - bbox[0]
        line_x = x - w // 2 if align == "center" else x
        
        # Black outline (thick border)
        stroke = max(2, int(font_size / 15))
        for ox in range(-stroke, stroke + 1):
            for oy in range(-stroke, stroke + 1):
                draw.text((line_x + ox, start_y + oy), line, font=font, fill="black")
                
        # Pure white foreground
        draw.text((line_x, start_y), line, font=font, fill="white")
        start_y += line_height


@app.post("/api/render-meme")
async def render_meme(
    image: Optional[UploadFile] = File(None),
    template_type: str = Form("custom"),
    top_text: str = Form(""),
    bottom_text: str = Form(""),
    is_sticker: bool = Form(False)
):
    try:
        # Load or generate base canvas
        if image and image.filename:
            img_bytes = await image.read()
            base_img = Image.open(io.BytesIO(img_bytes)).convert("RGBA")
        else:
            # Fallback high-contrast template canvas
            base_img = Image.new("RGBA", (800, 800), color=(30, 30, 45, 255))
            draw_placeholder = ImageDraw.Draw(base_img)
            draw_placeholder.rectangle([20, 20, 780, 780], outline=(255, 180, 0), width=6)
            draw_placeholder.text((400, 380), "DESI MEME TEMPLATE", anchor="mm", fill=(255, 220, 100))

        # Resize to manageable web dimensions
        max_dim = 1000
        if max(base_img.size) > max_dim:
            base_img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)

        w, h = base_img.size
        draw = ImageDraw.Draw(base_img)

        # Approximate font sizing
        font_size = max(24, int(w * 0.07))
        try:
            # Try Windows standard Impact or Arial Black font
            font_path = "C:/Windows/Fonts/impact.ttf"
            if not os.path.exists(font_path):
                font_path = "C:/Windows/Fonts/ariblk.ttf"
            if not os.path.exists(font_path):
                font_path = "C:/Windows/Fonts/arial.ttf"
            font = ImageFont.truetype(font_path, font_size)
        except Exception:
            font = ImageFont.load_default()

        # Render Top Text
        if top_text.strip():
            draw_impact_text(draw, top_text.strip(), w // 2, int(h * 0.04), font, font_size, int(w * 0.92))

        # Render Bottom Text
        if bottom_text.strip():
            draw_impact_text(draw, bottom_text.strip(), w // 2, int(h * 0.82), font, font_size, int(w * 0.92))

        # Sticker Mode (White outline border + subtle drop shadow)
        if is_sticker:
            # Add sticker white rounded border
            sticker_canvas = Image.new("RGBA", (w + 40, h + 40), (0, 0, 0, 0))
            mask = base_img.split()[3]
            border_mask = mask.filter(ImageFilter.MaxFilter(21))
            
            # White border
            white_bg = Image.new("RGBA", (w + 40, h + 40), (255, 255, 255, 255))
            sticker_canvas.paste(white_bg, (0, 0), border_mask)
            sticker_canvas.paste(base_img, (20, 20), base_img)
            base_img = sticker_canvas

        out_io = io.BytesIO()
        base_img.save(out_io, format="PNG")
        out_bytes = out_io.getvalue()
        base64_str = base64.b64encode(out_bytes).decode("utf-8")
        
        return JSONResponse(content={
            "image_base64": f"data:image/png;base64,{base64_str}"
        })
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/render-gif")
async def render_gif(
    frames_data: List[str] = Form(...),
    duration: int = Form(100),
    top_text: str = Form(""),
    bottom_text: str = Form("")
):
    """Generates an animated GIF from incoming base64 video frames."""
    try:
        pil_frames = []
        font_size = 28
        try:
            font = ImageFont.truetype("C:/Windows/Fonts/impact.ttf", font_size)
        except Exception:
            font = ImageFont.load_default()

        for f_b64 in frames_data:
            if "," in f_b64:
                f_b64 = f_b64.split(",", 1)[1]
            raw = base64.b64decode(f_b64)
            im = Image.open(io.BytesIO(raw)).convert("RGBA")
            
            # Draw meme captions on each frame
            w, h = im.size
            draw = ImageDraw.Draw(im)
            if top_text.strip():
                draw_impact_text(draw, top_text.strip(), w // 2, 10, font, font_size, int(w * 0.9))
            if bottom_text.strip():
                draw_impact_text(draw, bottom_text.strip(), w // 2, h - int(font_size * 2), font, font_size, int(w * 0.9))
            
            pil_frames.append(im.convert("P", palette=Image.Palette.ADAPTIVE))

        if not pil_frames:
            raise HTTPException(status_code=400, detail="No frames provided.")

        out_io = io.BytesIO()
        pil_frames[0].save(
            out_io,
            format="GIF",
            save_all=True,
            append_images=pil_frames[1:],
            duration=duration,
            loop=0
        )
        gif_b64 = base64.b64encode(out_io.getvalue()).decode("utf-8")
        return JSONResponse(content={"gif_base64": f"data:image/gif;base64,{gif_b64}"})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
