import { PlaylistCard } from '@/components/PlaylistCard';
import { Layout } from '@/layouts/Layout';
import Head from 'next/head';
import Link from 'next/link';

const playlistInfo = {
  focus: [
    {
      title: 'Peaceful Piano',
      description: 'Relax and indulge with beautiful piano pieces',
      image: '/media/pictures/peaceful-piano.png',
    },
    {
      title: 'Deep Focus',
      description: 'Keep calm and focus with ambient music.',
      image: '/media/pictures/deep-focus.png',
    },
    {
      title: 'Instrumental Study',
      description: 'Focus with soft study music in the background.',
      image: '/media/pictures/instrumental-study.png',
    },
    {
      title: 'Jazz Vibes',
      description: 'The original chill instrumental beats playlist.',
      image: '/media/pictures/jazz-vibes.png',
    },
    {
      title: 'Focus Flow',
      description: 'Uptempo instrumental hip hop beats.',
      image: '/media/pictures/focus-flow.png',
    },
    {
      title: 'Workday Lounge',
      description: 'Lounge and chill out music for your workday.',
      image: '/media/pictures/workday-lounge.png',
    },
  ],
  playlists: [],
};

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Spotify</title>
      </Head>
      <Layout>
        <section>
          <div className='contenedor-playlists'>
            <div className='playlist-header'>
              <span>Focus</span>
              <span>Show all</span>
            </div>
            <div className='playlists'>
              {playlistInfo.focus.map((playlist, index) => {
                return (
                  <PlaylistCard
                    key={`playlist-info-${index}`}
                    title={playlist.title}
                    description={playlist.description}
                    image={playlist.image}
                  />
                );
              })}
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
    </>
  );
};

export default IndexPage;
