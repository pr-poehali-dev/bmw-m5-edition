import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  bpm: number;
  genre: string;
}

const tracks: Track[] = [
  { id: 1, title: "LXST CXNTURY - ODIUM", artist: "LXST CXNTURY", duration: "2:45", bpm: 160, genre: "Phonk" },
  { id: 2, title: "KORDHELL - MURDER IN MY MIND", artist: "KORDHELL", duration: "2:30", bpm: 140, genre: "Phonk" },
  { id: 3, title: "DVRST - CLOSE EYES", artist: "DVRST", duration: "3:10", bpm: 145, genre: "Phonk" },
  { id: 4, title: "PLAYBOI CARTI - MAGNOLIA", artist: "Playboi Carti", duration: "2:55", bpm: 130, genre: "Trap" },
  { id: 5, title: "SKELER - TEL AVIV", artist: "SKELER", duration: "3:20", bpm: 150, genre: "Wave" },
  { id: 6, title: "PHARMACIST - NORTH MEMPHIS", artist: "Pharmacist", duration: "2:40", bpm: 155, genre: "Phonk" },
];

export default function Index() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTrackSelect = (track: Track) => {
    if (selectedTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setSelectedTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://cdn.poehali.dev/projects/11a8a20b-244e-44de-8503-9180ab389811/files/a0ed2b08-b492-4408-81eb-7338b1d4ce09.jpg')`
        }}
      >
        <div className="text-center z-10 space-y-6 animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-bold text-white text-glow">
            BMW M5 F90
          </h1>
          <p className="text-2xl text-silver uppercase tracking-wider">
            Edit Studio
          </p>
          <div className="flex items-center justify-center gap-4 text-primary">
            <div className="flex items-center gap-2">
              <Icon name="Gauge" size={24} />
              <span className="text-xl font-bold">625 HP</span>
            </div>
            <div className="w-px h-8 bg-primary"></div>
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={24} />
              <span className="text-xl font-bold">750 NM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">Track Library</h2>
          <p className="text-muted-foreground">Select a track for your edit</p>
        </div>

        {selectedTrack && (
          <Card className="p-6 mb-8 bg-card border-primary/50 animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  size="lg"
                  className="h-16 w-16 rounded-full bg-primary hover:bg-primary/90"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <Icon name={isPlaying ? "Pause" : "Play"} size={28} />
                </Button>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedTrack.title}</h3>
                  <p className="text-muted-foreground">{selectedTrack.artist}</p>
                </div>
              </div>
              <div className="flex gap-6 text-center">
                <div>
                  <div className="text-sm text-muted-foreground">BPM</div>
                  <div className="text-xl font-bold text-primary">{selectedTrack.bpm}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="text-xl font-bold text-white">{selectedTrack.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Genre</div>
                  <div className="text-xl font-bold text-white">{selectedTrack.genre}</div>
                </div>
              </div>
            </div>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tracks.map((track) => (
            <Card
              key={track.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover-scale ${
                selectedTrack?.id === track.id
                  ? 'bg-primary/20 border-primary animate-pulse-glow'
                  : 'bg-card hover:bg-card/80 border-border'
              }`}
              onClick={() => handleTrackSelect(track)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
                    {track.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{track.artist}</p>
                </div>
                <Icon
                  name={selectedTrack?.id === track.id && isPlaying ? "Volume2" : "Music"}
                  size={24}
                  className="text-primary"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">{track.duration}</span>
                  <span className="text-primary font-bold">{track.bpm} BPM</span>
                </div>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                  {track.genre}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            <Icon name="Download" size={24} className="mr-2" />
            Start Edit
          </Button>
        </div>
      </div>
    </div>
  );
}
