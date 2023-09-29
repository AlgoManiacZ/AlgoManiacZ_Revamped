import Card from './Card'
import Nisha from '../../assets/Nisha1.jpg'
import Manish from '../../assets/Manish1.jpg'
import Ayushi from '../../assets/Ayushi1.jpeg'
const SpeakerSection = () => {
  // color gradient color for the text
  const gradientTextStyle = {
    background: 'rgb(2, 0, 36)',
    // eslint-disable-next-line no-dupe-keys
    background:
      'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(55, 43, 208, 1) 0%, rgba(111, 16, 168, 1) 31%, rgba(131, 83, 61, 1) 51%, rgba(255, 139, 0, 1) 77%, rgba(208, 114, 34, 1) 94%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  }

  const Speakers = [
    {
      name: 'Nisha',
      imageUrl: Nisha,
      about:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos illo fugiat illum nam itaque adipisci perferendis deserunt necessitatibus error. Unde fugiat facilis aliquam soluta placeat non ipsum, harum eos quod!',
      linkedin: '',
      github: '',
    },
    {
      name: 'Manish',
      imageUrl: Manish,
      about:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos illo fugiat illum nam itaque adipisci perferendis deserunt necessitatibus error. Unde fugiat facilis aliquam soluta placeat non ipsum, harum eos quod!',
      linkedin: '',
      github: '',
    },
    {
      name: 'Ayushi',
      imageUrl: Ayushi,
      about:
        ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos illo fugiat illum nam itaque adipisci perferendis deserunt necessitatibus error. Unde fugiat facilis aliquam soluta placeat non ipsum, harum eos quod!',
      linkedin: '',
      github: '',
    },
  ]

  return (
    <div className="lg:h-[calc(100vh-112px)] h-auto  text-[#aeadaa] bg-[#0e0b10] w-full flex flex-col justify-center gap-y-3 pt-10 lg:pt-0">
      <div className="text-center">
        <h1 className="text-4xl font-bold   lg:text-5xl xl:text-8xl">
          Whos Speaking?
        </h1>
        <p
          className="mt-2 text-3xl "
          style={gradientTextStyle}
        >
          Take a look at the Speakers at our channel
        </p>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 lg:mt-4  ">
        {Speakers.map((speaker) => {
          return (
            <Card
              key={speaker.name}
              {...speaker}
            ></Card>
          )
        })}
      </div>
    </div>
  )
}

export default SpeakerSection
