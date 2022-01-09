import {Section, AlbumBox} from 'components'

function Home(props) {

    const items = [
        {
            id: 1,
            title: 'NKVT',
            description: `The best playlist of Turkey. Banner: Tepki`,
            image: 'https://i.scdn.co/image/ab67706f000000021daef9640715e446d80985c5',
            type: 'album'
        },
        {
            id: 2,
            title: 'Codefiction Podcast',
            description: `Codefiction Community`,
            image: 'https://i.scdn.co/image/9a6dba4d601861dc4e56a71c2d62edfe8a986cb6',
            type: 'podcast'
        },
        {
            id: 3,
            title: 'Harekete Geç',
            description: `Egzersizinin her anına tempo tutacak parçalar.`,
            image: 'https://i.scdn.co/image/ab67706f000000027da6d43f86eb52acd4b9deca',
            type: 'album'
        },
        {
            id: 4,
            title: 'Rap Manifesto',
            description: `%100 mana. Banner: Şam`,
            image: 'https://i.scdn.co/image/ab67706f000000024af4ebfa72d7c919a39200f4',
            type: 'album'
        },
        {
            id: 5,
            title: 'This is Beta',
            description: `Funky'den katliama götüren parçalar.`,
            image: 'https://i.scdn.co/image/ab676161000051742d67067756daf59c0074f484',
            type: 'artist'
        }
    ]

    return (
        <div className="grid gap-y-8">
            <Section title="Recently Played" seeAllLink="recently-played">
                {items.map(item => (
                    <AlbumBox {...item} />
                ))}
            </Section>

            <Section title="Show to Try" seeAllLink="recently-played">
                {items.map(item => (
                    <AlbumBox {...item} />
                ))}
            </Section>
        </div>
    );
}

export default Home;