// Hi-Res Music Player UI – Apple Music/Spotify Style
// Stack: React + Tailwind CSS + ReactPlayer
// Works on desktop and mobile – paste YouTube/SoundCloud/Direct MP3 links

import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";

export default function MusicPlayer() {
  const [inputUrl, setInputUrl] = useState("");
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=tgbNymZ7vqY");
  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const playerRef = useRef(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-zinc-900 text-white p-4">
      <div className="w-full max-w-2xl bg-zinc-800 rounded-3xl p-6 shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Hi-Res Music Streamer</h1>
          <p className="text-zinc-400">Looks like Apple Music. Streams like YouTube.</p>
        </div>

        <div className="aspect-video mb-4 rounded-lg overflow-hidden">
          <ReactPlayer
            ref={playerRef}
            url={url}
            playing={playing}
            volume={volume}
            controls={false}
            width="100%"
            height="100%"
            className="rounded-lg"
          />
        </div>

        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => setPlaying(!playing)}
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full flex items-center gap-2"
          >
            {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            {playing ? "Pause" : "Play"}
          </button>

          <div className="flex items-center gap-2 w-full">
            {volume > 0 ? <Volume2 /> : <VolumeX />}
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-full accent-pink-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-zinc-300">Paste Song Link (YouTube/SoundCloud/MP3)</label>
          <input
            type="text"
            placeholder="e.g. https://www.youtube.com/watch?v=..."
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="bg-zinc-700 text-white p-2 rounded-md outline-none"
          />
          <button
            onClick={() => {
              setUrl(inputUrl);
              setPlaying(true);
            }}
            className="bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-full font-semibold"
          >
            <Music className="inline-block mr-2" />Load & Play
          </button>
        </div>
      </div>
    </div>
  );
}
