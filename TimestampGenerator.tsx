import { useState } from 'react';
import { Copy, Download, Check } from 'lucide-react';
import { extractVideoId, parseTimestamps } from '../utils/timestampUtils';
import './TimestampGenerator.css';

interface Timestamp {
  time: string;
  title: string;
  seconds: number;
}

function TimestampGenerator() {
  const [videoUrl, setVideoUrl] = useState('');
  const [timestampsInput, setTimestampsInput] = useState('');
  const [generatedTimestamps, setGeneratedTimestamps] = useState<Timestamp[]>([]);
  const [videoId, setVideoId] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = () => {
    setError('');

    if (!videoUrl.trim()) {
      setError('Please enter a YouTube video URL');
      return;
    }

    if (!timestampsInput.trim()) {
      setError('Please enter at least one timestamp');
      return;
    }

    const extractedId = extractVideoId(videoUrl);
    if (!extractedId) {
      setError('Invalid YouTube URL. Please use a valid YouTube video link.');
      return;
    }

    try {
      const parsedTimestamps = parseTimestamps(timestampsInput);
      if (parsedTimestamps.length === 0) {
        setError('No valid timestamps found. Format: seconds title');
        return;
      }

      setVideoId(extractedId);
      setGeneratedTimestamps(parsedTimestamps);
      setError('');
    } catch (err) {
      setError('Error parsing timestamps. Format each line as: seconds title');
    }
  };

  const handleCopy = async () => {
    const text = generatedTimestamps
      .map(ts => `${ts.time} ${ts.title}`)
      .join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = () => {
    const text = generatedTimestamps
      .map(ts => `${ts.time} ${ts.title}`)
      .join('\n');

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'youtube-timestamps.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setVideoUrl('');
    setTimestampsInput('');
    setGeneratedTimestamps([]);
    setVideoId('');
    setError('');
    setCopied(false);
  };

  return (
    <div className="timestamp-generator">
      <div className="generator-card">
        <div className="input-section">
          <div className="input-group">
            <label htmlFor="video-url">YouTube Video URL</label>
            <input
              id="video-url"
              type="text"
              placeholder="https://www.youtube.com/watch?v=..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label htmlFor="timestamps">
              Timestamps (Format: seconds title, one per line)
            </label>
            <textarea
              id="timestamps"
              placeholder="0 Introduction&#10;30 Main Content&#10;120 Conclusion"
              value={timestampsInput}
              onChange={(e) => setTimestampsInput(e.target.value)}
              className="textarea-field"
              rows={8}
            />
            <p className="input-hint">
              Example: "0 Introduction" or "90 Chapter 2"
            </p>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button onClick={handleGenerate} className="btn btn-primary">
            Generate Timestamps
          </button>
        </div>

        {generatedTimestamps.length > 0 && (
          <div className="output-section">
            {videoId && (
              <div className="video-preview">
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Video thumbnail"
                  onError={(e) => {
                    e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                  }}
                  className="thumbnail"
                />
              </div>
            )}

            <div className="preview-section">
              <h3>Generated Timestamps</h3>
              <div className="timestamps-preview">
                {generatedTimestamps.map((ts, index) => (
                  <div key={index} className="timestamp-line">
                    <span className="timestamp-time">{ts.time}</span>
                    <span className="timestamp-title">{ts.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="action-buttons">
              <button onClick={handleCopy} className="btn btn-secondary">
                {copied ? (
                  <>
                    <Check size={20} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={20} /> Copy to Clipboard
                  </>
                )}
              </button>
              <button onClick={handleDownload} className="btn btn-secondary">
                <Download size={20} /> Download as .txt
              </button>
              <button onClick={handleReset} className="btn btn-outline">
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TimestampGenerator;
