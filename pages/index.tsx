import { PlaylistCard } from '@/components/PlaylistCard';
import { Layout } from '@/layouts/Layout';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <div className='contenedor-playlists'>
          <div className='playlist-header'>
            <span>Focus</span>
            <span>Show all</span>
          </div>
          <div className='playlists'>
            <PlaylistCard
              title='Peaceful Piano'
              description='Relax and indulge with beautiful piano pieces'
              image='/media/pictures/peaceful-piano.png'
            />
          </div>
        </div>
        <div className='contenedor-playlists'>
          <div className='playlist-header'>
            <span>Spotify Playlists</span>
            <span>Show all</span>
          </div>
          <div className='playlists'>
            <PlaylistCard
              title="Today's Top Hits"
              description='PinkPantheress & Ice Spice are on top of the Hottest 50!'
              image='/media/pictures/todays-top-hits.png'
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
