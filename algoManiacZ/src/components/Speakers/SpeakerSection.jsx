import Card from './Card'
import { Speakers } from '../../utils/SpeakerData'
const SpeakerSection = () => {
  const gradientTextStyle = {
    background: 'rgb(2, 0, 36)',
    // eslint-disable-next-line no-dupe-keys
    background:
      'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(55, 43, 208, 1) 0%, rgba(111, 16, 168, 1) 31%, rgba(131, 83, 61, 1) 51%, rgba(255, 139, 0, 1) 77%, rgba(208, 114, 34, 1) 94%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  }
  return (
    <div className="lg:h-[calc(100vh-112px)] h-auto  text-[#aeadaa] bg-[#0e0b10] w-full flex flex-col justify-center  gap-y-3 pt-10">
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
      <div className="grid gap-5 grid-cols-1  lg:grid-cols-3 md:grid-cols-2 lg:mt-4  px-4">
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
