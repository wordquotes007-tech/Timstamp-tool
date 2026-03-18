export function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

export function formatTimestamp(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  return `${minutes}:${String(secs).padStart(2, '0')}`;
}

export function parseTimestamps(input: string): Array<{time: string; title: string; seconds: number}> {
  const lines = input.split('\n').filter(line => line.trim());
  const timestamps: Array<{time: string; title: string; seconds: number}> = [];

  for (const line of lines) {
    const trimmed = line.trim();
    const match = trimmed.match(/^(\d+)\s+(.+)$/);

    if (match) {
      const seconds = parseInt(match[1], 10);
      const title = match[2].trim();

      if (!isNaN(seconds) && title) {
        timestamps.push({
          time: formatTimestamp(seconds),
          title: title,
          seconds: seconds
        });
      }
    }
  }

  timestamps.sort((a, b) => a.seconds - b.seconds);

  return timestamps;
}
